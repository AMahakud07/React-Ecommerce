
import './App.css';
import {BrowserRouter , Routes ,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import SingleProduct from "./pages/SingleProduct";
import Products from "./pages/Products";
import Error from "./pages/Error"
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/singleproduct/:id' element={<SingleProduct />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
