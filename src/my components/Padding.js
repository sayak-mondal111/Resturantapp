import React from 'react'
import './footer.css'

export default function Padding() {
    return (
        <footer class="fancy-footer">
            <div class="footer-container">
                <h2 class="footer-title">🍽 My Restaurant</h2>
                <p class="footer-tagline">Serving Taste & Tradition Since 2000</p>

                <ul class="footer-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <p class="copyright">© 2025 My Restaurant. All Rights Reserved.</p>
            </div>
        </footer>

    )
}
