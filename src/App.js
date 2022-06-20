import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data.js';

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section className="cardsList">
        {cards}
      </section>
    </div>
  );
}

export default App;
