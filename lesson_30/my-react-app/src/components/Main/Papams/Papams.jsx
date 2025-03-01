import style from './Papams.module.scss';
import { useSelector } from "react-redux";
import { selectUrlWay } from "../../../ducks/swapi.duck.js";

export function Papams() {
    const { paramsBox } = style;
    const query = useSelector(selectUrlWay);

    return (
        <div>
            {query && (
                <ul className={paramsBox}>
                    {String(query).split('/').map((key, index) => (
                        <li key={index}>{key}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}