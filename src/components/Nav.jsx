import React from 'react'
import logo from "../images/logo.svg"
import PageLinks from './pageLinks'

function Nav() {
  return (
    <nav className="navbar">
    <div className="nav-logo">
        <a href="#home"><img src={logo} className="logo-link" alt="logo" /></a>
    </div>

{/*   <!-- desktop -->
    <!-- <div className="desktop-nav"> --> */}
    <div className="nav-links">
        <PageLinks parentClass="nav-list" itemClass="nav-link" />
        
    </div>
    <div className="nav-icons">
        <ul className="nav-icons-list">
            <li>
                <a href="https://www.facebook.com/groups/gundambreakergamers/" className="nav-icon">
                    <i className="fa-brands fa-facebook"></i>
                </a>
            </li>
            <li>
                <a href="https://x.com/gundaminfona" className="nav-icon">
                    <i className="fa-brands fa-twitter"></i>
                </a>
            </li>
            <li>
                <a href="https://store.steampowered.com/app/1672500/GUNDAM_4/" className="nav-icon">
                    <i className="fa-brands fa-steam"></i>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/gundaminfona/reel/C_Q1HEmRPnc/" className="nav-icon">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </li>
        </ul>
    </div>
{/* <!-- </div> -->
    <!-- mobile hamburger -->   */}
    <div className="nav-mobile">
        <button type="button" className="nav-mobile-toggle" id="nav-mobile-toggle">
            <i className="fa-solid fa-bars"></i>
        </button>
        
        <ul className="mobile-nav-list" id="mobile-nav-list">
            <li><a href="#home" className="mobile-nav-link">Home</a></li>
            <li><a href="#about" className="mobile-nav-link">about</a></li>
            <li><a href="#service" className="mobile-nav-link">services</a></li>
            <li><a href="#tours" className="mobile-nav-link">Gundam Info</a></li>
        </ul>
    </div>
</nav>
  )
}

export default Nav