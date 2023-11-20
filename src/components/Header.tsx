import { AccountCircle } from "@mui/icons-material"
import { AppBar, Link, Stack, Toolbar } from "@mui/material"
import "../assets/styles/header.scss"

function Header() {
    return (
        <AppBar position="fixed">
            <Toolbar sx={{ width: "100%" }}>
                <Link href="/" className="logo"><AccountCircle /> Eduardo Velasco</Link>

                <div style={{ flexGrow: 1 }} />

                <div id="menu" className="fas fa-bars"></div>
                <Stack direction={"row"} className="navbar">
                    <Link className="active" id="scroll-to-home">Home</Link>
                    <Link id="scroll-to-about">About</Link>
                    <Link id="scroll-to-skills">Skills</Link>
                    <Link id="scroll-to-education">Education</Link>
                    <Link id="scroll-to-projects">Projects</Link>
                    <Link id="scroll-to-experience">Experience</Link>
                    <Link id="scroll-to-contact">Contact</Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header