import { Link } from "react-router-dom";
import CarritoCompras from "../svgs/carrito-compras";
import LogoNav from "../svgs/logo-nav";
const NavPrincipal = () => {
  return (
    <div className="flex justify-between gap-5 mx-8 my-2 content-center bg-white">
      <Link to="/">
        <LogoNav className="w-auto h-[5vh]" />
      </Link>
      <nav className="flex gap-x-5 flex-wrap content-center font-semibold text-gray-600 text-sm">
        <Link to="/productos" className="hover:text-sky-500 self-center">
          Explorar
        </Link>
        <Link to="/login" className="hover:text-sky-500 self-center" href="">
          Ingresar
        </Link>
        <Link to="/register" className="hover:text-sky-500 self-center" href="">
          Registrarse
        </Link>
        <div
          className="flex aspect-square px-3.5 mx-1.5 justify-center content-center rounded-[100%]
      hover:bg-sky-400 hover:text-white hover:cursor-pointer"
        >
          <button className="">
            <CarritoCompras />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavPrincipal;
