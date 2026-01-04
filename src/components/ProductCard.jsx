import './ProductCard.css'
import GenderLabel from './GenderLabel';
import ActionButton from './ActionButton';

function ProductCard(props) {
  return (
    <div className="product-card">
      <GenderLabel gender={props.gender} />
      <div className='product-main'>
        <div className="product-image">
            <img src={props.image} alt={"Imagen perfume: " + props.name} />
        </div>
        <div className="product-info">
            <p className="product-name">{props.name}</p>
            <p className="product-price">${props.price}</p>  
        </div>
      </div>
      <div className="product-footer">
        <ActionButton stock={props.stock} />
      </div>
    </div>
  );
}

export default ProductCard;