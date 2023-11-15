import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="header">
      <div className="logo">
        <h5>Inventory Billing</h5>
      </div>
      <div className="nav-content">
        <Link className="sub-cont" to="/">Home</Link>
        <Link className="sub-cont" to="/billing">Billing</Link>
      </div>
      <div className="butn">
        <button type="button" class="btn btn-primary">
          Try it Free
        </button>
      </div>
    </div>
  );
}
