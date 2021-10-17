import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import app from "../../firebase/firebaseConfig";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";
import { useHistory } from "react-router-dom";

const Register = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, login, password)
            .then(() => {
                signInWithEmailAndPassword(auth, login, password)
                    .then(() => {
                        history.push("/");
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.error(errorCode, errorMessage);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
            });
    }

    return (
        <>
            <Typography variant="h2" gutterBottom component="div">
                Rejestracja
            </Typography>
            <Box>
                <form onSubmit={(e) => submitHandler(e)}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Mail"
                        fullWidth
                        margin="normal"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <TextField
                        id="outlined-ok"
                        label="Password"
                        fullWidth
                        margin="normal"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Zarejestruj się
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default Register;