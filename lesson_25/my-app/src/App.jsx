import React from 'react';
import { EmoticonCounter } from "./components";
import "./App.css";

export class App extends React.Component {

  render() {
    return (
      <div className='container alert alert-secondary'>
        <EmoticonCounter/>
      </div>
    )
  }
}