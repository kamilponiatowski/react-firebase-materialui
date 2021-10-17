import {useState} from "react";
import {Link} from "react-router-dom";
import { Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                <MenuItem onClick={handleClose}><Link to="/login">Zaloguj się</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/register">Zarejestruj</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/addarticle">Dodaj artykuł</Link></MenuItem>
            </Menu>
        </div>
    );
}