import { Code } from "@mui/icons-material"
import { Card, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material"
import "../assets/styles/skills.scss"
import skillsData from "../data/skills.json"

function Skills() {
    const renderSkills = () => {
        return skillsData.map((skill, index) => (
            <Grid item key={index} padding={2} xs={6} sm={4} md={3} lg={2}>
                <Card className="box">
                    <CardMedia component="img" image={skill.icon} alt="skill" />
                    <CardContent className="content">
                        <Typography variant="h6">{skill.name}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))
    }

    return (
        <Stack className="section" id="skills" alignItems={"center"}>
            <Typography variant="h2" className="section-title">
                <Code fontSize="inherit" /><span>Skills <span>&</span> Abilities</span>
            </Typography>
            <Grid container id="skillsContainer">
                {renderSkills()}
            </Grid>
        </Stack>
    )
}

export default Skills