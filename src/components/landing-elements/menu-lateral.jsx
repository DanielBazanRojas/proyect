import Sales from "../svgs/sales";
import { Categorias } from "../landing-elements/categoria-contexto";
import { categorias } from "../mocks/categorias.json";

const MenuLateral = () => {
  return (
    <div className="grid grid-cols-1 w-[15vw] justify-items-center py-3 border-t-2 border-r-2 border-sky-300 rounded-r-2xl bg-sky-300">
      <strong className="text-black text-xl font-semibold pb-1">
        Categorias
      </strong>
      <div className="">
        <Categorias categorias={categorias} />
      </div>
    </div>
  );
};

export default MenuLateral;
