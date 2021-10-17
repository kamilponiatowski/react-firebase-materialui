import {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebaseConfig";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, login, password)
            .then(() => {
                history.push("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage, "error");
            });
    }

    return (
        <>
            <Box
                noValidate
                autoComplete="off"
            >
                <form onSubmit={(e) => submitHandler(e)}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Mail"
                        margin="normal"
                        fullWidth
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <TextField
                        id="outlined-ok"
                        label="Password"
                        margin="normal"
                        fullWidth
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" sx={{mb: 2, ml: 0, mt: 2}}>Zaloguj się</Button>
                    <Link href="/register" sx={{display: "flex"}}>Zarejestruj</Link>
                </form>
            </Box>
        </>
    );
};

export default Login;