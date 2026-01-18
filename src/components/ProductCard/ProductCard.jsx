import './ProductCard.css'
import CategoryLabel from '../CategoryLabel/CategoryLabel';
import ActionButton from '../ActionButton/ActionButton';
import { useState } from 'react';

function ProductCard({ image, name, price, category, stock }) {
  const isAvailable = stock > 0;
  const label = isAvailable ? "Agregar al carrito" : "Producto no disponible";

  const [mensaje, setMensaje] = useState(null);

  const manejarClick = () => {
    if (isAvailable) {
      setMensaje("Producto agregado al carrito");
      setTimeout(() => setMensaje(null), 3000); // se oculta después de 3s
    }
  };

  return (
    <div className="product-card" alt={"Producto: " + name}>
      <CategoryLabel category={category} className="category-label"/>
      <div className='product-main'>
        <div className="product-image">
          <img src={image} alt={"Imagen perfume: " + name} />
        </div>
        <div className="product-info" alt="Información del producto">
          <p className="product-name" alt="Nombre">{name}</p>
          <p className="product-price" alt="Precio">${price}</p>
        </div>
      </div>
      <div className="product-footer">
        <ActionButton label={label} onClick={manejarClick} available={isAvailable} />
        {mensaje && <div className="toast-message" alt="Mensaje emergente"><p>{mensaje}</p></div>}
      </div>
    </div>
  );
}

export default ProductCard;