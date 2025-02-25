import style from "./PageLayout.module.scss";

export function PageLayout({
    renderHeader = () => null,
    renderMain = () => null,
    renderFooter = () => null,
}) {
    const { container, header, main, footer } = style;

    return (
        <div className={container}>
            <header className={`${header} alert alert-secondary`}>{renderHeader()}</header>
            <main className={`${main} alert alert-secondary`}>{renderMain()}</main>
            <footer className={`${footer} alert alert-secondary`}>{renderFooter()}</footer>
        </div>
    )
}