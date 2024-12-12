
import productList from '../assets/data/products.json'
import { ProductCard } from './ProductCard'

const ProductList = () => {
  return (
    <div>
      {productList.map((product ) => {
        return (
          <ProductCard
            key={product.id}
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