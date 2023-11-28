export function Categorias({ categorias }) {
  return (
    <div className="flex flex-col w-[10.5vw]">
      {categorias &&
        categorias.map((categoria) => (
          <div
            className="flex my-1.5 py-1.5 gap-5 w-[10.5vw] p-[0.85vw] border-2 rounded-xl border-[#131313] bg-slate-100 items-center hover:bg-slate-400 justify-start hover:cursor-pointer"
            key={categoria.id}
          >
            <img
              alt={categoria.nombre}
              src={`src/assets/images/category-${categoria.identificador}.png`}
              className="w-[30px] h-[30px]"
            />
            <span className="hover:cursor-pointer">{categoria.nombre}</span>
          </div>
        ))}
    </div>
  );
}
