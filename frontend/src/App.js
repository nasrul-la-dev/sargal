import './App.css';
import { Hero, SuggestPart } from './components'
import { Home } from './pages'
function App() {
  return (
    <div className="App">
      <header>
        Header
      </header>
      <main>
        <Hero />
        <SuggestPart />
        <Home />
      </main>
    </div>
  );
}

export default App;
