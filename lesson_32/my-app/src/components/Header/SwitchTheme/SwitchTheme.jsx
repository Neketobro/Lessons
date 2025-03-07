import ContrastIcon from '@mui/icons-material/Contrast';
import { Box, Button } from "@mui/material";

export function SwitchTheme() {
    return (
        <Box>
            <Button variant="outlined">
                <ContrastIcon />
            </Button>
        </Box>
    )
}