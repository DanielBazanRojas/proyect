import { productos } from "../mocks/productos.json";
import { Productos } from "../cards/productos";
import MenuLateral from "../landing-elements/menu-lateral";
import { ofertas } from "../mocks/ofertas.json";
import { Ofertas } from "../landing-elements/ofertas";
const MainCenter = () => {
  return (
    <main className="bg-[#222]">
      <article className="px-8">
        <span className="flex text-white text-2xl font-bold p-5">
          Algunos de nuestros productos
        </span>
        <Productos productos={productos} />
      </article>
      <article className="">
        <div className="flex mt-5 border-t-2 border-[#393E46] bg-[#fff] justify-start">
          <MenuLateral />
          <section className="flex">
            <Ofertas ofertas={ofertas} />
          </section>
        </div>
      </article>
    </main>
  );
};
export default MainCenter;
