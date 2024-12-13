import { createContext, useContext, useState } from "react";
import productsData from '../assets/data/products.json'

const ProductsContext = createContext();


// Proveedor del contexto
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [shoppingCart, setShoppingCart] = useState([])

  const addProductToCart = ( newProduct, amount) => {
    console.log('product in provider,', newProduct, amount)
    setShoppingCart((prevCart) => (
      [
      ...prevCart,
        {
          id: newProduct.id,
          title: newProduct.title,
          price: newProduct.price,
          amount: amount,
        },
      ]
    ));
  }

  return (
    <ProductsContext.Provider value={{ products, shoppingCart,  addProductToCart }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductsContext);
};