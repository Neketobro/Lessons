import { ButtonTheme } from './ButtonTheme';
import { Navigation } from './Navigation';
import HomeworkLogo from '../../assets/homework.png';
import style from './Header.module.scss';
import { Link } from "react-router-dom";

export function Header() {
    const { logo, header, navigation  } = style;
    return (
        <div className={header}>
            <div className={logo}>
                <Link to="/">
                    <img src={HomeworkLogo} alt="Homework logo" />
                    <h3>Homework</h3>
                </Link>
            </div>
            <Navigation navAttrs={{ className: navigation }}/>
            <ButtonTheme />
        </div>
    )
}