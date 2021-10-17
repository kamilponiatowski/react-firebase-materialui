import {Box, Button, TextField, Typography} from "@mui/material";
import {useState} from "react";

const Register = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(mail, password)
    };

    return (
        <Box>
            <Typography variant="h2"> Rejestracja </Typography>
            <form onSubmit={e => submitHandler(e)}>
                <TextField
                    required
                    id="outlined-required-mail"
                    label="Mail"
                    value={mail}
                    onChange={e => setMail(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    required
                    id="outlined-required-password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" type="submit">
                    Zarejestruj się
                </Button>
            </form>
        </Box>
    );
};

export default Register;
