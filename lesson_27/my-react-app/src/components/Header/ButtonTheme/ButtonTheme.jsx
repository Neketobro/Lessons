import style from './ButtonTheme.module.scss';

export function ButtonTheme({
    onClick,
    type = "button",
    className,
    children,
    ...rest
}) {
    const { button } = style;
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${button} ${className}`}
            {...rest}
        >
            {/* {children} */}
            Switch theme
        </button>
    );
}