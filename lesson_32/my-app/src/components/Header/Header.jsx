import { Box } from '@mui/material';
import { Navigation } from './Navigation';
import { SwitchTheme } from './SwitchTheme';

export function Header() {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Navigation />
            <SwitchTheme />
        </Box>
    )
}