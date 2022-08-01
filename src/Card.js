import React from "react";
import s from "./css/Card.module.css";
import { useState } from "react";
import { Modal } from "@material-ui/core";
import Producto from "./Producto";

const Cards = ({
  title,
  id,
  imagen,
  descripcion,
  precio,
  puntaje,
  cantidad,
}) => {
  const [cierre, setCierre] = useState(false);

  const abrieCerrar = () => {
    setCierre(!cierre);
  };

  return (
    <div className={s.container}>
      <div>
        <h1>{title}</h1>
        <img className={s.img} src={imagen} alt="imgen" />
        <p>{id}</p>
        <p className={s.descripcion}>{descripcion}</p>
        <p> Precio: {precio}</p>
      </div>
      <button className={s.boton} onClick={abrieCerrar}>
        ver mas
      </button>

      <Modal className={s.centrar} open={cierre} onClose={abrieCerrar}>
        <Producto
          id={id}
          title={title}
          imagen={imagen}
          descripcion={descripcion}
          precio={precio}
          puntaje={puntaje}
          cantidad={cantidad}
        />
      </Modal>
    </div>
  );
};
export default Cards;
