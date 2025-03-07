import { Footer, Header, PageLayout } from '../../components';
import { Box } from '@mui/material';

export function CurriculumVitaePage() {

    return (
        <PageLayout
            renderFooter={() => <Footer />}
            renderHeader={() => <Header />}
            renderMain={() => (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <Box sx={{ backgroundColor: 'primary.main', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', borderRadius: '20px', padding: '20px' }}>
                        <Box sx={{ width: '400px', backgroundColor: 'primary.light', borderRadius: '20px', padding: '10px' }}>
                            <Box sx={{ fontSize: '20px', fontWeight: 'bold' }}>Про себе</Box>
                            <Box>Швидко сприймаю нову інформацію, чітко виконую поставленні завдання. Не рідко допомогав колегам для вирішення проблеми, або його питання.</Box>
                        </Box>

                        <Box sx={{ width: '400px', backgroundColor: 'primary.light', borderRadius: '20px', padding: '10px' }}>
                            <Box sx={{ fontSize: '20px', fontWeight: 'bold' }}>Професійні вміння</Box>
                            <Box component='ul'>
                                <Box component='li'>Високомотивований</Box>
                                <Box component='li'>Дисциплінований</Box>
                                <Box component='li'>Гарна комунікабельність</Box>
                                <Box component='li'>Вмію працювати в команді</Box>
                            </Box>
                        </Box>

                        <Box sx={{ width: '400px', backgroundColor: 'primary.light', borderRadius: '20px', padding: '10px' }}>
                            <Box sx={{ fontSize: '20px', fontWeight: 'bold' }}>Досвід роботи</Box>
                            <Box component='p' sx={{ fontSize: '18px', fontWeight: 'bold' }}>Global Bilgi з 2023 </Box>
                            <Box component='p'>ПРОЕКТ "BRITISH AMERICAN TOBACCO" </Box>
                            <Box component='p'>Прийом вхідних дзвінків, консультація клієнтів по продукції та допомога в вирішенні проблем клієнта.</Box>
                        </Box>

                        <Box sx={{ width: '400px', backgroundColor: 'primary.light', borderRadius: '20px', padding: '10px' }}>
                            <Box sx={{ fontSize: '20px', fontWeight: 'bold' }}>Освіта</Box>
                            <Box component='p' sx={{ fontSize: '18px', fontWeight: 'bold' }}>ДНІПРОПЕТРОВСЬКИЙ ДЕРЖАВНИЙ УНІВЕРСИТЕТ ВНУТРІШНІХ СПРАВ</Box>
                            <Box component='p'>Бакалавр</Box>
                            <Box component='p'>Спеціальність "Правоохоронна діяльність" Рік вступу та закінченя 2022-2025</Box>
                        </Box>
                    </Box>
                </Box>
            )}
        />
    )
}