import React from 'react';
import { TopNavBar } from './TopNavBar';
import { StatusBar } from "./StatusBar";
import './Settings.css';

export const Settings = (props) => {
  return (
    <div className='NewInternship'>
      <TopNavBar nextlink='Internships' backlink='NewInternship/Surveys'  setVisible = {props.setVisible} />
      <StatusBar link='/NewInternship/Settings' />
      <div className='Settings'>
        <h1>this is the Settings tab</h1>
      </div>
    </div>
  );
}