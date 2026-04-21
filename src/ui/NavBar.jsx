import { NavLink } from "react-router";
import NavLinks from "./NavLinks";

function NavBar({ type }) {
  const navStyle =
    type === "col" ? "flex flex-col py-15" : " sm:flex flex gap-7";
  return (
    <div className={`${navStyle} gap-5 justify-center items-center`}>
      <NavLinks dest="about" name="About" />
      <NavLinks dest="services" name="Services" />
      <NavLinks dest="contact" name="Contact" />
    </div>
  );
}

export default NavBar;
