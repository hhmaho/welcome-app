import React from 'react';
//import ReactDOM from 'react-dom';
import { Contact } from './components/Contact';

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          "Hello world"
        </h1>
        <Contact name="Marianne" signedIn={true} />
        <article>
          News: Today!
        </article>
      </div>
    );
  }
}

