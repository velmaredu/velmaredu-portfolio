import { createTheme } from '@mui/material/styles'

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#ffffff"
        },
        secondary: {
            main: "#000000"
        },
        text: {
            primary: "#000000"
        }
    },
    typography: {
        // Ajusta la configuración de la tipografía según sea necesario
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: "#000000",
                    textDecoration: "none",
                    cursor: "pointer"
                },
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    width: "fit-content"
                },
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: "inherit"
                },
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: "0",
                },
            }
        },
    }
})

export default defaultTheme
