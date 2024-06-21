/* eslint-disable no-unused-vars */
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections/index";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import FloatingButton from "./components/FloatingButton";
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import ProductDetail from "./Pages/ProductDetail";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children} {/* This will render the specific page content */}
      <FloatingButton />
    </>
  );
};

const App = () => {
  const { dark, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main className="relative">
              <Nav />
              <section className="xl:padding-l wide:padding-r padding-b dark:bg-dark dark:custom-shadow">
                <Hero />
              </section>
              <FloatingButton />
              <section className="padding dark:bg-dark ">
                <PopularProducts />
              </section>
              <section className="padding dark:bg-dark">
                <SuperQuality />
              </section>
              <section className="padding-x py-10 dark:bg-dark">
                <Services />
              </section>
              <section className="padding dark:bg-dark">
                <SpecialOffer />
              </section>
              <section className="bg-pale-blue padding dark:bg-dark">
                <CustomerReviews />
              </section>
              <section className="padding-x sm:py-32 py-16 w-full dark:bg-dark">
                <Subscribe />
              </section>
              <section className="bg-black padding-x padding-t pb-8">
                <Footer />
              </section>
            </main>
          }
        />

        <Route
          path="/product/:productId"
          element={
            <div className="dark:bg-dark max-w-7xl mx-auto p-8">
              <ProductDetail />
              <FloatingButton />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
