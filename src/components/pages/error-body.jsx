const ErrorBody = () => {
  return (
    <div className="flex flex-col flex-wrap justify-items-center content-center">
      <span className="text-3xl font-bold">Página no encontrada</span>
      <img
        className="aspect-square w-[10vw]"
        src="../src/assets/images/error-img.png"
        alt="error-img"
      />
      <span>TechTrends no ha encontrado la ruta que está buscando</span>
      <span>
        Por favor revise si la ruta esta bien escrita e intentelo de nuevo
      </span>
    </div>
  );
};

export default ErrorBody;
