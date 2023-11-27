const SubNavMenu = () => {
  return (
    <nav
      className="flex mx-5 my-2.5 gap-7 text-[0.950rem] 
    text-gray-600 "
    >
      <a className="hover:text-sky-500" href="">
        Inicio
      </a>
      <a className="hover:text-sky-500" href="">
        Productos
      </a>
      <a className="hover:text-sky-500" href="">
        Novedades
      </a>
      <a className="hover:text-sky-500" href="">
        Atención al cliente
      </a>
    </nav>
  );
};

export default SubNavMenu;
