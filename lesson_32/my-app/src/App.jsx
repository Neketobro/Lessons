import { PageLayout, Footer, Header } from "./components"

function App() {

  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderFooter={() => <Footer />}
      renderMain={() =>
        <div className='border'>
          <h3>main</h3>
        </div>}
    />
  )
}

export default App
