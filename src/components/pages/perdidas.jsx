import MainFooter from "./main-footer";
import MainHeader from "./main-header";

export const PerdidasPage = () => {
  return (
    <>
      <MainHeader />
      <div className="flex flex-col min-h-[61.1dvh] px-20 mx-6 pt-8 pb-5 my-8 bg-sky-400 content-center text-white">
        <strong className="text-5xl self-center">
          No Encuentro Mi Producto
        </strong>
        <span className="mt-5 w-[70%] self-center text-center">
          En TechTrends Online, entendemos lo frustrante que puede ser no
          encontrar un producto específico o tener dificultades para navegar por
          nuestro extenso catálogo. La sección "No Encuentro Mi Producto" de
          nuestra atención al cliente está diseñada para ayudarte a superar
          estos desafíos y asegurarte de que encuentres lo que estás buscando.
        </span>
        <div className="flex flex-col gap-5 max-w-[70%] self-center my-10 bg-sky-200 px-16 py-5 text-black">
          <strong className="text-center">Búsqueda Avanzada</strong>
          <span className="text-center">
            Si no encuentras un producto mediante la búsqueda estándar, te
            recomendamos probar nuestra función de búsqueda avanzada. Esta
            herramienta te permite refinar tus criterios de búsqueda y filtrar
            los resultados para encontrar el producto exacto que estás buscando.
          </span>
          <strong className="text-center">Asistencia Personalizada</strong>
          <span className="text-center">
            Nuestro equipo de atención al cliente está aquí para ayudarte. Si no
            puedes localizar un artículo específico o necesitas orientación, no
            dudes en ponerte en contacto con nosotros. Proporciona detalles
            sobre el producto que estás buscando, y haremos todo lo posible para
            ayudarte a encontrarlo o sugerirte alternativas similares.
          </span>
          <strong className="text-center">
            Explora Categorías Relacionadas
          </strong>
          <span className="text-center">
            A veces, los productos pueden estar clasificados en categorías que
            no esperabas. Explora nuestras categorías relacionadas para
            descubrir productos similares o complementarios que podrían cumplir
            con tus necesidades.
          </span>
          <span className="text-center font-light text-xs mt-4">
            En TechTrends Online, queremos que tu experiencia de compra sea
            fácil y satisfactoria. La sección "No Encuentro Mi Producto" está
            diseñada para brindarte las herramientas y la asistencia que
            necesitas para encontrar exactamente lo que buscas. No dudes en
            comunicarte con nuestro equipo si necesitas ayuda adicional.
            ¡Estamos aquí para asegurarnos de que encuentres el producto
            perfecto para ti!
          </span>
        </div>
      </div>
      <MainFooter />
    </>
  );
};
