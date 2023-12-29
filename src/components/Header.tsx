import { AccountCircle } from "@mui/icons-material"
import { AppBar, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material"
import "../assets/styles/header.scss"
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from "react"

const pages = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Experience', 'Contact']

function Header() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar
            position="fixed"
        >
            <Toolbar sx={{ width: "100%" }}>
                <Typography
                    variant='h4'
                    component='a'
                    href="/"
                    className="logo"
                >
                    <AccountCircle /><span>Eduardo Velasco</span>
                </Typography>
                <IconButton
                    id="menu"
                    onClick={handleOpenNavMenu}
                    color="secondary"
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Stack
                    direction={"row"}
                    className="navbar"
                    display={{ xs: 'none', md: 'flex' }}
                >
                    {pages.map((page, key) => (
                        <Typography
                            key={key}
                            variant='h6'
                            component='a'
                            href={`/${page}`}
                        >
                            {page}
                        </Typography>
                    ))}
                </Stack>

                <Menu
                    anchorEl={anchorElNav}
                    keepMounted
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' }
                    }}
                >
                    {pages.map((page, key) => (
                        <MenuItem
                            key={key}
                            component='a'
                            href={`/${page}`}
                        >
                            <Typography
                                variant='h3'
                                textAlign='center'
                            >
                                {page}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default Header