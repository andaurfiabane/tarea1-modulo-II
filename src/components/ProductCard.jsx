import './ProductCard.css'
import GenderLabel from './GenderLabel';

function ProductCard({ image, name, price, gender }) {
  return (
    <div className="product-card">
      <GenderLabel gender={gender} />
      <div className="product-image">
        <img src={image} alt={"Imagen perfume: " + name} />
      </div>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
      </div>
      <button className="add-cart-btn">
        Añadir al Carrito
      </button>
    </div>
  );
}

export default ProductCard;