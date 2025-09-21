import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/Home';
import OrdersPage from './pages/Orders';
import NotFoundPage from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<HomePage />} />
      <Route path="ecommerce" element={<HomePage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
