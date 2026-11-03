import "./Navbar.css";
import logo from "../images/logo.svg";

const mainLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
];

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <img src={logo} alt="Shortly" />
        <div className="nav-bar-items">
          <ul className="navbar-links">
            {mainLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button className="login-button">
              Login
            </button>
            <button className="signup-button">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
