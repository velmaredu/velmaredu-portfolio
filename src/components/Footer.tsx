import { Button, Divider, Link, Stack, Typography } from "@mui/material"
import "../assets/styles/footer.scss"
import { Apartment, GitHub, LinkedIn, Mail } from "@mui/icons-material"

function Footer() {
    return (
        <footer>
            <Stack width={"100%"} direction={"row"} className="container">
                <Stack spacing={1}>
                    <Typography variant="h4">Eduardo's Portfolio</Typography>
                    <Divider variant="fullWidth" />
                    <Typography variant="body1">Thank you for visiting my personal portfolio website.</Typography>
                </Stack>
                <Stack spacing={1} className="companies-box">
                    <Typography variant="h4">Companies</Typography>
                    <Divider variant="fullWidth" />
                    <Link href="https://www.ghostcoretech.com/"
                    ><Apartment />GhostCore</Link>
                    <Link href="https://www.instagram.com/hart_edits/"
                    ><Apartment />Hart</Link>
                </Stack>
                <Stack spacing={1}>
                    <Typography variant="h4">Contact</Typography>
                    <Divider variant="fullWidth" />
                    <Stack direction={"row"} spacing={2} className="socials">
                        <Button
                            href="https://www.linkedin.com/in/velmaredu/"
                            className="fab fa-linkedin"
                            aria-label="LinkedIn"
                            target="_blank"
                        >
                            <LinkedIn />
                        </Button>
                        <Button
                            href="https://github.com/velmaredu"
                            className="fab fa-github"
                            aria-label="GitHub"
                            target="_blank"
                        >
                            <GitHub />
                        </Button>
                        <Button
                            href="mailto:velmaredu@gmail.com"
                            className="fas fa-envelope"
                            aria-label="Mail"
                            target="_blank"
                        >
                            <Mail />
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
            <Divider variant="fullWidth" />
            <Typography variant="h6" fontWeight={"bold"}>Copyright &copy; 2023 <span>Eduardo Velasco</span></Typography>
        </footer>
    )
}

export default Footer