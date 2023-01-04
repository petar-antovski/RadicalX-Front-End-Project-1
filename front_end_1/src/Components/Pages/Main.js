import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Dashboard from './Dashboard.js';
import Apprenterships from './Apprenterships.js';
import Internships from './Internships.js';
import Jobs from './Jobs.js';
import Settings from './Settings.js';

const Main = (props) => (
  <div className='Main'>
    <Routes >
      <Route path='/Dashboard' element={<Dashboard/>} />
      <Route path='/Apprenterships' element={<Apprenterships/>} />
      <Route path='/Internships' element={<Internships setVisible = {props.setVisible} />} />
      <Route path='/Jobs' element={<Jobs/>} />
      <Route path='/Settings' element={<Settings/>} />
    </Routes >
  </div>
)

export default Main;