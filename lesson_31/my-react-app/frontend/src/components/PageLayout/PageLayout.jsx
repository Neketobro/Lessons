import style from "./PageLayout.module.scss";

export function PageLayout({
    renderHeader = () => null,
    renderMain = () => null,
    renderFooter = () => null,
}) {
    const { container, header, main, footer } = style;

    return (
        <div className={container}>
            <header className={header}>{renderHeader()}</header>
            <main className={main}>{renderMain()}</main>
            <footer className={footer}>{renderFooter()}</footer>
        </div>
    )
}