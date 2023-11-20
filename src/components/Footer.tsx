function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="box">
                    <h3>Eduardo's Portfolio</h3>
                    <hr />
                    <p>Thank you for visiting my personal portfolio website.</p>
                </div>

                <div className="box">
                    <h3>Companies</h3>
                    <hr />
                    <a href="https://www.ghostcoretech.com/"
                    ><i className="fa-solid fa-city"></i>GhostCore</a
                    >
                    <a href="https://www.instagram.com/hart_edits/"
                    ><i className="fa-solid fa-city"></i>Hart</a
                    >
                </div>

                <div className="box">
                    <h3>Contact</h3>
                    <hr />
                    <div className="socials">
                        <a
                            href="https://www.linkedin.com/in/velmaredu/"
                            className="fab fa-linkedin"
                            aria-label="LinkedIn"
                            target="_blank"
                        ></a>
                        <a
                            href="https://github.com/velmaredu"
                            className="fab fa-github"
                            aria-label="GitHub"
                            target="_blank"
                        ></a>
                        <a
                            href="mailto:velmaredu@gmail.com"
                            className="fas fa-envelope"
                            aria-label="Mail"
                            target="_blank"
                        ></a>
                    </div>
                </div>
            </div>

            <h1>Copyright &copy; 2023 <span>Eduardo Velasco</span></h1>
        </footer>
    )
}

export default Footer