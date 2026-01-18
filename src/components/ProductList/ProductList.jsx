import ProductCard from '../ProductCard/ProductCard';
import { useState } from 'react';
import './ProductList.css';
import EmptyState from '../EmptyState/EmptyState';
import { useEffect } from 'react';

function ProductList({ searchTerm }) {
  const emptyTitle = "No se encontraron productos";
  const emptyMessage = "Prueba con otro nombre o revisa la ortografía.";
  const emptyIcon = "🔍";

  const dataOriginUrl = "https://dummyjson.com/products";
  const loadingError = "Error al obtener los productos u_u";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(dataOriginUrl);
        if (!response.ok) {
          throw new Error(loadingError);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <section className="products-wrapper">
        <p>Cargando productos...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="products-wrapper">
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="products-wrapper">
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.thumbnail}
              name={product.title}
              price={product.price}
              category={product.category}
              stock={product.stock}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title={emptyTitle}
          description={emptyMessage}
          icon={emptyIcon}
        />
      )}
    </section>
  );
}

export default ProductList;