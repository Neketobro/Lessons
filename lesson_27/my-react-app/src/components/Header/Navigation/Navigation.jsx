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
                        to="/user/1"
                        className={({ isActive, isPending }) =>
                            isActive ? active : isPending ? pending : ""
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}