import React from 'react';
import { Outlet } from 'react-router-dom'
import { TopNavBar } from './TopNavBar';
import { StatusBar } from "./StatusBar";
import { Fields } from './Internship_Description_Components/Fields';
import './InternshipDescription.css';


export const InternshipDescription = (props) => {
  return (
    <div className='NewInternship'>
      <TopNavBar nextlink='NewInternship/InternshipGuide' backlink='' />
      <StatusBar link='/' />
      <div className='InternshipDescription'>
        <Fields />
        <Outlet />
      </div>
    </div>
  );
}