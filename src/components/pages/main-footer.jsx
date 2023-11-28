import Footer from "../footer-elements/footer";

const MainFooter = () => {
  return (
    <footer className="flex flex-col justify-start bg-[#222831] h-full">
      <div className="bg-[#222831] h-[2vh]"></div>
      <div className="bg-[#485769] h-[2vh]"></div>
      <Footer />
    </footer>
  );
};
export default MainFooter;
