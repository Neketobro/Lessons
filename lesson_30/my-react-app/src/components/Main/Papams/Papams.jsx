import style from './Papams.module.scss';

export function Papams() {
    const { paramsBox } = style;

    return (
        <div>
            <ul className={paramsBox}>
                <li>people</li>
                <li>1</li>
            </ul>
        </div>
    )
}