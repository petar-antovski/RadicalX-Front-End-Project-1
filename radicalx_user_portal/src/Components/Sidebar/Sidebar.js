import React, { Component } from 'react';
import './Sidebar.css';
import Navbar from './Navbar';
import DashboardIcon from '../img/dashboard-3.png';
import ApprentershipsIcon from '../img/medal-star.png';
import InternshipsIcon from '../img/book.png';
import JobsIcon from '../img/briefcase.png';
import SettingsIcon from '../img/setting-2.png';
import Logo from '../img/RadicallX-Black-Logo.png';

class Sidebar extends Component {
  state = {
    activeIndex: null
  }
  handleClick = (index) => this.setState({ activeIndex: index });
  render() {
    const clickables = [
    { icon: DashboardIcon, name: "Dashboard" },
    { icon: ApprentershipsIcon, name: "Apprenterships" },
    { icon: InternshipsIcon, name: "Internships" },
    { icon: JobsIcon, name: "Jobs" },
    { icon: SettingsIcon, name: "Settings" }
  ];
  return (
    <div className='Sidebar'>
      <div className='Sidebartop'>
        <img className='logo' src={Logo} alt="Logo" />
        <ul className="SidebarList">
          { clickables.map((clickable, i) => {
              return <Navbar 
                key={ clickable.name }
                name={ clickable.name }
                icon={ clickable.icon }
                index={ i }
                isActive={ this.state.activeIndex === i }
                onClick={ this.handleClick }
              />
            })
          }
        </ul>
      </div>
      <div className='Sidebarbottom'>
        <div className='rectangle'></div>
        <div className='user'>Adam Scott</div>
      </div>
    </div>
  )
  }
}

export default Sidebar;