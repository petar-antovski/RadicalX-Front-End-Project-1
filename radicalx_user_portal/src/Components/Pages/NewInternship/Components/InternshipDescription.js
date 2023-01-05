import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom'
import { TopNavBar } from './TopNavBar';
import { StatusBar } from "./StatusBar";
import { Fields } from './Internship_Description_Components/Fields';
import { NewInternshipContext } from '../NewInternship.js'
import './InternshipDescription.css';

export const InternshipDescription = (props) => {
  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible} = useContext(NewInternshipContext)

  const nextlink = CategoryVisible && DescriptionVisible && LocationVisible && BenefitsVisible && IntroVideoVisible && MentorDetailsVisible && RecommendedRolesVisible && WebLinksResourcesVisible ? "NewInternship/InternshipGuide" : "NewInternship/InternshipDescription";

  return (
    <div className='NewInternship'>
      <TopNavBar nextlink={nextlink} backlink='Internships'  setVisible = {props.setVisible} />
      <StatusBar link='/NewInternship/InternshipDescription' />
      <div className='InternshipDescription'>
        <Fields />
        <Outlet />
      </div>
    </div>
  );
}