import CarritoCompras from "../svgs/carrito-compras";
export function ProductosEspecificos({ productos }) {
  return (
    <ul className="flex flex-wrap justify-around">
      {productos.map((producto) => (
        <li className="" key={producto.id}>
          <img
            className="flex justify-center w-[300px] h-auto max-h-[20vh] min-h-[20vh] rounded-xl"
            src={producto.src}
            alt={producto.nombre}
          />
          <div className="flex justify-center">
            <strong>{producto.nombre}</strong>
          </div>
          <div className="flex flex-wrap w-[100%] h-auto justify-center">
            <button className="justify-center">
              <CarritoCompras />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
