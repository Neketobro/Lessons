import { Footer, Header, PageLayout } from '../../components';
import { useRouteLoaderData } from 'react-router-dom';

export function MainPage() {
    const data = useRouteLoaderData("root");

    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <h1>Home Page</h1>
                </div>
            )}
            renderFooter={() => <Footer />}
        />
    )
}