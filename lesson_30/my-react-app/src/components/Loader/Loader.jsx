import style from "./Loader.module.scss";

export function Loader() {
    const { loader, container } = style;

    return (
        <div className={container}>
            <div className={loader}></div>
        </div>
    );
}