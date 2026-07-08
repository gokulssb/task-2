import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <div>
        <div>
            LOGO
        </div>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/help">HELP</Link>
    </div>
    </>
  )
}

export default Navbar