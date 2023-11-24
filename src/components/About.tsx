import { FileDownload } from "@mui/icons-material"
import { Button, Card, CardMedia, Link, Stack, Typography } from "@mui/material"
import profile from "../assets/images/profile.png"
import "../assets/styles/about.scss"

function About() {
    return (
        <Stack direction="column" className="section" id="about" >
            <Typography variant="h2" className="heading" align="center" fontWeight={"bold"}><i className="fas fa-user-alt"></i> About <span>Me</span></Typography>

            <Stack direction={"row"} alignItems={"center"} spacing={6}>
                <Card sx={{ boxShadow: "0 5px 10px rgba(0, 0, 0, 0.6)", borderRadius: "5%" }}>
                    <CardMedia
                        component="img"
                        draggable="false"
                        image={profile}
                        alt=""
                    />
                </Card>
                <Stack className="content" height={"fit-content"} spacing={2}>
                    <Typography variant="h4" fontWeight={"bold"}>I am Eduardo</Typography>
                    <span className="tag">Computer Engineering</span>

                    <p>I am passionate about the world of technology, specifically computer science. Not only programming
                        but also the design of projects for their subsequent implementation. I am also passionate about
                        image editing.</p>

                    <Stack spacing={1}>
                        <p><span>Email: </span><Link href="mailto:velmaredu@gmail.com">velmaredu@gmail.com</Link></p>
                        <p><span>Phone: </span>+34 679 766 286</p>
                        <p><span>Place: </span> Valladolid, Spain</p>
                    </Stack>
                </Stack>
            </Stack>

            <Button href="#" className="dark-blue resume-btn">Resume<FileDownload /></Button >
        </Stack >
    )
}

export default About