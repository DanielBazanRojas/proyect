export const ContactanosForm = () => {
  return (
    <form
      className="block bg-[#fff] shadow-form m-auto max-w-[600px] max-h-[700px] px-12 py-8 my-11"
      action=""
    >
      <div className="flex flex-col">
        <h2 className="text-3xl">
          Contactanos <span className="text-sky-400">Aquí</span>
        </h2>
        <input
          type="text"
          name="nombre"
          id=""
          placeholder="Ingresa tu nombre"
          className="bg-[#f3f3f3] border-[1px] border-[#ddd] rounded-sm my-[10px] p-[8px]"
        />
        <input
          type="email"
          name="email"
          id=""
          placeholder="ejemplo@gmail.com"
          className="bg-[#f3f3f3] border-[1px] border-[#ddd] rounded-sm my-[10px] p-[8px]"
        />
        <input
          type="phone"
          name="celular"
          id=""
          placeholder="Ingresa tu celular"
          className="bg-[#f3f3f3] border-[1px] border-[#ddd] rounded-sm my-[10px] p-[8px]"
        />
        <textarea
          name="mensaje"
          id=""
          cols="30"
          rows="10"
          placeholder="Escribe tu mensaje aqui..."
          className="bg-[#f3f3f3] border-[1px] border-[#ddd] rounded-sm my-[10px] p-[8px] h-[245px] resize-none"
        ></textarea>
        <button
          className="h-[30px] w-[80px] self-center bg-sky-400 text-white"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};
