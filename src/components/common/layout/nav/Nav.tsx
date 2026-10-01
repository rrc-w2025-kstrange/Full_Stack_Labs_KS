import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <NavLink to="/employees">Employees</NavLink>
      <NavLink to="/organization">Organization</NavLink>
    </nav>
  );
}

export default Nav;