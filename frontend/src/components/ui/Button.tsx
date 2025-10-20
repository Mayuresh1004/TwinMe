
interface ButtonProps {
    variant: Variants;
    size: Size;
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick: () => void;
}
type Variants = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variants, string>= {
    "primary": "bg-purple-600 text-white hover:bg-purple-400",
    "secondary": "bg-purple-300 text-purple-600 hover:bg-purple-200",
}
const sizeStyles: Record<Size, string>= {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6",
}

const defaultStyles = "rounded-md focus:outline-none flex";

export const Button = (props: ButtonProps) => {


    return <button className={
        `${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`
    } >
        {props.startIcon ? <div pr-2>{props.startIcon}</div>: null} {props.text} {props.endIcon }
    </button>

 }