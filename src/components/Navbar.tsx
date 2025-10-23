import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/Logo-preview.jpg";

interface NavbarProps {
  variant?: "landing" | "main";
  onAddJob?: () => void;
  showAddButton?: boolean;
}

export default function Navbar({
  variant = "main",
  onAddJob,
  showAddButton = false,
}: NavbarProps) {
  if (variant === "landing") {
    return (
      <div className="header">
        <img className="logo" src={logo} alt="Logo" />
        <h1>JobTracker</h1>
      </div>
    );
  }

  return (
    <nav className="navbar">
      <div className="head">
        <img className="log" src="/src/assets/Logo-preview.jpg" alt="" />
        <h1>JobTracker</h1>
      </div>

      {showAddButton && (
        <div className="nav-buttons">
          <Button variant="green" onClick={onAddJob}>
            Add Job
          </Button>
          <Link to="/" className="link-logout">
            <Button variant="red">Logout</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
