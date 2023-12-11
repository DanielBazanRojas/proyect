export const OpcionesAtencion = () => {
  return (
    <div className="flex flex-col h-[61.1dvh] px-12 mx-6 py-8 my-8 bg-sky-400 content-center">
      <strong className="text-2xl text-white">
        Bienvenido al Servicio al Cliente de TechTrends
      </strong>
      <span className="text-white">
        ¿En qué podemos ayudarte? Aquí podemos resolver la mayoría de tus dudas,
        pero si no encuentras lo que buscas, no dudes en contactarnos
      </span>

      <div className="grid grid-cols-3 grid-rows-3 mt-20 gap-10 px-16 py-12 justify-items-center ">
        <div className="flex bg-[#fff] rounded-md w-[350px] h-[65px] items-center justify-start gap-4 px-6 hover:cursor-pointer hover:scale-105 duration-200">
          <img
            className="w-[60px] h-[60px]"
            src="src/assets/images/1.png"
            alt=""
          />
          <span>Entrega, pedido y devolución</span>
        </div>
        <div className="flex bg-[#fff] rounded-md w-[350px] h-[65px] items-center justify-start gap-4 px-6 hover:cursor-pointer hover:scale-105 duration-200">
          <img
            className="w-[50px] h-[50px]"
            src="src/assets/images/2.png"
            alt=""
          />
          <span>Dirección y Seguridad</span>
        </div>
        <div className="flex bg-[#fff] rounded-md w-[350px] h-[65px] items-center justify-start gap-4 px-6 hover:cursor-pointer hover:scale-105 duration-200">
          <img
            className="w-[50px] h-[50px]"
            src="src/assets/images/3.png"
            alt=""
          />
          <span>Pagos o cargos generales</span>
        </div>
        <div className="row-start-2 flex bg-[#fff] rounded-md w-[350px] h-[65px] items-center justify-start gap-4 px-6 hover:cursor-pointer hover:scale-105 duration-200">
          <img
            className="w-[50px] h-[50px]"
            src="src/assets/images/4.png"
            alt=""
          />
          <span>Ayuda en el inicio de sesión o contraseña</span>
        </div>
        <div className="row-start-2 flex bg-[#fff] rounded-md w-[350px] h-[65px] items-center justify-start gap-4 px-6 hover:cursor-pointer hover:scale-105 duration-200">
          <img
            className="w-[50px] h-[50px]"
            src="src/assets/images/5.png"
            alt=""
          />
          <span>No encuentro mi producto</span>
        </div>
        <div className="row-start-2 flex bg-[#fff] rounded-md w-[350px] h-[65px] items-center justify-start gap-4 px-6 hover:cursor-pointer hover:scale-105 duration-200">
          <img
            className="w-[42px] h-[42px]"
            src="src/assets/images/6.png"
            alt=""
          />
          <span>Correos falsos (Phishing o Spoofing)</span>
        </div>
        <div className="row-start-3 flex bg-[#fff] rounded-md w-[350px] h-[65px] items-center justify-start gap-4 px-6 hover:cursor-pointer hover:scale-105 duration-200">
          <img
            className="w-[50px] h-[50px]"
            src="src/assets/images/7.png"
            alt=""
          />
          <span>Contáctanos</span>
        </div>
      </div>
    </div>
  );
};
