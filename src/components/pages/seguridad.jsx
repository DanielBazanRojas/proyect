import MainFooter from "./main-footer";
import MainHeader from "./main-header";

export const SeguridadPage = () => {
  return (
    <>
      <MainHeader />
      <div className="flex flex-col min-h-[61.1dvh] px-20 mx-6 pt-8 pb-5 my-8 bg-sky-400 content-center text-white">
        <strong className="text-5xl self-center">Dirección y Seguridad</strong>
        <span className="mt-5 w-[70%] self-center text-center">
          En TechTrends Online, la seguridad de tu información personal y la
          transparencia en nuestras operaciones son nuestras principales
          prioridades. Aquí, en la sección de "Dirección y Seguridad" de nuestra
          atención al cliente, te proporcionamos detalles importantes para
          garantizar que te sientas confiado al interactuar con nosotros.
        </span>
        <div className="flex flex-col gap-5 max-w-[70%] self-center my-10 bg-sky-200 px-16 py-5 text-black">
          <strong className="text-center">Dirección y Contacto</strong>
          <span className="text-center">
            Nuestra sede principal está ubicada en [Ubicación], y nos complacerá
            recibirte en persona si alguna vez decides visitarnos. Puedes
            encontrar nuestra dirección completa en esta sección, junto con
            información de contacto adicional, como números de teléfono y
            direcciones de correo electrónico. No dudes en comunicarte con
            nuestro equipo si tienes alguna pregunta o comentario.
          </span>
          <strong className="text-center">Seguridad de la Información</strong>
          <span className="text-center">
            Entendemos la importancia de proteger tu información personal.
            TechTrends Online utiliza las últimas tecnologías de seguridad en
            línea para garantizar que tus datos estén seguros durante todo el
            proceso de compra. Nuestra plataforma de pago está encriptada y
            cumple con los estándares de seguridad más altos para garantizar
            transacciones seguras y proteger tu información financiera.
          </span>
          <strong className="text-center">Política de Privacidad</strong>
          <span className="text-center">
            Queremos que tengas total claridad sobre cómo manejamos tus datos.
            En nuestra política de privacidad, detallamos cómo recopilamos,
            utilizamos y protegemos tu información personal. Te animamos a
            revisar esta sección para comprender completamente nuestras
            prácticas y cómo trabajamos para salvaguardar tu privacidad.
          </span>
          <span className="text-center font-light text-xs mt-4">
            En TechTrends Online, creemos en la transparencia y la seguridad en
            cada paso del camino. La sección de "Dirección y Seguridad" está
            aquí para ofrecerte la información que necesitas y para reafirmar
            nuestro compromiso de proporcionar un entorno de compra en línea
            confiable y protegido. Si tienes alguna pregunta adicional, nuestro
            equipo de atención al cliente está disponible para ayudarte en
            cualquier momento. ¡Gracias por confiar en nosotros!
          </span>
        </div>
      </div>
      <MainFooter />
    </>
  );
};
