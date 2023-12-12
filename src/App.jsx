import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home.jsx";
import ProductosPage from "./routes/productos-page.jsx";
import ErrorElement from "./routes/error-element.jsx";
import Login from "./components/login-register/login.jsx";
import Register from "./components/login-register/register.jsx";
import { AtencionCliente } from "./routes/atencion-cliente.jsx";
import { EntregaPage } from "./components/pages/entrega.jsx";
import { SeguridadPage } from "./components/pages/seguridad.jsx";
import { PagosPage } from "./components/pages/pagos.jsx";
import { AyudaLoginPage } from "./components/pages/ayuda-login.jsx";
import { PerdidasPage } from "./components/pages/perdidas.jsx";
import { PhishingPage } from "./components/pages/phishing.jsx";
import { AyudaContactanosPage } from "./components/pages/contactanos.jsx";
import { ContactanosPage } from "./routes/contactanos-page.jsx";

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
    path: "/atencion-al-cliente/entregas-pedidos-devoluciones",
    element: <EntregaPage />,
  },
  {
    path: "/atencion-al-cliente/direccion-seguridad",
    element: <SeguridadPage />,
  },
  {
    path: "/atencion-al-cliente/pagos",
    element: <PagosPage />,
  },
  {
    path: "/atencion-al-cliente/login-password",
    element: <AyudaLoginPage />,
  },
  {
    path: "/atencion-al-cliente/perdidas",
    element: <PerdidasPage />,
  },
  {
    path: "/atencion-al-cliente/phishing",
    element: <PhishingPage />,
  },
  {
    path: "/atencion-al-cliente/contactanos",
    element: <AyudaContactanosPage />,
  },
  {
    path: "/contactanos",
    element: <ContactanosPage />,
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
