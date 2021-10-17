import * as React from 'react';
import {Link} from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/firebaseConfig";

export default function BasicMenu({clearUser}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const singOut = () => {
        const auth = getAuth(app);
        signOut(auth).then(() => {
            console.log("success");
            clearUser("Użytkownik niezalogowany");

        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><Link to="/">Strona Główna</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/addarticle">Dodaj artykuł</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/login">Zaloguj się</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/register">Zarejestruj</Link></MenuItem>
                <MenuItem onClick={handleClose}><button onClick={() => singOut()}>Wyloguj się</button></MenuItem>
            </Menu>
        </div>
    );
}