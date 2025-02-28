import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loading } from "./loading";
import { cn } from "@/lib/utils";

type LoaderPosition = "start" | "end";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 focus:ring-primary/30",
        warning:
          "bg-warning text-warning-foreground shadow hover:bg-warning/90 focus:ring-warning/30",
        success:
          "bg-success text-success-foreground shadow hover:bg-success/90 focus:ring-success/30",
        info: "bg-info text-info-foreground shadow hover:bg-info/90 focus:ring-info/30",
        dark: "bg-dark text-dark-foreground shadow hover:bg-dark/90 focus:ring-dark/30",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 focus:ring-destructive/30",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground focus:ring-accent/30",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 focus:ring-secondary/30",
        ghost:
          "hover:bg-accent hover:text-accent-foreground focus:ring-accent/30",
        link: "text-primary underline-offset-4 hover:underline focus:ring-primary/30",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showRing?: boolean;
  loading?: boolean;
  loaderPosition?: LoaderPosition;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      showRing = false,
      loading = false,
      loaderPosition = "start",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          showRing &&
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
        )}
        ref={ref}
        {...props}
      >
        {loading && loaderPosition === "start" && <Loading />}
        {props.children}
        {loading && loaderPosition === "end" && <Loading />}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
