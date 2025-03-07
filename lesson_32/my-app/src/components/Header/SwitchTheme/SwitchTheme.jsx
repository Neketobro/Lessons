import ContrastIcon from '@mui/icons-material/Contrast';
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../../../store/app";
import { DARK_THEME, LIGHT_THEME } from "../../../services/constants.js";


export function SwitchTheme() {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    function toggleThemeHandler() {
        const newTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        dispatch(setTheme(newTheme));
    }

    return (
        <Box>
            <Button variant="text" onClick={toggleThemeHandler} sx={{ borderRadius: "50px" }}>
                <ContrastIcon />
            </Button>
        </Box>
    )
}