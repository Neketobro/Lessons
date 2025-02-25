import { Footer, Header, PageLayout } from '../../components';
import { useDispatch } from "react-redux";
import { incremented, decremented, reset } from "../../ducks/counter.duck.js";


export function CounterPage() {
    const dispatch = useDispatch();

    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <p>Value: 0</p>
                    <button onClick={() => dispatch(incremented())}>+</button>
                    <button onClick={() => dispatch(decremented())}>-</button>
                    <button onClick={() => dispatch(reset())}>reset</button>
                </div>
            )}
            renderFooter={() => <Footer />}
        />
    )
}