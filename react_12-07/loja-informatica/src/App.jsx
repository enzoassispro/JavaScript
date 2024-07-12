import Header from "./Components/header";
import Banner from "./Components/banner";
import Card from "./Components/cards"

function App() {
 

  return (
    <>
      <div className="App">
        <Header />
        <Banner />
        <main className="container">
          <h3 className="mt-3 mb-3">Bem-vindo ao meu site</h3>

          <Card />
        </main>
      </div>
    </>
  )
}

export default App
