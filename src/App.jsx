import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home.jsx";
import ProductosPage from "./routes/productos-page.jsx";
import ErrorElement from "./routes/error-element.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/productos",
    element: <ProductosPage />,
    children: [
      {
        path: "/productos/ofertas",
        element: <ProductosPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
