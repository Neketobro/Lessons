import style from "./PageLayout.module.scss";

export function PageLayout({
    renderHeader = () => null,
    renderMain = () => null,
    renderFooter = () => null,
}) {
    const { container, header, main, footer } = style;

    return (
        <div className={container}>
            <header className={`${header} container`}>{renderHeader()}</header>
            <main className={`${main} container border`}>{renderMain()}</main>
            <footer className={`${footer} container`}>{renderFooter()}</footer>
        </div>
    )
}