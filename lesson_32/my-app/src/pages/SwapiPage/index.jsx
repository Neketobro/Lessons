import { Footer, Header, PageLayout } from '../../components';
import { Box, Avatar } from '@mui/material';
import { useLoaderData } from 'react-router';

export function SwapiPage() {
    const users = useLoaderData();

    console.log(users);
    

    return (
        <PageLayout
            renderFooter={() => <Footer />}
            renderHeader={() => <Header />}
            renderMain={() => (
                <Box sx={{ width: '100%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: '10px', padding: '20px'}}>
                    {users && users.map((user) => {
                        return (
                            <Box key={user.id} sx={{ backgroundColor: 'primary.main', width: '450px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', borderRadius: '20px'}}>
                                <Avatar alt={user.first_name + ' ' + user.last_name} src={user.avatar} sx={{ scale: 3 }} />
                                <Box>
                                    <Box sx={{fontSize: '20px'}}>{user.first_name} {user.last_name}</Box>
                                    <Box>{user.email}</Box>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
            )}
        />
    )
} 