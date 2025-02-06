import { Component } from "react";
import { Header, Nav, Main } from "./components";

export class App extends Component {
    render() {
        const padding = {
            paddingInline: 20
        }
        return (
            <body style={padding}>
                <header>
                    <Header />
                </header>
                <main>
                    <Nav />
                    <Main />
                </main>
            </body>
        )
    }
}