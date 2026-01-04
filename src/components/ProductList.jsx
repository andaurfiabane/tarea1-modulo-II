import ProductCard from './ProductCard';
import products from '../data/products_data.json';
import './ProductList.css';

function ProductList() {
  return (
    <section className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={`/src/assets/images/${product.image}`}
          name={product.name}
          price={product.price}
          gender={product.gender}
          stock={product.stock}
        />
      ))}
    </section>
  );
}

export default ProductList;