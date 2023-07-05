import './App.css';
import Products from './container/Products';
import ProdCount from './container/ProdCount';
import Navbar from './components/Navbar';
// called from index
function App() {
  return (
    <div >
 
    <Products></Products>
    <ProdCount></ProdCount>
    <Navbar></Navbar>
    </div>
  );
}

export default App;
