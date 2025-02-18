import { RouterProvider } from 'react-router-dom';
import { router } from './router/index'

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={'Error'} // <Loader />
      future={{ v7_startTransition: true }}
    />
  )
}
export default App;