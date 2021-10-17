import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import BasicMenu from "./BasicMenu";
import {Typography} from "@mui/material";

export default function NavigationBar({user, clearUser}) {
    const style = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={style}>
                <Toolbar>
                    <BasicMenu clearUser={clearUser} />
                </Toolbar>
                <Typography>{user}</Typography>
            </AppBar>
        </Box>
    );
}