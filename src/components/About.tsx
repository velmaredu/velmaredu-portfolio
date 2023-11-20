import { Stack } from "@mui/material"

function About() {
    return (
        <Stack direction="column" className="about" id="about" >
            <h2 className="heading"><i className="fas fa-user-alt"></i> About <span>Me</span></h2>

            <Stack direction={"row"} className="row">
                <img draggable="false" className="tilt" src="./assets/images/profile.png" alt="" />
                <div className="content">
                    <h3>I am Eduardo</h3>
                    <span className="tag">Computer Engineering</span>

                    <p>I am passionate about the world of technology, specifically computer science. Not only programming
                        but also the design of projects for their subsequent implementation. I am also passionate about
                        image editing.</p>

                    <div className="box-container">
                        <div className="box">
                            <p><span>Email: </span><a href="mailto:velmaredu@gmail.com">velmaredu@gmail.com</a></p>
                            <p><span>Phone: </span>+34 679 766 286</p>
                            <p><span>Place: </span> Valladolid, Spain</p>
                        </div>
                    </div>
                </div>
            </Stack>

            <a href="#" className="btn dark-blue resume-btn">Resume<i className="fa-solid fa-download"></i></a >
        </Stack >
    )
}

export default About