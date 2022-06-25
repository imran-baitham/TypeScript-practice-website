import React from "react";
import { overrideTailwindClasses } from "tailwind-override";
import { classNames } from "../../utils/string";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  xs?: boolean;
  sm?: boolean;
  lg?: boolean;
  xl?: boolean;
  light?: boolean;
  danger?: boolean;
  full?: boolean;
}
/**
 * Button Component
 * Implements a basic core button component
 * @param {*} props
 */
export const Button = ({
  children,
  className = "",
  xs = false,
  sm = false,
  lg = false,
  xl = false,
  light = false,
  full = false,
  disabled = false,
  ...props
}: ButtonProps): JSX.Element => {
  const isDisabled = disabled && "cursor-not-allowed opacity-50";
  return (
    <button
      className={overrideTailwindClasses(
        classNames(
          "cursor-pointer px-4 py-3",
          "inline-flex items-center border border-transparent",
          "text-sm font-medium rounded-xl shadow-sm ",
          "flex justify-center",
          "font-black",
          "text-lg",
          full ? "w-full" : "",
          xs ? "px-2.5 py-1.5 text-xs rounded" : "",
          sm ? "px-3 py-2 leading-4 rounded-md" : "",
          lg ? "px-4 py-2 text-base" : "",
          xl ? "px-6 py-3 text-base" : "",
          light
            ? "border-gray-300 text-blue-900 bg-blue-200" +
                " hover:bg-blue-900 ripple-on-surface hover:text-white"
            : "bg-blue-900 text-white",
          isDisabled ? isDisabled : "",
          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  );
};
/**
 * Spinner Component
 * Implements a component that renders a spinner with Tailwind CSS classes that wrap around a SVG circle with a notch.
 * @param {*} props
 */
export const SpinnerComponent = ({
  spin = true,
  className = "",
}): JSX.Element => {
  return (
    <svg
      className={classNames(
        className,
        `${spin ? "animate-spin" : "animate-spin hidden"}`
      )}
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};
/**
 * @function LoadingIndicatorButton
 * Implements a button with Tailwind CSS classes that that has a spinning loading indicator and text centered inside.  The default button is blue (bg-blue-500) and white text (text-white) with a white loading indicator.
 * When the `loading` prop is set to true, the button will be disabled and the indicator will be spinning.
 * @param {*} props - The props to be passed to the component.
 */
export function LoadingIndicatorButton({
  loading = false,
  text = "Refresh",
  className = "",
  ...props
}): JSX.Element {
  return (
    <Button
      className={classNames(
        "ring-0 focus:ring-opacity-0 focus:ring-white",
        className
      )}
      {...props}
    >
      <SpinnerComponent className="w-4 h-4" spin={loading} />
      <span className="ml-2">{text}</span>
    </Button>
  );
}
