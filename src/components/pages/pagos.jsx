import MainFooter from "./main-footer";
import MainHeader from "./main-header";

export const PagosPage = () => {
  return (
    <>
      <MainHeader />
      <div className="flex flex-col min-h-[61.1dvh] px-20 mx-6 pt-8 pb-5 my-8 bg-sky-400 content-center text-white">
        <strong className="text-5xl self-center">
          Pagos y Cargos Generales
        </strong>
        <span className="mt-5 w-[70%] self-center text-center">
          En TechTrends Online, nos esforzamos por ofrecer una experiencia de
          compra sin complicaciones, y la sección de "Pagos y Cargos Generales"
          de nuestra atención al cliente está diseñada para brindarte claridad y
          transparencia en relación con los aspectos financieros de tus compras.
        </span>
        <div className="flex flex-col gap-5 max-w-[70%] self-center my-10 bg-sky-200 px-16 py-5 text-black">
          <strong className="text-center">Opciones de Pago</strong>
          <span className="text-center">
            Queremos que tengas flexibilidad al realizar tus compras. En esta
            sección, te proporcionamos información detallada sobre las opciones
            de pago disponibles, que incluyen tarjetas de crédito, débito y
            otros métodos seguros. Te alentamos a revisar esta información para
            seleccionar la opción que mejor se adapte a tus necesidades.
          </span>
          <strong className="text-center">Proceso de Pago</strong>
          <span className="text-center">
            Nuestro proceso de pago está diseñado para ser simple y seguro.
            Desglosamos los pasos clave desde la selección de productos hasta la
            confirmación del pedido y el pago final. Si necesitas ayuda en algún
            momento del proceso, nuestro equipo de atención al cliente está a tu
            disposición para proporcionarte asistencia personalizada.
          </span>
          <strong className="text-center">
            Cargos Adicionales y Política de Precios
          </strong>
          <span className="text-center">
            La transparencia en los precios es fundamental para nosotros. En
            esta sección, explicamos cualquier cargo adicional que pueda
            aplicarse, como impuestos o tarifas de envío. Además, te ofrecemos
            información detallada sobre nuestra política de precios para que
            puedas comprar con confianza, sabiendo que siempre obtendrás
            información precisa y honesta sobre los costos asociados.
          </span>
          <span className="text-center font-light text-xs mt-4">
            En TechTrends Online, creemos en la honestidad y la claridad en
            todas las transacciones financieras. La sección de "Pagos y Cargos
            Generales" está aquí para brindarte la información que necesitas y
            garantizar una experiencia de compra sin sorpresas desagradables. Si
            tienes preguntas específicas sobre pagos o cargos, nuestro equipo de
            atención al cliente está listo para ayudarte. ¡Gracias por elegir
            TechTrends Online!
          </span>
        </div>
      </div>
      <MainFooter />
    </>
  );
};
