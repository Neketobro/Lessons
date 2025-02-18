import { useContext } from "react";
import style from "./PageLayout.module.scss";
import { themeContext } from "../../context";

export function PageLayout({
    renderHeader = () => null,
    renderMain = () => null,
    renderFooter = () => null,
}) {
    const { container, header, main, footer } = style;
    const { theme } = useContext(themeContext);

    return (
        <div className={`${theme} ${container}`}>
            <header className={header}>{renderHeader()}</header>
            <main className={main}>{renderMain()}</main>
            <footer className={footer}>{renderFooter()}</footer>
        </div>
    )
}