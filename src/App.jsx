import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingLayout from "./components/layout/LandingLayout";
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import UsedProductsPage from "./pages/UsedProductsPage";
import ProductRegistrationPage from "./pages/ProductRegistrationPage";

const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    children: [{ path: "/", element: <LandingPage /> }],
  },
  {
    element: <Layout />,
    children: [
      { path: "/items", element: <UsedProductsPage /> },
      { path: "/registration", element: <ProductRegistrationPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
