import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Email</h3>
        <input type="text" name="email" value={this.state.value} onChange={this.handleChange}></input>
        <button type="submit">Sign Up</button>
      </form>
    );
  }

  handleChange() {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    console.log('An email was submitted: ' + this.state.value);
    event.preventDefault();
  }
}

ReactDOM.render(<NewsletterForm />, document.querySelector('#root'));
