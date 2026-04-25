import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductForm />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;