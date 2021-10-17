import {useState} from "react";
import { useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebaseConfig"
import {Box, Button, TextField, Typography} from "@mui/material";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(email,password);
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        console.log(userCredential);
                        history.push("/");
                        // Signed in
                        const user = userCredential.user;
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                    });

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
