import React, {useEffect, useState} from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "../../firebase/firebaseConfig";
import Container from "@mui/material/Container";
import {Paper, Typography} from "@mui/material";

const Home = () => {
    const [articles, setArticles] = useState([]);
    const db = getFirestore(app);
    const getArticles = async () => {
        const querySnapshot = await getDocs(collection(db, "articles"));
        console.log(querySnapshot);
        const tab = [];
        querySnapshot.forEach((doc) => {
            tab.push(doc.data());
            console.log(doc.id, " => ", doc.data());
        });
        setArticles(tab);
    }

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <>
            <Typography variant="h2" gutterBottom component="div">
                Strona główna
            </Typography>
            {
                articles.map(el => {
                    return (
                        <Paper elevation={0} key={el.id}>
                            <Typography variant="h3">{el.title}</Typography>
                            <img src={el.photo} />
                            <Typography variant="p">{el.text}</Typography>
                        </Paper>
                    )
                })
            }
        </>
    );
};

export default Home;