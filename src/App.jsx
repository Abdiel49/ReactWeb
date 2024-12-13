import "./App.css";
import AppRoutes from "./router/AppRoutes";
import { ProductsProvider } from "./context/AppContext";

function App() {
  return (
    <ProductsProvider>
      <AppRoutes />
    </ProductsProvider>
  );
}

export default App;
