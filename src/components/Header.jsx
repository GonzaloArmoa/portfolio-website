import { Link } from "react-router-dom";
import logo from "../assets/logoGA.png";

export const Header = () => {

  return (
    <>
    <div className="p-3">
        {/* Logo section */}
        <Link>
          <img src={logo} alt="Logo GA" className="w-16" />
        </Link>
        </div>

    </>
  );
};
