import { RouterProvider } from 'react-router-dom';
import { router } from './router/index'
import { Loader } from './components/Loader/Loader';

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loader />}
      future={{ v7_startTransition: true }}
    />
  )
}
export default App;