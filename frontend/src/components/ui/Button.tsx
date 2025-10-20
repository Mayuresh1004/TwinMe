import type { ReactElement } from "react";

interface ButtonProps {
    variant: Variants;
    size: Size;
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
}
type Variants = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variants, string>= {
    "primary": "bg-purple-600 text-white hover:bg-purple-400",
    "secondary": "bg-purple-200 text-purple-600 hover:bg-purple-100",
}
const sizeStyles: Record<Size, string>= {
    "sm": "py-1 px-2 m-2 text-sm",
    "md": "py-2 px-4 m-2 text-md",  
    "lg": "py-2 px-6 m-2 text-xl",
}

const defaultStyles = "rounded-md focus:outline-none flex justify-between font-light";

export const Button = (props: ButtonProps) => {


    return <button onClick={props.onClick} className={
        `${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} flex `
    } ><div className="flex items-center justify-center ">
        {props.startIcon ? <div className={"mr-2"}>{props.startIcon}</div>: null} {props.text} {props.endIcon }
    </div>
    </button>

 }