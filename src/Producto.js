import React, { useState } from "react";
import precios from "./data";
import s from "./css/Producto.module.css";

const Producto = ({ title,
    id,
    imagen,
    descripcion,
    precio,
    puntaje,
    cantidad, }) => {
//   const [state, setState] = useState(precios);
//   const newProducto = state.find((el) => el.id === id);

  return (
    <>
      <div className={s.modal}>
        <h1>{title}</h1>
        <img className={s.img} src={imagen} alt="img" />
        <p>{id}</p>
        <p> Precio: {precio}</p>
        <h2>Descripcion: </h2>
        <p className={s.descripcion}>{descripcion}</p>
        <h2> Puntaje: {puntaje}</h2>
        <p> Cantidad : {cantidad}</p>
      </div>
    </>
  );
};

export default Producto;
