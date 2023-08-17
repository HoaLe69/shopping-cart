import './App.css';
import Aside from './components/Aside';
import Products from './components/Products';
import CartPress from './components/CartBtn';
import Modal from './components/Modal';
function App() {
  return (
	  <div className="App max-w-[1200px] mx-[auto] mt-[86px] grid grid-cols-[1fr] lg:grid-cols-lg">
		<Aside />
		<Products />
		<CartPress />
		<Modal />
    </div>
  );
}

export default App;

