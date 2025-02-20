import { Footer, Header, PageLayout } from '../../components';

export function AboutMePage() {

    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <p>About Me Page</p>
                </div>
            )}
            renderFooter={() => <Footer />}
        />
    )
}