import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Launches</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/capsules">Capsules</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container" style={{ marginTop: 30 }}>
        <Outlet />
      </div>
    </>
  )
}
