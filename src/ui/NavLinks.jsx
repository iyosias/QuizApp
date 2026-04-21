import { NavLink } from "react-router";

function NavLinks({ dest, name }) {
  return (
    <NavLink
      to={dest}
      className="font-open-sans text-6 lg:text-xl  aria-[current=page]:text-white aria-[current=page]:p-3 aria-[current=page]:bg-blue-600 aria-[current=page]:rounded-2xl xl:text-2xl font-semibold text-gray-900 hover:text-blue-300"
    >
      {name}
    </NavLink>
  );
}

export default NavLinks;
