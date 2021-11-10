import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {

  return <>
        <Navbar/>
        <ItemListContainer greeting="Hola soy el componente ItemListContainer"/>
    </>;

}

export default App;
