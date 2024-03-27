import { FC, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CART_ROUTE, CATALOG_ROUTE } from "../shared/constans/routes/routes";
import CatalogPage from "../pages/catalog";
import Cart from "../pages/cart";

const AppRouterProvider: FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes location={location}>
      <Route path={CATALOG_ROUTE} element={<CatalogPage />} />
      <Route path={CART_ROUTE} element={<Cart />} />
    </Routes>
  );
};

export default AppRouterProvider;
