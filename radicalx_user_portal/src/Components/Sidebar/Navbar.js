import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Navbar extends Component {
  handleClick = () => this.props.onClick(this.props.index)

  render() {
    return (
        <Link style={{textDecoration: 'none', outline: 'none'}} to={`/${this.props.name}`}>
          <li
            className={this.props.isActive ? 'SidebarListrowActive' : 'SidebarListrowInnactive'}
            onClick={this.handleClick}>
              <img className='sidebaricon' src = {this.props.icon} alt={this.props.name} />
              <div className='sidebartext'>{this.props.name}</div>
          </li>
        </Link>
    );
  }
}

export default Navbar;