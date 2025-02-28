import { Footer, Header, PageLayout } from '../../components';

export function MainPage() {

    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <p>MainPage</p>
                </div>
            )}
            renderFooter={() => <Footer />}
        />
    )
}