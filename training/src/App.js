import {useEffect, useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase/firebaseConfig";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/common/NavBar";
import {Container} from "@mui/material";
import AddArticle from "./components/AddArticle";

const App= () => {
    const [email, setEmail] = useState('');
    useEffect(()=> {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(user);
                setEmail(user.email)
            } else {
                // User is signed out
            }
        });
    },[]);

  return (
    <BrowserRouter>
        <Navbar email={email}/>
        <Container maxWidth="sm">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/addarticle" component={AddArticle}/>
            </Switch>
        </Container>
    </BrowserRouter>
  );
}

export default App;
