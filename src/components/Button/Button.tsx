interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
    return <button {...props}>{text}</button>;
};

export default Button