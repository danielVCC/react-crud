import "./Logo.css"
import logo from "../assets/images/logo.png"
import React from "react"

function Logo () {
    return (
        <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside>
    )
}

export default Logo;