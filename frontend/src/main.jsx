import { StrictMode } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import "./assets/styles/bootstrap.custom.css";

/* import "bootstrap/dist/css/bootstrap.min.css"; */
import App from "./App.jsx";
import HomeScreen from "./pages/HomeScreen.jsx";
import ProductScreen from "./pages/ProductScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
