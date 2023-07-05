import {BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import Products from '../container/Products';
import ProdCount from '../container/ProdCount';
import Admin from '../container/Admin';
function Navbar()
{
    return(
        <>
        <BrowserRouter>
        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
     <a className= "navbar-brand" href="#">Ecommerce App</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/prodcount">ProdCount</Link></li>
      <li><Link to="/admin">Admin</Link></li>
    </ul>
  </div>
</nav>
<Routes>
    <Route path="/products" element={<Products></Products>}></Route>
    <Route path="/prodcount" element={<ProdCount></ProdCount>}></Route>
    <Route path="/admin" element={<Admin></Admin>}></Route>
</Routes>
</BrowserRouter>
        </>
    )
}
export default Navbar;