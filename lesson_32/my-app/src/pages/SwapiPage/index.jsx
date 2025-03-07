import { Footer, Header, PageLayout } from '../../components';
import { Box } from '@mui/material';
import { useLoaderData } from 'react-router';

export function SwapiPage() {

    const users = useLoaderData();
    console.log(users);
    
    return (
        <PageLayout
            renderFooter={() => <Footer />}
            renderHeader={() => <Header />}
            renderMain={() => (
                <Box>
                    <Box component='h3'>SwapiPage</Box>
                    <Box component='p'>Swapi page</Box>
                </Box>
            )}
        />
    )
}