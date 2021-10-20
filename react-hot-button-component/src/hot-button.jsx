import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.counter < 3) {
      return <button onClick={this.handleClick}>Hot Button {this.state.counter}</button>;
    } else if (this.state.counter >= 3 && this.state.counter < 6) {
      return <button className="dark-purple" onClick={this.handleClick}>Hot Button {this.state.counter}</button>;
    } else if (this.state.counter >= 6 && this.state.counter < 9) {
      return <button className="light-purple" onClick={this.handleClick}>Hot Button {this.state.counter}</button>;
    } else if (this.state.counter >= 9 && this.state.counter < 12) {
      return <button className="orange-red" onClick={this.handleClick}>Hot Button {this.state.counter}</button>;
    } else if (this.state.counter >= 12 && this.state.counter < 15) {
      return <button className="orange" onClick={this.handleClick}>Hot Button {this.state.counter}</button>;
    } else if (this.state.counter >= 15 && this.state.counter < 18) {
      return <button className="yellow" onClick={this.handleClick}>Hot Button {this.state.counter}</button>;
    } else {
      return <button className="white" onClick={this.handleClick}>Hot Button {this.state.counter}</button>;
    }
  }

  handleClick() {
    this.setState(prevState => {
      return prevState.counter++;
    });
  }
}
