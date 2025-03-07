import { Footer, Header, PageLayout } from '../../components';
import { Box } from '@mui/material';

export function ErrorPage() {

    return (
        <PageLayout
            renderFooter={() => <Footer />}
            renderHeader={() => <Header />}
            renderMain={() => (
                <Box>
                    <Box component='h3'>error page</Box>
                    <Box component='p'>Ops... Error</Box>
                </Box>
            )}
        />
    )
}