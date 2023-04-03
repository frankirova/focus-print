import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider, ProductProvider, CartProvider } from "./context";
import { NavBar, Footer } from "./components";
import {
  Catalogue,
  AboutUs,
  Login,
  Signup,
  Home,
  Contact,
  DetailProductContainer,
} from "./pages";

import { MyNewTheme } from "./styles/theme";
import "./styles/__main.css";

function App() {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <ChakraProvider theme={MyNewTheme}>
              <BrowserRouter>
                <NavBar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="Catalogo" element={<Catalogue />} />
                  <Route
                    path="Catalogo/prod/:prodId"
                    element={<DetailProductContainer />}
                  />
                  <Route path="Contacto" element={<Contact />} />
                  <Route path="Sobre nosotros" element={<AboutUs />} />
                  <Route path="iniciar-sesion" element={<Login />} />
                  <Route path="registrarse" element={<Signup />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </ChakraProvider>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
