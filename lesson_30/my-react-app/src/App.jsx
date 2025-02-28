import { RouterProvider } from 'react-router-dom';
import { router } from './route/index.js';
import { Loader } from './components/Loader/index.js';

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