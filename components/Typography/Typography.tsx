import classnames from "classnames";
import React from "react";

type Align = "center" | "justify" | "left" | "right";
type Weight = "bold" | "semibold" | "medium" | "normal" | "light";
type TypoProps<E extends React.ElementType> = Props<E> & Omit<React.ComponentProps<E>, keyof Props<E>>;

interface Props<E extends React.ElementType> {
  children: React.ReactNode;
  variant?: E;
  className?: string;
  align?: Align;
  weight?: Weight;
}

const classes = {
  align: {
    center: "text-center",
    left: "text-left",
    right: "text-right",
    justify: "text-justify",
  },
  weight: {
    bold: "font-bold",
    semibold: "font-semibold",
    medium: "font-medium",
    normal: "font-normal",
    light: "font-light",
  },
};

export const Typography = <E extends React.ElementType = "p">({
  variant,
  children,
  className,
  align,
  weight,
  ...props
}: TypoProps<E>) => {
  const Component = variant || "p";
  return (
    <Component
      {...props}
      className={classnames(`
        ${align && classes.align[align]}
        ${weight && classes.weight[weight]}
        ${className}
      `)}
    >
      {children}
    </Component>
  );
};

Typography.defaultProps = {
  children: "",
  className: "",
  align: "",
  weight: "",
};
