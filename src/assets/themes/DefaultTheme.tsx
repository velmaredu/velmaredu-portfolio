import { createTheme } from '@mui/material/styles'

const defaultTheme = createTheme({
    // palette: {
    //     primary: {
    //         main: '#000000',
    //     },
    //     secondary: {
    //         main: '#E0C2FF',
    //     }
    // },
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: "inherit"
                },
            }
        }
    }
})

export default defaultTheme
