import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/CartContext/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return <>
        <CartContextProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route exact path='/' element={ <ItemListContainer/> } />
                    <Route exact path='/categoria/:idCategoria' element={ <ItemListContainer/> } />
                    <Route exact path='/detalle/:idProduct' element={ <ItemDetailContainer/> } />
                    <Route exact path='/cart' element={ <Cart/> } />
                </Routes>           
            </BrowserRouter>
        </CartContextProvider>

        </>
}

export default App;
