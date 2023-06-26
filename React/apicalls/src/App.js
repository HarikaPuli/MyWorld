import axios from 'axios'
import { useState } from 'react';
import ProductsList from './Products';


function App() {
  const[ products, setProducts] = useState([]);          //sending data from parent to child i.e; from app to products
  const fetchproducts = () => 
  {
    axios.get("https://fakestoreapi.com/products").then(            //making api call
      response =>{
        console.log(response);              //it'll give only response of the data as object
        console.log(response.data);         //.data gives the data inside the object
        setProducts(response.data);
      },
      error =>
      {
        console.log(error);
      }
    )
  }
  return (                                        
    <div>
      <h1>Making API call in App Component</h1>
      <button onClick={fetchproducts}>Fetch Products</button>           
      <h2>{products.length}</h2>
      <ProductsList data={products}></ProductsList>
      
    </div>
  );
}

export default App;
