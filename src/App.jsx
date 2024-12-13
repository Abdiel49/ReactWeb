// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import { useCalculator } from "./hooks/useCalculator";
// import { ButtonComponent } from "./componets/ButtonComponent";
// import { ProductCard } from "./componets/ProductCard";
// import ProductList from "./componets/ProductList";
// import NavBar from "./componets/navbar/NavBar";
import AppRoutes from "./router/AppRoutes";

function App() {
  // const [isAuth, setIsAuth] = useState(true)
  return (
    <>
    <AppRoutes />
      {/* {isAuth || UserActivation.role === 'admin' ? (
        <AppRoutes />
      ) : (
        <AuthRoutes />
      )} */}
    </>
  );
}

export default App;
