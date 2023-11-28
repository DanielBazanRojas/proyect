export function Productos({ productos }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 mx-5">
      {productos.map((producto) => (
        <li
          className="flex flex-col gap-4 rounded-xl bg-[#181818] p-4 hover:bg-[#272727] hover:cursor-pointer"
          key={producto.id}
        >
          <img
            className="w-[100%] aspect-video block object-cover bg-[#fff] rounded-xl overflow-hidden"
            src={producto.src}
            alt={producto.nombre}
          />
          <div className="flex justify-center text-white text-lg font-light">
            <strong>{producto.nombre}</strong>
          </div>
        </li>
      ))}
    </ul>
  );
}
