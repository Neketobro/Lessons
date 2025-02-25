import { Footer, Header, PageLayout } from '../../components';


export function CounterPage() {
    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <h4>Counter</h4>
                </div>
            )}
            renderFooter={() => <Footer />}
        />
    )
}