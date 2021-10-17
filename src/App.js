import React, {useState, useEffect} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase/firebaseConfig";
import Container from "@mui/material/Container";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NavigationBar from "./components/Common/NavigationBar";
import AddArticle from "./components/AddArticle";

function App() {
    const [user, setUser] = useState("Użytkownik niezalogowany");
    const auth = getAuth(app);

    useEffect(() => {
        const unsurscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user.email);
            }
        });

        return () => unsurscribe();
        }, []);

    return (
        <BrowserRouter>
            <NavigationBar user={user} clearUser={setUser}/>
            <Container maxWidth="sm">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/addarticle" component={AddArticle}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;
