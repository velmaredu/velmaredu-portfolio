import Stack from "@mui/material/Stack"
import profileOval from "../assets/images/profile-oval.png"
import { Button, Typography } from "@mui/material"
import { ExpandCircleDown, GitHub, LinkedIn, Mail } from '@mui/icons-material'
import "../assets/styles/home.scss"

function Home() {
    return (
        <Stack direction="row" className="section" id="home">
            <Stack className="content">
                <Typography variant="h3" align="left">Hi There,<br /> I am <span>Eduardo Velasco</span></Typography>
                <Typography variant="h4">I am into <span className="typing-text"></span></Typography>
                <Button className="dark-blue" id="scroll-to-about">About Me<ExpandCircleDown /></Button>
                <Stack direction="row" className="socials" spacing={1}>
                    <a className="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/velmaredu"
                        target="_blank"><LinkedIn /></a>
                    <a className="gmail" aria-label="Gmail" href="mailto:velmaredu@gmail.com" target="_blank"><Mail /></a>
                    <a className="github" aria-label="GitHub" href="https://github.com/velmaredu" target="_blank"><GitHub /></a>
                </Stack>
            </Stack>
            <img className="profile" draggable="false" src={profileOval} alt="Profile" />
        </Stack >
    )
}

export default Home