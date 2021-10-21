import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      status: 'pause'
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleFaceClick = this.handleFaceClick.bind(this);
    this.watchStart = this.watchStart.bind(this);
    this.tick = this.tick.bind(this);
  }

  render() {
    if (this.state.status === 'pause') {
      return (
    <div className="holder">
      <div className="circle" onClick={this.handleFaceClick}>
        <h1>{this.state.counter}</h1>
      </div>
        <i className="play fas fa-play" onClick={this.handleClick}></i>
    </div>);
    } else {
      return (
        <div className="holder">
          <div className="circle">
            <h1>{this.state.counter}</h1>
          </div>
          <i className="pause fas fa-pause" onClick={this.handleClick}></i>
        </div>);
    }
  }

  handleFaceClick() {
    if (this.state.status === 'pause') {
      this.setState(prevState => {
        return {
          counter: 0
        };
      });
    }
  }

  handleClick() {
    if (this.state.status === 'pause') {
      this.watchStart();
      this.setState(prevState => {
        return {
          status: 'play'
        };
      });
    } else {
      clearInterval(this.timerID);
      this.setState(prevState => {
        return { status: 'pause' };
      });
    }
  }

  watchStart() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  }
}

export default Stopwatch;
