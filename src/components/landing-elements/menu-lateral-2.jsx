import { CategoriasProductosPage } from "../landing-elements/categoria-contexto";
import { categorias } from "../mocks/categorias.json";

const MenuLateralDos = () => {
  return (
    <div className="flex flex-col w-[300px] py-3 border-t-2 border-r-2 border-sky-300 bg-sky-300">
      <strong className="text-black text-xl font-semibold pb-1 self-center">
        Categorias
      </strong>
      <div className="w-auto px-5 row-span-6 self-center">
        <CategoriasProductosPage categorias={categorias} />
      </div>
    </div>
  );
};

export default MenuLateralDos;
