const fs = require("fs");

const ignoredSortingDirectories = [".git", ".next", ".vscode", "node_modules"];

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "react-app", "prettier", "plugin:@next/next/recommended"],
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "sort-imports": ["error", { ignoreCase: true, ignoreDeclarationSort: true }],
    "import/order": [
      1,
      {
        groups: ["external", "builtin", "internal", "sibling", "parent", "index"],
        pathGroups: [
          ...getDirectoriesToSort().map((singleDir) => ({
            pattern: `${singleDir}/**`,
            group: "internal",
          })),
          { pattern: "env", group: "internal" },
          { pattern: "theme", group: "internal" },
          { pattern: "public/**", group: "internal", position: "after" },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  ignorePatterns: [".*"],
};

function getDirectoriesToSort() {
  return getDirectories(process.cwd()).filter((f) => !ignoredSortingDirectories.includes(f));
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isDirectory();
  });
}
