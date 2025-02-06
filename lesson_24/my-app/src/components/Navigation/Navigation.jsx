import { Component } from "react";
import "./Navigation.css";

export class Nav extends Component {
    render() {
        return (
            <div className="container-navigation alert alert-light">
                <span className="wrapper-navigation">
                    <span>https://swapi.dev/api/</span>
                    <span>people/1/</span>
                </span>
                <span>
                    <button>Get info</button>
                </span>
            </div>
        )
    }
}