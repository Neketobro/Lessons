import { Footer, Header, PageLayout } from '../../components';

export function ErrorPage() {
    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <h1>EROOR PAGE</h1>
                </div>
            )}
            renderFooter={() => <Footer />}
        />
    )
}