import { AuthProvider, ProductProvider, CartProvider } from "./context";
import { NavBar, Footer } from "./components";

import "./styles/__main.css";
import { AppRouter } from "./router/AppRouter";
import { ButtonWhatsapp } from "./components/ButtonWhatsapp";

function App() {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <NavBar />
            <AppRouter />
            <ButtonWhatsapp />
            <Footer />
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
