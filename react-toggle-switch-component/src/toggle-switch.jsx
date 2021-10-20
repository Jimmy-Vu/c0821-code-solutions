import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchPostition: 'OFF'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.switchPostition === 'OFF') {
      return (
        <div className="toggle-holder" onClick={this.handleClick}>
      <div className="switch-holder off" >
        <div className="switch"></div>
      </div>
      <h3>OFF</h3>
    </div>);
    } else {
      return (
        <div className="toggle-holder" onClick={this.handleClick}>
        <div className="switch-holder on">
          <div className="switch"></div>
        </div>
        <h3>ON</h3>
      </div>);
    }
  }

  handleClick() {
    if (this.state.switchPostition === 'OFF') {
      this.setState(prevState => {
        return { switchPostition: 'ON' };
      });
    } else {
      this.setState(prevState => {
        return { switchPostition: 'OFF' };
      });
    }
  }
}

export default ToggleSwitch;
