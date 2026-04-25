import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1 className="logo">Admin-dashboard</h1>

      <div className="links">
        <NavLink to="/" className="link">
          Home
        </NavLink>

        <NavLink to="/products" className="link">
          Products
        </NavLink>

        <NavLink to="/login" className="link">
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;