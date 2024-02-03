import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Technology from "./pages/Technology";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PagenotFound from "./pages/PagenotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "../ui/AppLayout";
import { Toaster } from "react-hot-toast";
import Application from "./pages/Application";
import ProductDetail from "../ui/ProductDetail";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="technology" element={<Technology />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="application" element={<Application />} />
            <Route path="productdetail" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}

export default App;
