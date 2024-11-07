import React from 'react'

function Footer() {
    const yyyy=new Date().getFullYear();
  return (
    <footer className="section footer">
    <ul className="footer-links">
        <li><a href="#home" className="footer-link">Home</a></li>
        <li><a href="#about" className="footer-link">About</a></li>
        <li><a href="#service" className="footer-link">Service</a></li>
        <li><a href="#tour" className="footer-link">Gundam Info</a></li>
    </ul>
    <ul className="footer-icons">
        <li>
            <a href="https://www.facebook.com/groups/gundambreakergamers/" className="footer-icon">
                <i className="fa-brands fa-facebook"></i>
            </a>
        </li>
        <li>
            <a href="https://x.com/gundaminfona" className="footer-icon">
                <i className="fa-brands fa-twitter"></i>
            </a>
        </li>
        <li>
            <a href="https://store.steampowered.com/app/1672500/GUNDAM_4/" className="footer-icon">
                <i className="fa-brands fa-steam"></i>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/gundaminfona/reel/C_Q1HEmRPnc/" className="footer-icon">
                <i className="fa-brands fa-instagram"></i>
            </a>
        </li>
    </ul>
    <p className="copyright">
        copyright &copy; Gundam company 
        <span id="date">{yyyy}</span>all right reserved
    </p>
    </footer>
    )
}

export default Footer