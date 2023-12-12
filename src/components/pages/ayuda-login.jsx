import MainFooter from "./main-footer";
import MainHeader from "./main-header";

export const AyudaLoginPage = () => {
  return (
    <>
      <MainHeader />
      <div className="flex flex-col min-h-[61.1dvh] px-20 mx-6 pt-8 pb-5 my-8 bg-sky-400 content-center text-white">
        <strong className="text-5xl self-center">
          Ayuda en el Inicio de Sesión o Contraseña
        </strong>
        <span className="mt-5 w-[70%] self-center text-center">
          En TechTrends Online, entendemos que el acceso a tu cuenta es
          fundamental para disfrutar de todas las ventajas de nuestra
          plataforma. La sección "Ayuda en el Inicio de Sesión o Contraseña" de
          nuestra atención al cliente está diseñada para proporcionarte
          asistencia rápida y sencilla en caso de que encuentres problemas al
          intentar iniciar sesión.
        </span>
        <div className="flex flex-col gap-5 max-w-[70%] self-center my-10 bg-sky-200 px-16 py-5 text-black">
          <strong className="text-center">Recuperación de Contraseña</strong>
          <span className="text-center">
            Si has olvidado tu contraseña, no te preocupes. En esta sección, te
            guiaremos a través del proceso de recuperación de contraseña paso a
            paso. Proporcionamos opciones seguras y verificadas para restablecer
            tu contraseña y garantizar que solo tú puedas acceder a tu cuenta.
          </span>
          <strong className="text-center">Problemas de Inicio de Sesión</strong>
          <span className="text-center">
            Si experimentas problemas al intentar iniciar sesión, te ofrecemos
            soluciones comunes para abordarlos. Desde problemas técnicos hasta
            posibles errores de escritura, nuestra guía te ayudará a resolver
            los problemas más frecuentes y a recuperar el acceso a tu cuenta
            rápidamente.
          </span>
          <strong className="text-center">Seguridad de la Cuenta</strong>
          <span className="text-center">
            La seguridad de tu cuenta es nuestra prioridad. Proporcionamos
            consejos prácticos para mantener tu cuenta segura y protegida. Desde
            la configuración de contraseñas fuertes hasta la implementación de
            la autenticación de dos factores, estas sugerencias te ayudarán a
            mantener tu cuenta TechTrends Online protegida contra accesos no
            autorizados.
          </span>
          <span className="text-center font-light text-xs mt-4">
            En TechTrends Online, estamos aquí para asegurarnos de que tu
            experiencia de inicio de sesión sea tan fácil y segura como sea
            posible. Si enfrentas problemas persistentes o tienes preguntas
            adicionales, nuestro equipo de atención al cliente está disponible
            para ofrecerte asistencia personalizada. ¡Gracias por confiar en
            nosotros para satisfacer tus necesidades tecnológicas!
          </span>
        </div>
      </div>
      <MainFooter />
    </>
  );
};
