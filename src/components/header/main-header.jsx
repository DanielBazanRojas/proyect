import LogoTechtrends from "@/assets/images/TechTrends-3.svg";
const MainHeader = () => {
  return (
    <header>
      <img src={LogoTechtrends} alt="Logo" />
      <div>
        <input type="text" placeholder="Buscar" />
        <button>Buscar</button>
      </div>
      <nav>
        <a href="">Explorar</a>
        <a href="">Ingresar</a>
        <a href="">Registrarse</a>
      </nav>
      <div>
        <button>cart</button>
        <img src="" alt="imagen de perfil" />
      </div>
      <nav>
        <a href="">Inicio</a>
        <a href="">Productos</a>
        <a href="">Novedades</a>
        <a href="">Atención al cliente</a>
      </nav>
      <div>
        <span>Inicio</span>
        <span>|</span>
        <span>Página principal</span>
      </div>
    </header>
  );
};
export default MainHeader;
