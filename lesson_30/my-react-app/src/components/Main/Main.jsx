// import style from './Main.module.scss'
import { Loader } from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import { Papams } from './Papams'
import { useEffect } from 'react';
import { fetchSwapi, selectSwapi, selectStatus } from '../../ducks/swapi.duck';

export function Main() {

    // const { main } = style;
    // const code = {
    //     "name": "Luke Skywalker",
    //     "height": "172",
    //     "mass": "77",
    //     "hair_color": "blond",
    //     "skin_color": "fair",
    //     "eye_color": "blue",
    //     "birth_year": "19BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.dev/api/planets/1/",
    //     "films": [
    //         "https://swapi.dev/api/films/1/",
    //         "https://swapi.dev/api/films/2/",
    //         "https://swapi.dev/api/films/3/",
    //         "https://swapi.dev/api/films/6/"
    //     ],
    //     "species": [],
    //     "vehicles": [
    //         "https://swapi.dev/api/vehicles/14/",
    //         "https://swapi.dev/api/vehicles/30/"
    //     ],
    //     "starships": [
    //         "https://swapi.dev/api/starships/12/",
    //         "https://swapi.dev/api/starships/22/"
    //     ],
    //     "created": "2014-12-09T13:50:51.644000Z",
    //     "edited": "2014-12-20T21:17:56.891000Z",
    //     "url": "https://swapi.dev/api/people/1/"
    // };

    const dispatch = useDispatch();
    const swapi = useSelector(selectSwapi);
    const status = useSelector(selectStatus);

    if (status === "loading") return <Loader />;

    useEffect(() => {
        dispatch(fetchSwapi());
    }, [])

    console.log(swapi);
    console.log(status);

    return (
        <div>
            <Papams />
            <div>
                {/* <pre>
                    <code>{JSON.stringify(code, null, 4)}</code>
                </pre> */}
            </div>
            
        </div>
    )
}

