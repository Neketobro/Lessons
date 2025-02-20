import { Footer, Header, PageLayout } from '../../components';
import { useLoaderData } from 'react-router';

export function ContactsPage() {
    const user = useLoaderData();

    console.log(user);

    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <p>Contacts Page</p>
                    <p>
                        <b>User name:</b> {user[0].first_name} {user[0].last_name} 
                    </p>
                    <p>
                        <b>User email:</b> {user[0].email}
                    </p>
                </div>
            )}
            renderFooter={() => <Footer />}
        />
    )
}