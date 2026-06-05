function Footer() {
    return (

        <footer className="footer">

            <div className="container">

                {/* NEWSLETTER SECTION */}

                <div className="newsletter">

                    <h2>
                        Subscribe to <br />
                        our newsletter
                    </h2>

                    <p>
                        To make your stay special and even more memorable
                    </p>

                    <button className="subscribe-btn">
                        Subscribe Now
                    </button>

                </div>


                {/* FOOTER LINKS */}

                <div className="footer-grid">

                    {/* COLUMN 1 */}

                    <div className="footer-column">

                        <h3>Company</h3>

                        <ul>
                            <li>Home</li>
                            <li>Studio</li>
                            <li>Service</li>
                            <li>Blog</li>
                        </ul>

                    </div>


                    {/* COLUMN 2 */}

                    <div className="footer-column">

                        <h3>Terms & Policies</h3>

                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Explore</li>
                            <li>Accessibility</li>
                        </ul>

                    </div>


                    {/* COLUMN 3 */}

                    <div className="footer-column">

                        <h3>Follow Us</h3>

                        <ul>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                            <li>Youtube</li>
                            <li>Twitter</li>
                        </ul>

                    </div>


                    {/* COLUMN 4 */}

                    <div className="footer-column">

                        <h3>Contact</h3>

                        <ul>
                            <li>
                                1498w Fluton ste,
                                STE 2D Chicago,
                                IL 63667.
                            </li>

                            <li>(123) 456789000</li>

                            <li>info@elementum.com</li>
                        </ul>

                    </div>

                </div>


                {/* COPYRIGHT */}

                <div className="copyright">

                    <p>
                        ©2023 Elementum. All rights reserved
                    </p>

                </div>

            </div>

        </footer>

    )
}

export default Footer