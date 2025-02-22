import style from './Header.module.scss';

export function Header() {
    const { header, title } = style;
    return (
        <div className={header}>
            <h1 className={title}>Todo list with Formik</h1>
        </div>
    )
}