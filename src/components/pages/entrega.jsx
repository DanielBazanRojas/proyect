import MainFooter from "./main-footer";
import MainHeader from "./main-header";

export const EntregaPage = () => {
  return (
    <>
      <MainHeader />
      <div className="flex flex-col min-h-[61.1dvh] px-20 mx-6 pt-8 pb-5 my-8 bg-sky-400 content-center text-white">
        <strong className="text-5xl self-center">
          Entregas, Pedidos y Devoluciones
        </strong>
        <span className="mt-5 w-[70%] self-center text-center">
          Bienvenido a nuestra sección de "Entregas, Pedidos y Devoluciones" en
          la atención al cliente de TechTrends Online. Nos esforzamos por
          brindar una experiencia de compra transparente y sin complicaciones, y
          esta sección está diseñada para proporcionarte toda la información
          necesaria sobre estos procesos.
        </span>
        <div className="flex flex-col gap-5 max-w-[70%] self-center my-10 bg-sky-200 px-16 py-5 text-black">
          <strong className="text-center">Entregas</strong>
          <span className="text-center">
            Queremos que recibas tus productos de manera rápida y segura. Una
            vez realizada tu compra, recibirás confirmaciones y actualizaciones
            por correo electrónico. Nuestra sección de seguimiento de envíos te
            permite rastrear tu paquete en tiempo real para que siempre estés al
            tanto de su ubicación y fecha estimada de entrega.
          </span>
          <strong className="text-center">Pedidos</strong>
          <span className="text-center">
            Entender el estado de tu pedido es crucial. Desde la confirmación de
            la compra hasta la expedición, mantente informado sobre cada etapa
            del proceso. Si tienes preguntas o necesitas asistencia, nuestro
            equipo de atención al cliente está disponible para ayudarte. Además,
            ofrecemos opciones de pago seguras y diversas para adaptarnos a tus
            preferencias.
          </span>
          <strong className="text-center">Devoluciones</strong>
          <span className="text-center">
            En TechTrends Online, comprendemos que las cosas pueden no siempre
            salir como se planean. Nuestra política de devoluciones está
            diseñada para ser justa y clara. Si no estás completamente
            satisfecho con tu compra, puedes devolver el producto dentro del
            plazo establecido para obtener un reembolso o un cambio. Consulta
            nuestra sección de devoluciones para obtener detalles específicos
            sobre el proceso y los requisitos.
          </span>
          <span className="text-center font-light text-xs mt-4">
            Estamos comprometidos a hacer que tu experiencia de compra sea
            excepcional, y esta sección está aquí para brindarte la información
            que necesitas para navegar fácilmente a través de entregas, pedidos
            y devoluciones. Siempre estamos aquí para ayudarte, así que no dudes
            en ponerte en contacto con nuestro equipo de atención al cliente si
            tienes alguna pregunta o inquietud. ¡Gracias por elegir TechTrends
            Online!
          </span>
        </div>
      </div>
      <MainFooter />
    </>
  );
};
