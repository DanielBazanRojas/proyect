import AgregarCarrito from "../svgs/agregar";
export function ProductosCategorias({ productos }) {
  return (
    <div>
      <ul className="flex flex-wrap justify-around px-10 py-4 bg-[#EEEEEE] w-[100%] h-fit">
        {productos.map((producto) => (
          <li className="py-2" key={producto.id}>
            <a href={producto.ref} target="_blank">
              <div
                className="flex justify-center aspect-square w-[180px] h-auto max-h-[17vh] min-h-auto place-self-center bg-cover bg-center"
                style={{
                  backgroundImage: `url(${producto.src})`,
                }}
              >
                <div className="flex flex-col place-content-center text-white transition duration-300 ease-in-out bg-[rgba(5,7,12,0.49)] hover:bg-[rgba(5,7,12,0.32)] w-full hover:text-[18px]">
                  <div className="flex flex-col place-content-center text-white bg-[rgba(5,7,12,0.49)] w-full">
                    <strong className="self-center font-semibold">
                      {producto.nombre}
                    </strong>
                    <strong className="self-center font-normal">
                      {producto.marca}
                    </strong>
                  </div>
                </div>
              </div>
            </a>
            <div className="flex flex-col flex-wrap w-[100%] h-auto content-center pt-2">
              <strong>Agregar al carrito</strong>
              <button className="self-center">
                <AgregarCarrito />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
