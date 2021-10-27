
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Card from './components/ItemCount';
import { useState } from "react";



function App() {
  const [stock, setStock] = useState(1);

  const onAdd = (agregar) => {
      setStock(agregar);
      alert(`Agregaste ${agregar} productos al carrito`);
  };

  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
      <Card stock={10} initial={1} onAdd={onAdd} />
      
    </div>
  );
}

export default App;
