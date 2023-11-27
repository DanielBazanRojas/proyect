import CarritoCompras from "../svgs/carrito-compras";
import LogoNav from "../svgs/logo-nav";
const NavPrincipal = () => {
  return (
    <div className="flex justify-between gap-5 mx-2 my-1.5 content-center">
      <LogoNav className="w-auto h-[5vh]" />
      <div
        className="
        flex justify-between content-center grow mx-2
        border-solid border-2 border-sky-400 max-w-[65%]"
      >
        <input
          className="grow h-auto ml-3 focus-visible:outline-none"
          type="text"
          placeholder="Buscar Producto"
        />
        <button
          className="px-3.5 bg-sky-400 text-white hover:bg-sky-500
        font-normal"
        >
          Buscar
        </button>
      </div>
      <nav className="flex gap-x-5 flex-wrap content-center font-semibold text-gray-600 text-sm">
        <a className="hover:text-sky-500" href="">
          Explorar
        </a>
        <a className="hover:text-sky-500" href="">
          Ingresar
        </a>
        <a className="hover:text-sky-500" href="">
          Registrarse
        </a>
      </nav>
      <div
        className="flex px-3.5 mx-1.5 justify-center content-center rounded-[100%]
      hover:bg-sky-400 hover:text-white"
      >
        <button className="">
          <CarritoCompras />
        </button>
      </div>
    </div>
  );
};

export default NavPrincipal;
