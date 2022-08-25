import logo from './logo.svg';
import './App.css';
import Bonjour from './components/bonjour/Bonjour';
import ProductList from './components/product-list/ProductList';
import Counter from './components/counter/Counter';

function App() {

  const products = [
    {id: 1, name:"Pomme", price: 1, promo: false},
    {id: 2, name:"Cerise", price: 2, promo: true},
    {id: 3, name:"Poire", price: 0.5, promo: false},
  ]

  return (
    <div className="App">
      {/* <h1>Exo 01</h1>
      <Bonjour name="William"></Bonjour>
      <h1>Exo 02</h1>
      <ProductList products={products}></ProductList> */}
      <h1>Exo 03</h1>
      <Counter></Counter>
      <Counter incrementation={10}></Counter>
    </div>
  );
}

export default App;
