import { Box, Button, Card, CardContent, CardMedia, FormControl, InputAdornment, Stack, TextField, TextareaAutosize, Typography } from "@mui/material"
import "../assets/styles/contact.scss"
import { Chat, Mail, Person, Phone, Send, SupportAgent } from "@mui/icons-material"

function Contact() {
    return (
        <Stack className="section" id="contact">
            <Typography variant="h2" className="section-title">
                <SupportAgent />Get in <span>Touch</span>
            </Typography>

            <Card className="card">
                <Box style={{ flex: "1", minWidth: "50vh" }}>
                    <CardMedia
                        component="img"
                        draggable="false"
                        src="./images/contact/contact.jpg"
                    />
                </Box>
                <CardContent sx={{ minWidth: "50%", flex: '1' }}>
                    <form action="https://formspree.io/f/moqzenlb" method="POST">
                        <FormControl className="form-control">
                            <TextField
                                className="form-field"
                                type="text"
                                name="name"
                                placeholder="Name"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                type="email"
                                name="email"
                                placeholder="Email"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Mail />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Phone />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                type="text"
                                name="message"
                                placeholder="Message"
                                variant="outlined"
                                color="secondary"
                                fullWidth
                                required
                                multiline
                                rows={6}
                                style={{ overflow: 'auto' }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Chat />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </FormControl>
                        <Button className="dark-blue" type="submit" >
                            <>Submit</><Send />
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Stack >
    )
}

export default Contact