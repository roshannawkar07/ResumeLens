import { Link } from "react-router";
import "remixicon/fonts/remixicon.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">
          RESUMELENS <i className="ri-search-line"></i>
        </p>
      </Link>
      <Link to="/upload" className="primary-button w-fit">
        Upload Resume <i class="ri-file-upload-line"></i>
      </Link>
    </nav>
  );
};
export default Navbar;
