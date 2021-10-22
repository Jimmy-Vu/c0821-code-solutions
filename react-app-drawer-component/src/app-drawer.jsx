import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawer: 'closed'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.drawer === 'closed') {
      return <i className="fas fa-bars font-size-30" onClick={this.handleClick}></i>;
    } else {
      return (
      <div className="drawer-opened">
        <div className="shade" onClick={this.handleClick}></div>
        <div className="menu-holder">
          <h2>Menu</h2>
          <nav className="nav-listing">
              <li className="margin-bottom-10"><a href="#" className="font-size-20" onClick={this.handleClick}>About</a></li>
              <li className="margin-bottom-10"><a href="#" className="font-size-20" onClick={this.handleClick}>Get Started</a></li>
              <li className="margin-bottom-10"><a href="#" className="font-size-20" onClick={this.handleClick}>Sign In</a></li>
          </nav>
        </div>
      </div>
      );
    }
  }

  handleClick() {
    if (this.state.drawer === 'closed') {
      this.setState(prevState => {
        return { drawer: 'opened' };
      });
    } else {
      this.setState(prevState => {
        return { drawer: 'closed' };
      });
    }
  }
}

export default AppDrawer;
