import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import BasicMenu from "./BasicMenu";


const Navbar = ({email}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <BasicMenu/>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                <Typography>{email ? "użytkownik zalogowany": "użytkownik nie jest zalogowany"}</Typography>
            </AppBar>
        </Box>
    );
};

export default Navbar;
