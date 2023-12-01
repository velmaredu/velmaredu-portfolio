import { Card, CardActionArea, Stack, Typography } from "@mui/material"
import "../assets/styles/education.scss"
import educationData from "../data/education.json"
import { School } from "@mui/icons-material"

function Education() {

    const renderEducations = () => {
        return educationData.map((education, index) => (
            <Card key={index} className="box">
                <CardActionArea href={education.link}>
                    <Stack direction={"row"} className="box">
                        <img
                            draggable="false"
                            src={education.logo}
                            alt=""
                        />
                        <Stack className="content">
                            <Typography variant="h5">{education.title}</Typography>
                            <p>{education.place}</p>
                            <Typography variant="h6">{education.period}</Typography>
                        </Stack>
                    </Stack>
                </CardActionArea>
            </Card>
        ))
    }

    return (
        <Stack className="section" id="education">
            <Typography variant="h2" className="section-title">
                <School fontSize="large" /> My <span>Education</span>
            </Typography>

            <Stack className="container">
                {renderEducations()}
            </Stack>
        </Stack>
    )
}

export default Education