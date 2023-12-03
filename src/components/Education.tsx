import { School } from "@mui/icons-material"
import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import "../assets/styles/education.scss"
import educationData from "../data/education.json"

function Education() {
    const renderEducations = () => {
        return educationData.map((education, index) => (
            <Card key={index} className="box" sx={{ justifyContent: "start", flexWrap: "wrap" }}>
                <CardActionArea href={education.link}>
                    <CardMedia component="img" image={education.logo} alt="education" />
                    <CardContent className="content" sx={{ width: "fit-content" }}>
                        <Typography variant="h5">{education.title}</Typography>
                        <Typography variant="body1">{education.place}</Typography>
                        <Typography variant="h6">{education.period}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card >
        ))
    }

    return (
        <Stack className="section" id="education">
            <Typography variant="h2" className="section-title" gap={2}>
                <School fontSize="inherit" /><>My <span>Education</span></>
            </Typography>

            <Stack spacing={2} alignItems={"center"}>
                {renderEducations()}
            </Stack>
        </Stack>
    )
}

export default Education