import { Navigation } from './Navigation/index.js';
// import style from './Header.module.scss'

export function Header() {
    // const { header } = style;

    return (
        <div className={`container`}>
            <h1>SWAPI</h1>
            <Navigation />
        </div>
    )
}