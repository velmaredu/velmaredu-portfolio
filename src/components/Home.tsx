import { ExpandCircleDown, GitHub, LinkedIn, Mail } from '@mui/icons-material'
import { Button, Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import profileOval from "../assets/images/profile-oval.png"
import "../assets/styles/home.scss"

function Home() {
    return (
        <Stack
            direction={{ xs: 'column', md: 'row' }}
            className="section"
            id="home"
        >
            <Stack className="content">
                <Typography variant="h2" align="left">Hi There,<br /> I am <span>Eduardo Velasco</span></Typography>
                <Typography variant="h3">I am into <span className="typing-text"></span></Typography>
                <Button
                    className="dark-blue"
                    id="scroll-to-about"
                    sx={{ textTransform: "none" }}>
                    About Me<ExpandCircleDown />
                </Button>
                <Stack direction="row" className="socials" spacing={1}>
                    <Button className="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/velmaredu" target="_blank">
                        <LinkedIn />
                    </Button>
                    <Button className="gmail" aria-label="Gmail" href="mailto:velmaredu@gmail.com" target="_blank">
                        <Mail />
                    </Button>
                    <Button className="github" aria-label="GitHub" href="https://github.com/velmaredu" target="_blank">
                        <GitHub />
                    </Button>
                </Stack>
            </Stack>
            <img className="profile" draggable="false" src={profileOval} alt="Profile" />
        </Stack >
    )
}

export default Home