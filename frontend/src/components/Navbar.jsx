import React from "react";
import "./Navbar.css"

import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo"

function Navbar() {
    return(
    <nav>
        <Link to="/">
            <Logo />
        </Link>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            {/* <li>
                <NavLink to="/users">Usuários</NavLink>
            </li> */}
            <li>
                <NavLink to="/signup">Cadastro</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;