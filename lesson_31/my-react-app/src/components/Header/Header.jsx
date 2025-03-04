import style from './Header.module.scss'; 

export function Header() {
    const {header} = style;

    return (
        <div className={header}>
            <h1>Todos</h1>
        </div>
    )
}