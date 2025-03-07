import { Footer, Header, PageLayout } from '../../components';
import { Box } from '@mui/material';

export function TodoListPage() {

    return (
        <PageLayout
            renderFooter={() => <Footer />}
            renderHeader={() => <Header />}
            renderMain={() => (
                <Box>
                    <Box component='h3'>TodoListPage</Box>
                    <Box component='p'>Todo list page</Box>
                </Box>
            )}
        />
    )
}