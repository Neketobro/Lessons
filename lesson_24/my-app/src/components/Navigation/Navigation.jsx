import { Component } from "react";
import "./Navigation.css";

export class Nav extends Component {
    render() {
        return (
            <div className="navigation-container alert alert-light">
                <div className="navigation-box">
                    <span>
                        <b>https://swapi.dev/api/</b>
                    </span>
                    <span>people/1/</span>
                </div>
                <span>
                    <button>Get info</button>
                </span>
            </div>
        )
    }
}

// Text
// https://swapi.dev/api/
// people/1/

// button
// Get info