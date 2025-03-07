import { Loader } from "./components"
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index'

function App() {

  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loader />}
      future={{ v7_startTransition: true }}
    />
  )
}

export default App