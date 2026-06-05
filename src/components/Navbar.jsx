import { useState } from "react"

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <nav className="navbar">

            <div className="container navbar-content">

                <img
                    src="logo.png"
                    alt="trams"
                    className="logo"
                />

                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li>Home</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <button className="nav-btn">
                    Get Started
                </button>

                <div
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </div>

            </div>

        </nav>

    )
}

export default Navbar