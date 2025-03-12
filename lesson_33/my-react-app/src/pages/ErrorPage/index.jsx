import { Footer, Header, PageLayout } from '../../components';

export function ErrorPage() {
    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <h3>Error 404 not found</h3>
                </div>
            )}
            renderFooter={() => <Footer />}
        />
    )
}