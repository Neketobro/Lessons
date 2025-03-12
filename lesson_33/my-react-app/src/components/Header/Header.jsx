import { ButtonTheme } from './ButtonTheme';
import { Navigation } from './Navigation';
import style from './Header.module.scss';
import { Link } from "react-router-dom";

export function Header() {
    const { logo, header, navigation  } = style;
    return (
        <div className={header}>
            <div className={logo}>
                <Link to="/">
                    <h3>Homework</h3>
                </Link>
            </div>
            <Navigation navAttrs={{ className: navigation }}/>
            <ButtonTheme />
        </div>
    )
}