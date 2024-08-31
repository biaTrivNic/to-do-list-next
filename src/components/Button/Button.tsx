import "./Button.css"
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className, ...props }) => {
    return <button className={`btn ${className}`} {...props}>{text}</button>;
};

export default Button