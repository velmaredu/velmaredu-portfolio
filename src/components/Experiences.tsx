import { ArrowForward, BusinessCenter } from "@mui/icons-material"
import { Button, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import "../assets/styles/experiences.scss"
import experience from "../data/experience.json"

type Experience = {
  name: string,
  role: string,
  start: string,
  end?: string,
  icon: string,
  link?: string
}

function Experiences() {
  const renderCardContent = (experience: Experience) => {
    return (
      <>
        <CardContent className="card-content">
          <Typography variant="h4" fontWeight={"bold"}>{experience.name}</Typography>
          <Typography variant="h6">{experience.role}</Typography>
          <Stack direction={"row"} id="time-block" spacing={0.5}>
            <Typography variant="body1">{formatDate(experience.start)} - {formatDate(experience.end)}</Typography>
            <Typography variant="body1">·</Typography>
            <Typography>{getDurationInYearMonths(experience.start, experience.end)}</Typography>
          </Stack>
        </CardContent>
        <CardMedia component="img" image={experience.icon} title={experience.name} />
      </>
    )
  }

  const renderExperience = () => {
    return experience.map((experience: Experience, index: number) => (
      <Stack direction={`${index % 2 === 0 ? "row-reverse" : "row"}`} className={`container ${index % 2 === 0 ? "left" : "right"}`} key={index}>
        <BusinessCenter fontSize="large" />
        <Card className={`box ${experience.link ? "linked" : ""}`}>
          {experience.link != null ? (
            <CardActionArea href={experience.link} sx={{ display: "flex" }}>
              {renderCardContent(experience)}
            </CardActionArea>
          ) : (
            renderCardContent(experience)
          )}
        </Card>
      </Stack>
    )
    )
  }


  return (
    <Stack className="section" id="experience">
      <Typography variant="h2" className="section-title"><BusinessCenter /><>Experience</></Typography>
      <Stack className="timeline">
        {renderExperience()}
      </Stack>
      <Button href="/experience/experience.html" className="dark-blue"><>View All</><ArrowForward /></Button>
    </Stack>
  )
}

const getDurationInYearMonths = (start: string, end?: string) => {
  const startDate = new Date(start)
  const endDate = end ? new Date(end) : new Date()
  let duration = ""
  if (endDate.getFullYear() - startDate.getFullYear() > 0) {
    duration += (endDate.getFullYear() - startDate.getFullYear()) + " years "
  }
  if (endDate.getMonth() - startDate.getMonth() > 0) {
    duration += (endDate.getMonth() - startDate.getMonth()) + " months"
  }

  return duration
}

const formatDate = (date: string | undefined): string => {
  if (!date) {
    return "present"
  }

  const dateConverted = new Date(date)

  const year = dateConverted.getFullYear()
  const month = dateConverted.getMonth() + 1

  const monthName = new Intl.DateTimeFormat(undefined, { month: 'short' }).format(new Date(`${year}-${month}-01`))
  return `${monthName}. ${year}`
}


export default Experiences