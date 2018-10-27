import React from 'react';
import ReactDOM from 'react-dom';
import { Contact } from './components/Contact';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello, "Welcome" "Test"
        </h1>
        <Greeting name="Marianne" signedIn={true}/>
        <article>
          News: Welcome world! 
        </article>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));