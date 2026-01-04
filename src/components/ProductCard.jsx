import './ProductCard.css'
import GenderLabel from './GenderLabel';
import ActionButton from './ActionButton';
import { useState } from 'react';

function ProductCard(props) {
  const isAvailable = props.stock > 0;
  const label = isAvailable ? "Agregar al carrito" : "Producto no disponible";

  /*Manejo de estado*/ 
  const [mensaje, setMensaje] = useState(null);

  const manejarClick = () => {
    if (isAvailable) {
      setMensaje("Producto agregado al carrito");
      setTimeout(() => setMensaje(false), 3000); // se oculta después de 3s
    } 
  };

  return (
    <div className="product-card" alt="Producto">
      <GenderLabel gender={props.gender} />
      <div className='product-main'>
        <div className="product-image">
            <img src={props.image} alt={"Imagen perfume: " + props.name} />
        </div>
        <div className="product-info" alt="Información del producto">
            <p className="product-name" alt="Nombre">{props.name}</p>
            <p className="product-price" alt="Precio">${props.price}</p>  
        </div>
      </div>
      <div className="product-footer">
        <ActionButton label={label} onClick={manejarClick} available={isAvailable}/>
        {/* Mensaje emergente al agregar producto*/}
        {mensaje && <div className="toast-message" alt="Mensaje emergente"><p>{mensaje}</p></div>}  
      </div>
    </div>
  );
}

export default ProductCard;