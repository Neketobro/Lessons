import { store } from './store';
import { Provider } from 'react-redux'
import App from './App.jsx';

export function AppWrapper() {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
