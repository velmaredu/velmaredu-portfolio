import { Container, ThemeProvider } from '@mui/material'
import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import defaultTheme from './assets/themes/DefaultTheme'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Container maxWidth={false} style={{ margin: "4rem 0 0 0", padding: "0" }}>
        <Home />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App
