import ProductCard from '../ProductCard/ProductCard';
import { useState } from 'react';
import './ProductList.css';
import EmptyState from '../EmptyState/EmptyState';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import StateMessage from '../StateMessage/StateMessage';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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

        /* Simulación de retraso para ver el efecto del loader (se deja a propósito para la entrega de esta tarea))*/
        await delay(500);

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
        <Loader text="Cargando productos..." />
      </section>
    );
  }

  if (error) {
    return (
      <section className="products-wrapper">
        <ErrorMessage
          title="Error al cargar productos"
          description="No pudimos obtener la información desde el servidor."
          icon="⚠️"
          onRetry={() => window.location.reload()}
        />
        <StateMessage 
          type="error"
          icon="⚠️"
          title="Error al cargar productos"
          description="No pudimos obtener la información desde el servidor."
          actionLabel="Reintentar"
          onAction={() => window.location.reload()}
        />
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
        <StateMessage
          type="empty"
          icon={emptyIcon}
          title={emptyTitle}
          description={emptyMessage}
        />
      )}
    </section>
  );
}

export default ProductList;