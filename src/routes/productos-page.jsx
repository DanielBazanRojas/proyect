import { ProductosCategorias } from "../components/cards/productos-categorias";
import { SMARTPHONES } from "../components/mocks/productos-categorias.json";
import { LAPTOPS } from "../components/mocks/productos-categorias.json";
import { JUEGOS } from "../components/mocks/productos-categorias.json";
import { TABLETS } from "../components/mocks/productos-categorias.json";
import { COMPONENTES } from "../components/mocks/productos-categorias.json";
import { DECORACIONES } from "../components/mocks/productos-categorias.json";
import { TECLADOS } from "../components/mocks/productos-categorias.json";
import { MOUSE } from "../components/mocks/productos-categorias.json";
import { MONITORES } from "../components/mocks/productos-categorias.json";
import { AURICULARES } from "../components/mocks/productos-categorias.json";
import MainFooter from "../components/pages/main-footer";
import MainHeader from "../components/pages/main-header";
import MenuLateralDos from "../components/landing-elements/menu-lateral-2";

const Smartphones = () => {
  return (
    <div className="flex flex-col w-full bg-[#c7bdbd]" id="SMARTPHONES">
      <strong className="p-5 pl-[7%]">SMARTPHONES</strong>
      <ProductosCategorias productos={SMARTPHONES} />
    </div>
  );
};

const Laptops = () => {
  return (
    <div className="flex flex-col w-full bg-[#c7bdbd]" id="LAPTOPS">
      <strong className="p-5 pl-[7%]">LAPTOPS</strong>
      <ProductosCategorias productos={LAPTOPS} />
    </div>
  );
};

const Juegos = () => {
  return (
    <div className="flex flex-col w-full bg-[#c7bdbd]" id="JUEGOS">
      <strong className="p-5 pl-[7%]">JUEGOS</strong>
      <ProductosCategorias productos={JUEGOS} />
    </div>
  );
};

const Tablets = () => {
  return (
    <div className="flex flex-col w-full bg-[#c7bdbd]" id="TABLETS">
      <strong className="p-5 pl-[7%]">TABLETS</strong>
      <ProductosCategorias productos={TABLETS} />
    </div>
  );
};

const Auriculares = () => {
  return (
    <div className="flex flex-col w-full bg-[#c7bdbd]" id="AURICULARES">
      <strong className="p-5 pl-[7%]">AURICULARES</strong>
      <ProductosCategorias productos={AURICULARES} />
    </div>
  );
};

const Hardware = () => {
  return (
    <div className="flex flex-col w-full bg-[#c7bdbd]" id="COMPONENTES">
      <strong className="p-5 pl-[7%]">HARDWARE</strong>
      <ProductosCategorias productos={COMPONENTES} />
    </div>
  );
};

const Decoraciones = () => {
  return (
    <div className="flex flex-col w-full bg-[#c7bdbd]" id="DECORACIONES">
      <strong className="p-5 pl-[7%]">DECORACIONES</strong>
      <ProductosCategorias productos={DECORACIONES} />
    </div>
  );
};

const Teclados = () => {
  return (
    <div className="flex flex-col w-full bg-[#c7bdbd]" id="TECLADOS">
      <strong className="p-5 pl-[7%]">TECLADOS</strong>
      <ProductosCategorias productos={TECLADOS} />
    </div>
  );
};

const Mouses = () => {
  return (
    <div className="flex flex-col w-full bg-[#c7bdbd]" id="MOUSE">
      <strong className="p-5 pl-[7%]">MOUSE GAMERS</strong>
      <ProductosCategorias productos={MOUSE} />
    </div>
  );
};

const Monitores = () => {
  return (
    <div className="flex flex-col w-full bg-[#c7bdbd]" id="MONITORES">
      <strong className="p-5 pl-[7%]">MONITORES</strong>
      <ProductosCategorias productos={MONITORES} />
    </div>
  );
};

const ProductosPage = () => {
  return (
    <>
      <MainHeader />
      <div className="flex bg-[#fff] justify-start">
        <MenuLateralDos />
        <div className="w-full">
          <Smartphones />
          <Laptops />
          <Juegos />
          <Tablets />
          <Auriculares />
          <Hardware />
          <Decoraciones />
          <Teclados />
          <Mouses />
          <Monitores />
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default ProductosPage;
