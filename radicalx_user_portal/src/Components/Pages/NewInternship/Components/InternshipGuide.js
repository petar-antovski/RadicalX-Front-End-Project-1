import React from 'react';
import { TopNavBar } from './TopNavBar';
import { StatusBar } from "./StatusBar";
import './InternshipGuide.css';

export const InternshipGuide = () => {
  return (
    <div className='NewInternship'>
      <TopNavBar nextlink='NewInternship/Surveys' backlink='NewInternship/InternshipDescription'/>
      <StatusBar link='/NewInternship/InternshipGuide' />
      <div className='InternshipGuide'>
        <h1>this is the Internship Guide tab</h1>
      </div>
    </div>
  );
}