import React from 'react'
import { Link, NavLink, NavigateFunction, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate: NavigateFunction = useNavigate()

    const handleLogout: VoidFunction = () => {
        navigate("/login", {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) => "nav-item nav-link " + (isActive ? "active" : "")}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => "nav-item nav-link " + (isActive ? "active" : "")}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => "nav-item nav-link " + (isActive ? "active" : "")}
                        to="/hero"
                    >
                        Hero
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => "nav-item nav-link " + (isActive ? "active" : "")}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        bolo
                    </span>

                    <span className="nav-item nav-link text-info" onClick={handleLogout}>
                        Logout
                    </span>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
