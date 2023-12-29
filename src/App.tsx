import { Container, CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material'
import { useMemo } from 'react'
import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { amber } from '@mui/material/colors'
import defaultTheme from './assets/themes/DefaultTheme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Header />
      <Container maxWidth={false} style={{ margin: "4rem 0 0 0", padding: "0" }}>
        <Home />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App
