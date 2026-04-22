import { Link } from "react-router";

function Logo() {
  return (
    <Link to="/">
      <div className="flex flex-row justify-center items-center gap-3">
        <img src="logo.png" alt="logo" width={120} />
        <p className="font-brand-header font-extrabold text-4xl text-blue-900">
          NESTED REALITY
        </p>
      </div>
    </Link>
  );
}

export default Logo;
