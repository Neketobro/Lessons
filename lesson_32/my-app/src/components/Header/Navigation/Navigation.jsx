import { Box, Tab, Tabs } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

export function Navigation() {
    const location = useLocation();

    const tabMapping = {
        '/': 0,
        '/todolist': 1,
        '/swapi': 2
    };

    const currentTab = tabMapping[location.pathname] ?? false;

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTab} aria-label="navigation tabs">
                    <Tab label="Home" component={NavLink} to="/" />
                    <Tab label="Todo List" component={NavLink} to="/todolist" />
                    <Tab label="SWAPI" component={NavLink} to="/swapi" />
                </Tabs>
            </Box>
        </Box>
    );
}
