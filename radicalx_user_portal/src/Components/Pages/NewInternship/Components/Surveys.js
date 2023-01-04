import React from 'react';
import { TopNavBar } from './TopNavBar';
import { StatusBar } from "./StatusBar";
import './Surveys.css';

export const Surveys = () => {
  return (
    <div className='NewInternship'>
      <TopNavBar nextlink='NewInternship/Settings' backlink='NewInternship/InternshipGuide'/>
      <StatusBar link='/NewInternship/Surveys' />
      <div className='Surveys'>
        <h1>this is the Surveys tab</h1>
      </div>
    </div>
  );
}