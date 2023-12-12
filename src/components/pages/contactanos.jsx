import MainFooter from "./main-footer";
import MainHeader from "./main-header";

export const AyudaContactanosPage = () => {
  return (
    <>
      <MainHeader />
      <div className="flex flex-col min-h-[61.1dvh] px-20 mx-6 pt-8 pb-5 my-8 bg-sky-400 content-center text-white">
        <strong className="text-5xl self-center">Contáctanos</strong>
        <span className="mt-5 w-[70%] self-center text-center">
          En TechTrends Online, estamos aquí para brindarte la mejor experiencia
          de compra posible, y valoramos tu retroalimentación y preguntas. La
          sección "Contáctanos" de nuestra atención al cliente es tu puente
          directo con nuestro equipo dedicado. Te ofrecemos varias formas de
          ponerte en contacto para garantizar que recibas la asistencia que
          necesitas de manera rápida y eficiente.
        </span>
        <div className="flex flex-col gap-5 max-w-[70%] self-center my-10 bg-sky-200 px-16 py-5 text-black">
          <strong className="text-center">Formulario de Contacto</strong>
          <span className="text-center">
            Utiliza nuestro formulario de contacto en línea para enviarnos
            mensajes directos. Proporció-nos detalles sobre tu consulta o
            problema, y nuestro equipo se pondrá en contacto contigo en el menor
            tiempo posible. Aseguramos respuestas personalizadas y soluciones
            adaptadas a tus necesidades específicas.
          </span>
          <strong className="text-center">Correo Electrónico</strong>
          <span className="text-center">
            Si prefieres el correo electrónico, puedes enviarnos un mensaje a
            [correo electrónico de soporte]. Nuestro equipo de atención al
            cliente revisa continuamente los correos electrónicos y se esfuerza
            por responder en el menor tiempo posible. Aseguramos
            confidencialidad y seguridad en todas las comunicaciones.
          </span>
          <strong className="text-center">Redes Sociales</strong>
          <span className="text-center">
            Síguenos en nuestras redes sociales para mantenerte al día con las
            últimas noticias, promociones y actualizaciones. Además, puedes
            enviarnos mensajes directos en nuestras plataformas para obtener
            respuestas rápidas y compartir tus experiencias.
          </span>
          <span className="text-center font-light text-xs mt-4">
            En TechTrends Online, nos esforzamos por estar siempre disponibles
            para ti. La sección "Contáctanos" es tu punto de inicio para
            cualquier pregunta, inquietud o comentario. Estamos aquí para
            ayudarte y asegurarnos de que tengas la mejor experiencia posible
            con nuestros productos y servicios. ¡Gracias por elegir TechTrends
            Online!
          </span>
        </div>
      </div>
      <MainFooter />
    </>
  );
};
