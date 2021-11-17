import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
//import Carrito from './components/Carrito/Carrito';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './container/ItemList';

function App() {

  return <>
  
        <Navbar/>
        <ItemListContainer>
            <ItemList/>
        </ItemListContainer>
            
        </>
}

export default App;
