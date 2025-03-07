import { Footer, Header, PageLayout } from '../../components';
import { Box } from '@mui/material';

export function CurriculumVitaePage() {

    return (
        <PageLayout
            renderFooter={() => <Footer />}
            renderHeader={() => <Header />}
            renderMain={() => (
                <Box>
                    <Box component='h3'>CurriculumVitaePage</Box>
                    <Box component='p'>Curriculum vitae page</Box>
                </Box>
            )}
        />
    )
}