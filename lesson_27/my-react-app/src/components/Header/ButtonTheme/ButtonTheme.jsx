import style from './ButtonTheme.module.scss';
import { useContext } from 'react';
import { THEME_DARK, THEME_LIGHT, themeContext } from "../../../context";

export function ButtonTheme() {
    const { button, container } = style;
    const { theme, setTheme } = useContext(themeContext);
    const content = theme === "dark" ? "light" : "dark";


    console.log(content);
    console.log("Тема у ButtonTheme:", theme);


    const clickHandler = () => {
        console.log('clicked');
        setTheme((prevTheme) =>
            prevTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK,
        );
    };

    return (
        <div className={container}>
            <button className={button} onClick={clickHandler}>
                {content}
            </button>
        </div>
    );
}