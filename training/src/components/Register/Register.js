import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebaseConfig"
import {Box, Button, TextField, Typography} from "@mui/material";
import {useState} from "react";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email,password);
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };

    return (
        <Box>
            <Typography variant="h2"> Rejestracja </Typography>
            <form onSubmit={e => submitHandler(e)}>
                <TextField
                    required
                    id="outlined-required-mail"
                    label="Mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
