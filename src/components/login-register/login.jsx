import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-4xl text-whitefont-extrabold text-center mb-6">
          Login
        </h1>
        <form action="">
          <div className="relative my-4">
            <input
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600"
              type="email"
            />
            <label className="text-sm" htmlFor="">
              Tu Email
            </label>
          </div>
          <div className="relative my-4">
            <input
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600"
              type="password"
            />
            <label className="text-sm" htmlFor="">
              Tu Contraseña
            </label>
          </div>
          <div className="flex justify-between items-center text-xs">
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Recordarme">Recordarme</label>
            </div>
            <Link to="" className="text-sky-200">
              Olvidaste la contraseña?
            </Link>
          </div>
          <button
            className="w-full mb-4 text-[18px] text-sky-500 text-semibold mt-6 rounded-full bg-white hover:bg-sky-500 hover:text-white p-2 transition-colors duration-300"
            type="submit"
          >
            Ingresar
          </button>
          <div className="text-sm">
            <span className="m-4">
              Nuevo Aqui?{" "}
              <Link to="/register" className="text-sky-200">
                Resgistrate
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
