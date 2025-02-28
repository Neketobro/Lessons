import { Navigation } from './Navigation/index.js';

export function Header() {

    return (
        <div className={`container`}>
            <h1>SWAPI</h1>
            <Navigation />
        </div>
    )
}