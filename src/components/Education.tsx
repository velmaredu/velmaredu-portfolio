function Education() {
    return (
        <section className="education" id="education">
            <h1 className="heading">
                <i className="fas fa-graduation-cap"></i> My <span>Education</span>
            </h1>

            <div className="container">
                <a href="https://www.uva.es/">
                    <div className="box">
                        <img
                            draggable="false"
                            src="./assets/images/education/logo-uva.svg"
                            alt=""
                        />
                        <div className="content">
                            <h3>Bachelor of Computer Engineering</h3>
                            <p>University of Valladolid | UVa</p>
                            <h4>sep 2018 - jan 2023</h4>
                        </div>
                    </div>
                </a>

                <a href="https://www.lasalle.es/">
                    <div className="box">
                        <img
                            draggable="false"
                            src="./assets/images/education/la-salle-logo.jpg"
                            alt=""
                        />
                        <div className="content">
                            <h3>Science High School Degree</h3>
                            <p>La Salle</p>
                            <h4>sep 2016 - jun 2018</h4>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Education;