
import './App.css';

import Product from './Product';


function App() {
  return (
    <div >

      <h1>My Demo Shop!</h1>
        <Product title="Product 1" price="10" description="First product" />
        <Product title="Product 2" price="20" description="Second product" />
        <Product title="Product 3" price="30" description="Third product"/>
        <Product title="Product 4" price="40" description="Fourth product"/>
        
      
    </div>
  );
}

export default App;
