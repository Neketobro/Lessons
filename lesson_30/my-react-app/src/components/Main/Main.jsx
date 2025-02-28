// import style from './Main.module.scss'
import { Loader } from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import { Papams } from './Papams'
import { useEffect } from 'react';
import { fetchSwapi, selectSwapi, selectStatus } from '../../ducks/swapi.duck';
import style from './Main.module.scss';

export function Main() {
    const { codeStyle } = style;
    const dispatch = useDispatch();
    const swapi = useSelector(selectSwapi);
    const status = useSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchSwapi());
    }, [])

    // if (status === "loading") return <Loader />;
    console.log(JSON.stringify(swapi));

    return (
        <div>
            <Papams />
            <div>
                {status === "loading" ? <Loader /> : <pre><code className={codeStyle}>{JSON.stringify(swapi, null, 4)}</code></pre>}
            </div>
        </div>
    )
}

