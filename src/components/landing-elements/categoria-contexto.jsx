import { Link } from "react-router-dom";

export function Categorias({ categorias }) {
  return (
    <div className="flex flex-col w-auto">
      {categorias &&
        categorias.map((categoria) => (
          <Link to={`/productos`} key={categoria.id}>
            <div
              className="flex my-1.5 py-1.5 gap-5 w-[10.5vw] px-[0.5vw] border-2 rounded-xl border-[#131313] bg-sky-200 items-center hover:bg-slate-200 justify-start hover:cursor-pointer"
              key={categoria.id}
            >
              <img
                alt={categoria.nombre}
                src={`src/assets/images/category-${categoria.identificador}.png`}
                className="w-[30px] h-[30px]"
              />
              <span className="hover:cursor-pointer sm:text-xs 2xl:text-sm">
                {categoria.nombre}
              </span>
            </div>
          </Link>
        ))}
    </div>
  );
}

export function CategoriasProductosPage({ categorias }) {
  return (
    <div className="flex flex-col w-auto">
      {categorias &&
        categorias.map((categoria) => (
          <a href={`#${categoria.identificador}`} key={categoria.id}>
            <div
              className="flex my-1.5 py-1.5 gap-5 w-[10.5vw] px-[0.5vw] border-2 rounded-xl border-[#131313] bg-sky-200 items-center hover:bg-slate-200 justify-start hover:cursor-pointer"
              key={categoria.id}
            >
              <img
                alt={categoria.nombre}
                src={`src/assets/images/category-${categoria.identificador}.png`}
                className="w-[30px] h-[30px]"
              />
              <span className="hover:cursor-pointer sm:text-xs 2xl:text-sm">
                {categoria.nombre}
              </span>
            </div>
          </a>
        ))}
    </div>
  );
}
