import style from "./Navigation.module.scss";

export function Navigation() {
    const { navBtn, navPanel} = style;

    return (
        <nav>
            <div className={`${navPanel}`}>
                <p>https://swapi.dev/api/</p>
            </div>
            <button className={navBtn}>Get Info</button>
        </nav>
    );
}