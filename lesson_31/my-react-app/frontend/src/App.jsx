import { Footer, Header, PageLayout, TodosPage } from './components/index.js';

function App() {

  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
      renderMain={() => <TodosPage />}
    />

  )
}

export default App
