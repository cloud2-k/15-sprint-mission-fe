import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalErrorFallback from "./components/error/GlobalErrorFallback";
import LandingLayout from "./components/layout/LandingLayout";
import Layout from "./components/layout/Layout";
import LandingPage from "./pages/LandingPage";
import ProductRegistrationPage from "./pages/ProductRegistrationPage";
import UsedProductsPage from "./pages/UsedProductsPage";

import { ROUTES } from "./constants/routes";

const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    errorElement: <GlobalErrorFallback />,
    children: [{ path: ROUTES.HOME, element: <LandingPage /> }],
  },
  {
    element: <Layout />,
    children: [
      {
        errorElement: <GlobalErrorFallback />,
        children: [
          { path: ROUTES.ITEMS, element: <UsedProductsPage /> },
          {
            path: ROUTES.PRODUCT_REGISTRATION,
            element: <ProductRegistrationPage />,
          },
          { path: ROUTES.PRIVACY, element: <></> },
          { path: ROUTES.FAQ, element: <></> },
          { path: ROUTES.FREEBOARD, element: <></> },
          {
            path: ROUTES.ITEM_DETAIL,
            element: <></>,
          },
          { path: ROUTES.LOGIN, element: <></> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
