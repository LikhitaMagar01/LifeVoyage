interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullwidth?: boolean;
    large?: boolean;
    onClick: ()=> void;
    disabled?: boolean;
    outline?: boolean;
}


const Button: React.FC<ButtonProps> = ({label, secondary, fullwidth, large, onClick, disabled, outline}) => {
    return(
        <div>
            <button  className="disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2">
                {label}
            </button>
        </div>
    )
}

export default Button