import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";

export function Navigation({ navAttrs }) {
    const { list, active, pending } = style;

    return (
        <nav {...navAttrs}>
            <ul className={list}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isActive ? active : isPending ? pending : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive, isPending }) =>
                            isActive ? active : isPending ? pending : ""
                        }
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/AboutMe"
                        className={({ isActive, isPending }) =>
                            isActive ? active : isPending ? pending : ""
                        }
                    >
                        About me
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}