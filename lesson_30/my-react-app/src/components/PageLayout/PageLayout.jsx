import style from './PageLayout.module.scss';

export function PageLayout({
    renderHeader = () => null,
    renderMain = () => null,
    renderFooter = () => null,
}) {
    const { wrapper, header, main, footer } = style;

    return (
        <div className={wrapper}>
            <header className={header}>{renderHeader()}</header>
            <main className={`${main} border`}>{renderMain()}</main>
            <footer className={footer}>{renderFooter()}</footer>
        </div>
    )
}