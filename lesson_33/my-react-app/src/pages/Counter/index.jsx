import { Footer, Header, PageLayout } from '../../components';
import { useDispatch, useSelector } from "react-redux";
import { incremented, decremented, reset, selectCounter } from "../../ducks/counter.duck.js";

export function CounterPage() {
    const dispatch = useDispatch();
    const counter = useSelector(selectCounter);
    
    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <p>Value: {counter}</p>
                    <button onClick={() => dispatch(incremented())}>+</button>
                    <button onClick={() => dispatch(decremented())}>-</button>
                    <button onClick={() => dispatch(reset())}>reset</button>
                </div>
            )}
            renderFooter={() => <Footer />}
        />
    )
}