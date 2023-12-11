export function Ofertas({ ofertas }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 mx-5 my-[8.5%] self-center">
      {ofertas.map((oferta) => (
        <a href={oferta.ref} target="_blank">
          <li
            className="flex flex-col gap-4 rounded-xl bg-sky-700 p-4 hover:bg-sky-600 hover:cursor-pointer justify-center content-center"
            key={oferta.id}
          >
            <div className="flex justify-center text-white text-xl font-semibold content-center">
              <strong>{oferta.nombre}</strong>
            </div>
            <img
              className="w-[100%] aspect-video block object-cover bg-[#fff] rounded-xl overflow-hidden"
              src={oferta.src}
              alt={oferta.nombre}
            />
            <div className="flex justify-center text-md font-semibold text-blue-100">
              <span>{`Desde ${oferta.precio}`}</span>
            </div>
          </li>
        </a>
      ))}
    </ul>
  );
}
