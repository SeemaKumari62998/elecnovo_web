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
import Achivements from "../ui/Achivemets";
import Teams from "../ui/Teams";
import Career from "../ui/Career";

import Solutions from "./pages/Solutions";
import MenuApplication from "../ui/MenuApplication";
import Footer from "../ui/Footer";
import Productdetail from "../ui/Productdetail";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="about" element={<About />} />
            <Route path="technology" element={<Technology />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="achivements" element={<Achivements />} />
            <Route path="teams" element={<Teams />} />
            <Route path="career" element={<Career />} />
            <Route path="footer" element={<Footer />} />
            <Route path="productdetails" element={<Productdetail />}></Route>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="application" element={<MenuApplication />} />
            <Route path="solutions" element={<Solutions />} />
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
