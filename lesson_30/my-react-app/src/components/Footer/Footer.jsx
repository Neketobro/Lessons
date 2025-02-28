import { useDispatch } from 'react-redux';
import style from './Footer.module.scss'
import {clearSwapi} from '../../ducks/swapi.duck.js'

export function Footer() {
    const { btnClear} = style;
    const dispatch = useDispatch();

    return (
        <div>
            <button className={`${btnClear} border`} onClick={() => dispatch(clearSwapi())}>Clear</button>
        </div>
    )
}