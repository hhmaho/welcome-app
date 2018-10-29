import React from 'react';

export class Welcome extends React.Component {
  render() {
    if (this.props.name === 'Marianne') {
      return (
        <h2>
          Admin
      	</h2>
      );
    } else {
      return (
        <h2>
          User
      	</h2>
      );
    }
  }
}
