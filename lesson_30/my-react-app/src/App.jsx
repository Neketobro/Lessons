import { Footer, Header, Main, PageLayout } from './components/index.js';
import "./App.css";

function App() {
  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
      renderMain={() =>
        <div className='border'>
          <Main />
        </div>}
    />
  )
}
export default App;