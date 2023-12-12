import MainFooter from "./main-footer";
import MainHeader from "./main-header";

export const PhishingPage = () => {
  return (
    <>
      <MainHeader />
      <div className="flex flex-col min-h-[61.1dvh] px-20 mx-6 pt-8 pb-5 my-8 bg-sky-400 content-center text-white">
        <strong className="text-5xl self-center">
          Correos Falsos (Phishing o Spoofing)
        </strong>
        <span className="mt-5 w-[70%] self-center text-center">
          En TechTrends Online, la seguridad de nuestros clientes es de suma
          importancia. Nos gustaría informarte sobre la existencia de correos
          electrónicos falsos, también conocidos como phishing o spoofing, que
          intentan suplantar la identidad de TechTrends con fines maliciosos. La
          sección "Correos Falsos" de nuestra atención al cliente está aquí para
          ayudarte a identificar y reportar cualquier comunicación sospechosa.
        </span>
        <div className="flex flex-col gap-5 max-w-[70%] self-center my-10 bg-sky-200 px-16 py-5 text-black">
          <strong className="text-center">
            Cómo Identificar Correos Falsos
          </strong>
          <span className="text-center">
            Los correos falsos a menudo intentan imitar nuestras comunicaciones
            legítimas para engañarte y obtener información personal. Presta
            atención a los errores gramaticales, direcciones de correo
            electrónico sospechosas y solicitudes de información confidencial.
            Recuerda que TechTrends nunca solicitará información sensible a
            través de correos electrónicos no seguros.
          </span>
          <strong className="text-center">
            Qué Hacer si Recibes un Correo Falso
          </strong>
          <span className="text-center">
            Si sospechas que has recibido un correo falso que afirma ser de
            TechTrends Online, no hagas clic en ningún enlace ni proporciones
            información personal. Reenvía el correo sospechoso a nuestro equipo
            de soporte en [correo electrónico de soporte] para que podamos
            investigar y tomar medidas adecuadas.
          </span>
          <strong className="text-center">Cómo Protegerte</strong>
          <span className="text-center">
            Mantente informado sobre las prácticas de seguridad en línea y
            utiliza contraseñas fuertes y únicas para tus cuentas. Siempre
            accede a tu cuenta TechTrends a través de nuestro sitio web oficial
            en lugar de enlaces proporcionados en correos electrónicos.
          </span>
          <span className="text-center font-light text-xs mt-4">
            En TechTrends Online, estamos comprometidos a garantizar la
            seguridad y privacidad de nuestros clientes. La sección "Correos
            Falsos" está aquí para ayudarte a mantener un entorno de compras en
            línea seguro y protegido. Si tienes alguna preocupación o pregunta
            adicional, no dudes en comunicarte con nuestro equipo de atención al
            cliente. ¡Gracias por confiar en nosotros para tus necesidades
            tecnológicas!
          </span>
        </div>
      </div>
      <MainFooter />
    </>
  );
};
