import ProductCard from '../ProductCard/ProductCard';
import products from '../../data/products_data.json';
import './ProductList.css';


function ProductList({searchTerm}) {

  const filteredProducts = products.filter((product) => 
  product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
       <section className="products-grid" alt="Listado de productos">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={`/src/assets/images/${product.image}`}
              name={product.name}
              price={product.price}
              gender={product.gender}
              stock={product.stock}
            />
          ))
        ) : (
          <div className='no-results'><p>No se encontraron productos</p></div>
        )}
      </section>
  );
}

export default ProductList;