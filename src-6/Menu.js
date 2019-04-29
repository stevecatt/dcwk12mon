import React, {Component} from 'react';

export class Menu extends Component {


  render() {
    return (
      <div>
        <MenuItem title="Home" />
        {!this.props.isAuthenticated ? <MenuItem title="Login" /> : null }
        {!this.props.isAuthenticated ? <MenuItem title="Register" /> : null }
        {this.props.isAuthenticated ? <MenuItem title="Profile" /> : null }
        {this.props.isAuthenticated ? <MenuItem title="My Products" /> : null }
        {this.props.isAuthenticated ? <MenuItem title="Logout" /> : null }

      </div>
    )
  }

}

export class MenuItem extends Component {
  render() {
    return (
        <li>{this.props.title}</li>
    )
  }
}
