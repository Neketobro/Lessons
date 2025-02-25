import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";

export function Navigation() {
    const { list, active, pending } = style;

    return (
        <nav>
            <ul className={list}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isActive ? active : isPending ? pending : ""
                        }
                    >
                        Counter
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/todos"
                        className={({ isActive, isPending }) =>
                            isActive ? active : isPending ? pending : ""
                        }
                    >
                        Todo List
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}