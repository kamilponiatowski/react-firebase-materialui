import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import app from "../../firebase/firebaseConfig";
import Container from "@mui/material/Container";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddArticle = () => {
    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState("");
    const [text, setText] = useState("");
    let history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(e);
        const db = getFirestore(app);
        try {
            const docRef = await addDoc(collection(db, "articles"), {
                title,
                photo,
                text,
                date: Date.now()
            });
            history.push("/");
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h2" gutterBottom component="div">
                Dodaj artykuł
            </Typography>
            <Box>
                <form onSubmit={(e) => submitHandler(e)}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Tytuł"
                        fullWidth
                        margin="normal"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        id="outlined-ok"
                        label="Zdjęcie"
                        fullWidth
                        margin="normal"
                        type="text"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                    />
                    <TextField
                        id="outlined-ok"
                        label="Tekst"
                        fullWidth
                        margin="normal"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Dodaj artykuł
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default AddArticle;