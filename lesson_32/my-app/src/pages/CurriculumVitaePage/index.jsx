import { Footer, Header, PageLayout } from '../../components';
import { Box, Avatar } from '@mui/material';

export function CurriculumVitaePage() {

    return (
        <PageLayout
            renderFooter={() => <Footer />}
            renderHeader={() => <Header />}
            renderMain={() => (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <Box sx={{ backgroundColor: 'primary.main', width: '90%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', borderRadius: '20px', padding: '20px' }}>
                        <Box sx={{ width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'primary.light', borderRadius: '20px', padding: '20px' }}>
                            <Avatar alt="photo" src="" sx={{ width: '200px', height: '200px', }} />
                            <Box>
                                <Box component='h2'>Nikita Shevtsov</Box>
                                <Box component='p'>neketobro@gmail.com</Box>
                            </Box>
                        </Box>
                        <Box sx={{ width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ textAlign: 'center', width: '40%',  backgroundColor: 'primary.light', borderRadius: '20px', padding: '20px' }}>
                                <Box component='h2'>Про себе:</Box>
                                <Box component='p'>Швидко сприймаю нову інформацію, чітко виконую поставленні завдання. Не рідко допомогав колегам для вирішення проблеми, або його питання.</Box>
                            </Box>
                            <Box component='ul' sx={{ textAlign: 'center', width: '40%',  backgroundColor: 'primary.light', borderRadius: '20px', padding: '20px', listStyle: 'none' }}>
                                <Box component='h2'>Професійні вміння:</Box>
                                <Box component='li'>Високомотивований</Box>
                                <Box component='li'>Дисциплінований</Box>
                                <Box component='li'>Гарна комунікабельність</Box>
                                <Box component='li'>Вмію працювати в команді</Box>
                            </Box>
                        </Box>
                        <Box sx={{ width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ textAlign: 'center', width: '40%',  backgroundColor: 'primary.light', borderRadius: '20px', padding: '10px' }}>
                                <Box component='h2'>Досвід роботи:</Box>
                                <Box component='p' >Global Bilgi з 2023 </Box>
                                <Box component='p'>ПРОЕКТ "BRITISH AMERICAN TOBACCO" </Box>
                            </Box>
                            <Box component='ul' sx={{ textAlign: 'center', width: '40%',  backgroundColor: 'primary.light', borderRadius: '20px', padding: '10px' }}>
                                <Box component='h2'>Освіта:</Box>
                                <Box component='p' sx={{ marginBottom: '0' }}>ДДУВС, Бакалавр</Box>
                                <Box component='p' sx={{ marginTop: '0' }}>Рік вступу та закінченя 2022-2025</Box>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        />
    )
}

//                         <Box sx={{ width: '400px', backgroundColor: 'primary.light', borderRadius: '20px', padding: '10px' }}>
//                             <Box sx={{ fontSize: '20px', fontWeight: 'bold' }}>Освіта</Box>
//                             <Box component='p' sx={{ fontSize: '18px', fontWeight: 'bold' }}>ДНІПРОПЕТРОВСЬКИЙ ДЕРЖАВНИЙ УНІВЕРСИТЕТ ВНУТРІШНІХ СПРАВ</Box>
//                             <Box component='p'>Бакалавр</Box>
//                             <Box component='p'>Спеціальність "Правоохоронна діяльність" Рік вступу та закінченя 2022-2025</Box>
//                         </Box>