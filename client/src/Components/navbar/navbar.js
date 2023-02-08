import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
        <span className="logo">lamabooking</span>
        </Link>
        <div className="navItems">
          <Link to="/register">
          <button className="navButton">Register</button>
          </Link>
      <Link to="/login">
      <button className="navButton">Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar