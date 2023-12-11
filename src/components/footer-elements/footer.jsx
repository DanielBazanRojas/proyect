const Footer = () => {
  return (
    <div className="flex justify-around text-[#fff] bg-[#232F3E]">
      <div className="flex flex-col gap-3 justify-center">
        <div className="flex gap-5 font-semibold border-t-2 w-auto pt-5">
          <span className="hover:text-gray-300 hover:cursor-pointer">
            Información Legal
          </span>
          <span className="hover:cursor-default">|</span>
          <span className="hover:text-gray-300 hover:cursor-pointer">
            Politica de Privacidad
          </span>
        </div>
        <div className="flex justify-center font-light text-xs ">
          <span className="text-gray-300">© 2021 TechTrends</span>
        </div>
      </div>
      <div className="w-[125px] py-5">
        <img src="/src/assets/images/logo-blanco.png" alt="logo blanco" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex gap-8 border-t-2 w-auto justify-center pt-5">
          <div className="flex flex-col">
            <strong className="hover:text-gray-300 hover:cursor-pointer">
              Contactanos
            </strong>
            <span className="font-sm text-sm hover:text-gray-300 hover:cursor-pointer">
              +51 926 438 500
            </span>
            <span className="font-sm text-sm hover:text-gray-300 hover:cursor-pointer">
              miempresa@correo.com
            </span>
          </div>
          <div className="flex flex-col">
            <strong className="hover:text-gray-300 hover:cursor-pointer">
              Podemos Ayudarte
            </strong>
            <span className="font-sm text-sm hover:text-gray-300 hover:cursor-pointer">
              Tu Cuenta
            </span>
            <span className="font-sm text-sm hover:text-gray-300 hover:cursor-pointer">
              Tus Pedidos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
