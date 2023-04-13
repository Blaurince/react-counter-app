import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <Footer/>
      <Counter/>
      </header>
    </div>
  );
}

export default App;
