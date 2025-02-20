import { Footer, Header, PageLayout } from '../../components';

export function AboutMePage() {

    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <p>About Me Page</p>
                    <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam, alias amet, adipisci quidem nulla ad ipsum molestiae ab suscipit consequuntur! Accusamus culpa, ab aut ipsum unde voluptate placeat ullam?</i>
                </div>
            )}
            renderFooter={() => <Footer />}
        />
    )
}