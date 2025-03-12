import { createElement } from 'react';
import { Footer, Header, PageLayout, ErrorBoundary } from '../../components';
import { useLoaderData } from 'react-router';
import './Contacts.scss';

function CreateListUser({ users }) {
    return createElement(
        'div',
        { className: 'user-list' },
        ...users.map(user =>
            createElement('div', { key: user.id, className: 'user-card' },
                createElement('p', null, `User name: ${user.first_name} ${user.last_name}`),
                createElement('p', null, `User email: ${user.email}`)
            )
        )
    );
}

export function ContactsPage() {
    const users = useLoaderData();
    
    return (
        <PageLayout
            renderHeader={() => <Header />}
            renderMain={() => (
                <div>
                    <p>Contacts Page</p>
                    <ErrorBoundary>
                        <CreateListUser users={users} />
                    </ErrorBoundary>
                </div>
            )}
            renderFooter={() => <Footer />}
        />
    );
}
