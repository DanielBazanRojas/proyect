import ErrorBody from "../components/pages/error-body";
import MainFooter from "../components/pages/main-footer";

const ErrorElement = () => {
  return (
    <>
      <ErrorBody className="h-[auto]" />
      <MainFooter className="self-end" />
    </>
  );
};

export default ErrorElement;
