
import { useProducts } from '../context/AppContext';

const ShoppingCartView = () => {
  const { shoppingCart } = useProducts();

  console.log('shoppingCart', shoppingCart);
  return (
    <div>ShoppingCartView</div>
  )
}

export default ShoppingCartView