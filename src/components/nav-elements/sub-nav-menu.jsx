import { Link } from "react-router-dom";

const SubNavMenu = () => {
  return (
    <nav
      className="flex px-8 mt-2.5 py-2.5 gap-3 text-[0.950rem] 
    text-gray-600 hover:cursor-default border-t-2 border-b-2 border-sky-300 bg-sky-100"
    >
      <Link to="/" className="hover:text-sky-500 hover:cursor-pointer" href="">
        Inicio
      </Link>
      <span>|</span>
      <Link
        to="/productos"
        className="hover:text-sky-500 hover:cursor-pointer"
        href=""
      >
        Productos
      </Link>
      <span>|</span>
      <Link
        to="/atencion-al-cliente"
        className="hover:text-sky-500 hover:cursor-pointer"
      >
        Atención al cliente
      </Link>
      <span>|</span>
      <Link
        to="/contactanos"
        className="hover:text-sky-500 hover:cursor-pointer"
        href=""
      >
        Contactanos
      </Link>
    </nav>
  );
};

export default SubNavMenu;
