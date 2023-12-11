import { Link } from "react-router-dom";

const ErrorBody = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center content-center h-[79.3svh] bg-sky-300">
      <span className="text-5xl font-bold self-center">ERROR 404</span>
      <img
        className="aspect-square w-[10vw] self-center my-5"
        src="../src/assets/images/error-img.png"
        alt="error-img"
      />
      <span className="self-center text-black mt-5">
        <span className="font-semibold">TechTrends</span> no ha encontrado la
        ruta que está buscando
      </span>
      <span className="self-center text-black">
        Por favor revise si la ruta esta bien escrita e intentelo de nuevo
      </span>
      <Link to="/" className="self-center">
        <button className="mb-4 text-[16px] hover:text-sky-500 font-semibold mt-6 rounded-full hover:bg-sky-100 bg-sky-500 text-white p-2 transition-colors duration-300 border border-sky-400 px-5">
          Volver al Inicio
        </button>
      </Link>
    </div>
  );
};

export default ErrorBody;
