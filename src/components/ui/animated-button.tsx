
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { cva, type VariantProps } from "class-variance-authority";

const animatedButtonVariants = cva(
  "relative overflow-hidden transition-all duration-300 active:scale-95",
  {
    variants: {
      variant: {
        primary: [
          "bg-game-primary text-white hover:bg-game-primary/90",
          "before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%]",
          "hover:before:animate-[shine_1.5s_ease-in-out]",
          "shadow-[0_0_10px_rgba(139,92,246,0.5)]",
          "hover:shadow-[0_0_20px_rgba(139,92,246,0.7)]",
        ],
        accent: [
          "bg-game-accent text-white hover:bg-game-accent/90",
          "before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%]",
          "hover:before:animate-[shine_1.5s_ease-in-out]",
          "shadow-[0_0_10px_rgba(249,115,22,0.5)]",
          "hover:shadow-[0_0_20px_rgba(249,115,22,0.7)]",
        ],
        secondary: [
          "bg-game-secondary text-white hover:bg-game-secondary/90",
          "before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%]",
          "hover:before:animate-[shine_1.5s_ease-in-out]",
          "shadow-[0_0_10px_rgba(14,165,233,0.5)]",
          "hover:shadow-[0_0_20px_rgba(14,165,233,0.7)]",
        ],
        outline: [
          "bg-transparent border border-white/20 text-white hover:bg-white/10",
          "shadow-[0_0_10px_rgba(255,255,255,0.1)]",
          "hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]",
        ],
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 py-1 text-sm",
        lg: "h-12 px-8 py-3 text-lg",
        icon: "h-10 w-10",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        float: "animate-float",
        glow: "animate-glow",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      animation: "none",
    },
  }
);

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof animatedButtonVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      className,
      variant,
      size,
      animation,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        className={cn(
          animatedButtonVariants({ variant, size, animation, className }),
          {
            "opacity-50 cursor-not-allowed": disabled,
          }
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </Button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
