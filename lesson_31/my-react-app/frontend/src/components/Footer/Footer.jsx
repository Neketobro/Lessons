import style from './Footer.module.scss'; 

export function Footer() {
    const {footer} = style;

    return (
        <div className={footer}>
            <h1>Todos count:</h1>
        </div>
    )
}