import { AuthProvider, ProductProvider, CartProvider } from "./context";
import { NavBar, Footer } from "./components";

import "./styles/__main.css";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <NavBar />
            <AppRouter />
            <Footer />
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
