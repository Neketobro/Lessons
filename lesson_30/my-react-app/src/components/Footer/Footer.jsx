import style from './Footer.module.scss'

export function Footer() {
    const { btnClear} = style;

    return (
        <div>
            <button className={`${btnClear} border`}>Clear</button>
        </div>
    )
}