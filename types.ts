export type Variants = "primary" | "secondary" | "danger";

export type ConditionalStyles =
  | {
      variant?: Variants;
      pill?: boolean;
      outline?: boolean;
      size: Size;
    }
  | {
      variant?: Variants;
      pill?: never;
      outline?: never;
      size?: never;
    };

export type Size = "small" | "normal" | "large";
