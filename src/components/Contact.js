import React from 'react';
//import ReactDOM from 'react-dom';

export class Contact extends React.Component {
	render() {
		if (this.props.signedIn === false) {
			return <h1>Please sign in</h1>;
		} else {
			return <h1>Hello, {this.props.name}!</h1>;
		}
	}
}