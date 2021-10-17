import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/common/NavBar";
import {Container} from "@mui/material";

const App= () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Container>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
            </Switch>
        </Container>
    </BrowserRouter>
  );
}

export default App;
