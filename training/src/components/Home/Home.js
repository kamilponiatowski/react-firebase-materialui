import {useEffect, useState} from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebaseConfig";
import {Paper, Typography} from "@mui/material";

const Home = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [articles, setArticles] = useState([]);

    const db = getFirestore(app);

    useEffect(() => {
        const auth = getAuth(app);
        const user = auth.currentUser;

        if (user) {
            setIsLogged(user);
        } else {
            console.log("Brak usera")
        }
    }, []);

    useEffect(() => {
        getArticles()

    }, [articles]);

    const getArticles = async () => {
        const querySnapshot = await getDocs(collection(db, "articles"));
        const tab = [];
        querySnapshot.forEach((doc) => {
            tab.push(doc.data());
        });
        setArticles(tab);
    };



    if (isLogged) {
        return <div>
            {articles.map(el => {
                return (
                    <Paper elevation={0} key={el.id}>
                        <Typography variant="h3">{el.title ? el.title : el.Title}</Typography>
                        <img src={el.photo ? el.photo : el.Photo} />
                        <Typography variant="p">{el.text ? el.text : el.Text}</Typography>
                    </Paper>
                )
            })}
        </div>
    } else {
        return <div>Zaloguj się</div>
    }
};

export default Home;
