function Footer() {
    return (
        // Footer
        <div className="footer color-white">
            <div className="container grid grid-2 py-5 text-selection">
                
                <div className="text-center">
                    <h1>Samim</h1>
                    <p>Copyright© 2022</p>
                </div>

                {/* footers nav */}
                <nav>
                    <ul className="social for-animation flex">
                        <a href="https://github.com/Samim-dev">
                            <li className="github"><i className="fab fa-github fa-2x"></i></li>
                        </a>

                        <a href="https://www.facebook.com/Samim.ch007">
                            <li className="facebook"><i className="fab fa-facebook fa-2x"></i></li>
                        </a>

                        <a href="https://www.linkedin.com/in/samim-chowdhury-630b09250">
                            <li className="linkedin"><i className="fab fa-linkedin fa-2x"></i></li>
                        </a>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Footer;