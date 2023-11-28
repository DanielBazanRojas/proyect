import LogoTechtrends from "@/assets/images/TechTrends-3.svg";
import LogoNav from "../svgs/logo-nav";
import NavPrincipal from "../nav-elements/nav-principal";
import SubNavMenu2 from "../nav-elements/sub2-nav-menu";
import SubNavMenu from "../nav-elements/sub-nav-menu";
const MainHeader = () => {
  return (
    <header>
      <NavPrincipal />
      <SubNavMenu />
      <SubNavMenu2 />
    </header>
  );
};
export default MainHeader;
