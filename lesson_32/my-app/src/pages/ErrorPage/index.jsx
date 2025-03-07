import { Footer, Header, PageLayout } from '../../components';
import { Box } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export function ErrorPage() {

    return (
        <PageLayout
            renderFooter={() => <Footer />}
            renderHeader={() => <Header />}
            renderMain={() => (
                <Box sx={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Box>
                        <ErrorOutlineIcon sx={{ fontSize: '300px' }} />
                    </Box>
                    <Box component='h1' sx={{ fontSize: '50px', margin: '0' }}>404</Box>
                    <Box component='p'>Page not found</Box>
                </Box>
            )}
        />
    )
}