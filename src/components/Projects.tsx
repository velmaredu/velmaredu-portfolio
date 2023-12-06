import { ArrowForward, Code, Laptop, Visibility } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material"
import "../assets/styles/projects.scss"
import projects from "../data/projects.json"

type Project = {
    name: string
    desc: string
    image: string
    category: string
    links: {
        view: string
        code?: string
    }
}

function Projects() {

    const renderProjects = () => {
        return projects.map((project: Project, index: number) => (
            <Grid item key={index} sm={12} md={6} lg={4}>
                <Card className="box">
                    <CardActions className="buttons" sx={{ justifyContent: "space-evenly" }}>
                        <Button href={project.links.view} className="button1 dark-red" target="_blank">
                            <Visibility /><>View</>
                        </Button>
                        {project.links.code && (
                            <Button href={project.links.code} className="button2 dark-red" target="_blank">
                                <>Code</><Code />
                            </Button>
                        )}
                    </CardActions>
                    <CardContent className="content">
                        <Typography variant="h5" className="title">{project.name}</Typography>
                        <Typography variant="body1">{project.desc}</Typography>
                    </CardContent>
                    <CardMedia component={"img"} image={project.image} draggable="false" title="project" />
                </Card>
            </Grid>
        ))
    }

    return (
        <Stack className="section" id="projects">
            <Typography className="section-title" variant="h2" gap={2}>
                <Laptop fontSize="inherit" /><>Projects <span>Made</span></>
            </Typography>
            <Grid container id="projectsContainer" spacing={2}>
                {renderProjects()}
            </Grid>
            <Button href="/projects" className="dark-blue"><>View All</><ArrowForward /></Button>
        </Stack>
    )
}

export default Projects