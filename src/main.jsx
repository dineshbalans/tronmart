import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Rootlayout from "./pages/Rootlayout.jsx";
import HeroPage from "./pages/HeroPage.jsx";

import ErrorPage from "./pages/ErrorPage";
import Contact from "./components/Contact";
import ProductLayout from "./pages/ProductLayout";
import ProductDetailsPage from "./pages/products/ProductDetailsPage";
import NewArrivalPage from "./pages/NewArrivalPage";
import TodaysDealPage from "./pages/TodaysDealPage";
import CategoryPage from "./pages/products/CategoryPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { loader as getProductsLoader } from "./config/Firebase";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import LoginPage from "./pages/LoginPage";
import GiftCardsPage from "./pages/GiftCardsPage";

// import App from "./App.jsx";
// import { auth, db, provider } from "../src/config/Firebase.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    id: "products",
    loader: getProductsLoader,
    element: <Rootlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HeroPage />,
      },
      {
        path: "products",
        children: [
          {
            path: ":category",
            children: [
              {
                element: <ProductLayout />,
                children: [
                  {
                    index: true,
                    element: <CategoryPage />,
                  },
                ],
              },
              {
                path: ":productId",
                element: <ProductDetailsPage />,
              },
            ],
          },
        ],
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "check-out",
        element: <CheckOutPage />,
      },
      {
        path: "new-arrival",
        element: <NewArrivalPage />,
      },
      {
        path: "todays-deal",
        element: <TodaysDealPage />,
      },
      {
        path: "gift-card",
        element: <GiftCardsPage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
