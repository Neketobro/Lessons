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
                        <h5>Counter</h5>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/todos"
                        className={({ isActive, isPending }) =>
                            isActive ? active : isPending ? pending : ""
                        }
                    >
                        <h5>Todo</h5>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}