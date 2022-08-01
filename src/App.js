import s from "./css/App.module.css";
import Cards from "./Card";
import socket from "./componente/socket"
import {useEffect, useState} from "react"
import Producto from './Producto'
function App() {
  
  const [mensaje, setMensaje] = useState([])
  const [productos, setProductos] = useState([])

  console.log('produ',productos)
  console.log('mensaje',mensaje)
  
  const url = 'https://mongodbback.herokuapp.com/productos'
  const llamada = async () =>{
    const respuesta = await fetch(url)
    const results = await respuesta.json()
    console.log('respues',results)
    setProductos(results)
    
     }

     useEffect(() => {
      llamada()
     },[])
     
  useEffect(() =>{
    socket.on('mensajes', algo => {
      setMensaje([algo])
      llamada()
    })
    
    return () => {socket.off()}
   },[mensaje])
  
  return (
    <div className={s.conte_padre}>
    
      <div className={s.container}>
        {productos.map((el) => (
          <Cards
            key={el._id}
            id={el._id}
            title={el.title}
            descripcion={el.descripcion}
            imagen={el.imagen}
            precio={el.precio}
            puntaje={el.puntaje}
            cantidad={el.cantidad}


          />
        ))}
        
      </div>
      
    </div>
  );
}

export default App;
