import { Footer, Header, PageLayout } from '../../components';


export function TodosPage() {
    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <h4>Todos</h4>
                </div>
            )}
            renderFooter={() => <Footer />}
        />
    )
}