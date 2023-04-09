import { Route, Routes } from "react-router-dom";
import {
  AboutUs,
  Catalogue,
  Contact,
  DetailProductContainer,
  Home,
  Login,
  Signup,
} from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Catalogo" element={<Catalogue />} />
      <Route
        path="/Catalogo/prod/:prodId"
        element={<DetailProductContainer />}
      />
      <Route path="/Contacto" element={<Contact />} />
      <Route path="/Sobre nosotros" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
