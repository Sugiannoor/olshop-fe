//const { Home } = lazyImport(() => import("./Home"), "Home");

import App from "@/App";
import { Login } from "@/features/auth/pages/Login";
import { Checkout } from "@/features/cart/page/Checkout";
import { Order } from "@/features/orders/page/Order";
import { AuthLayout } from "@/layouts/AuthLayout";
import { PageLayout } from "@/layouts/PageLayout";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        {/* add layout in a route */}
        <Route element={<PageLayout />}>
          <Route path="/marketplace" element={<App />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
