
import { ProductCard } from './ProductCard'
import { useProducts } from '../context/AppContext';

const ProductList = () => {
  const { products } = useProducts();
  // console.log('context', context);

  // function handleAddProduct (product, amount) {
  //   console.log('amount', amount);
  //   console.log('product', product);
  // }

  return (
    <div className='product-list'>
      {products.map((product ) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            detail={product.detail}
            title={product.title}
            price={`${product.currency} ${product.price}`}
          />
        )
      })}
    </div>
  )
}

export default ProductList