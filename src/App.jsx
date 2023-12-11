import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home.jsx";
import ProductosPage from "./routes/productos-page.jsx";
import ErrorElement from "./routes/error-element.jsx";
import Login from "./components/login-register/login.jsx";
import Register from "./components/login-register/register.jsx";
import { AtencionCliente } from "./routes/atencion-cliente.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/productos",
    element: <ProductosPage />,
  },
  {
    path: "/atencion-al-cliente",
    element: <AtencionCliente />,
  },
  {
    path: "/login",
    element: (
      <div
        className="text-white h-[100vh] flex justify-center items-center bg-cover"
        style={{ backgroundImage: "url('../src/assets/images/bg-login.jpg')" }}
      >
        <Login />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div
        className="text-white h-[100vh] flex justify-center items-center bg-cover"
        style={{ backgroundImage: "url('../src/assets/images/bg-login.jpg')" }}
      >
        <Register />
      </div>
    ),
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
