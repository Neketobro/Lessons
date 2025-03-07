import { Box, Tab, Tabs } from '@mui/material';
import { NavLink } from 'react-router-dom';

export function Navigation() {

    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                {/* <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs> */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/todolist">Todo List</NavLink>
                <NavLink to="/swapi">SWAPI</NavLink>
            </Box>
        </Box>
    )
}