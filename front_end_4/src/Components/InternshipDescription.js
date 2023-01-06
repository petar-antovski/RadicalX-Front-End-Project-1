import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom'
import { TopNavBar } from './TopNavBar';
import { StatusBar } from "./StatusBar";
import { Fields } from './Internship_Description_Components/Fields';
import { NewInternshipContext } from '../NewInternship.js';
import NextIconInnactive from './img/NextIconInnactive.png';
import NextIconActive from './img/NextIconActive.png';
import './InternshipDescription.css';

export const InternshipDescription = (props) => {
  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  const nextlink = CategoryVisible && DescriptionVisible && LocationVisible && BenefitsVisible && IntroVideoVisible && MentorDetailsVisible && RecommendedRolesVisible && WebLinksResourcesVisible ? "NewInternship/InternshipGuide" : "";

  const NextBox = CategoryVisible && DescriptionVisible && LocationVisible && BenefitsVisible && IntroVideoVisible && MentorDetailsVisible && RecommendedRolesVisible && WebLinksResourcesVisible ? "TopNavBarNextBoxActive" : "TopNavBarNextBoxInnactive";

  const NextText = CategoryVisible && DescriptionVisible && LocationVisible && BenefitsVisible && IntroVideoVisible && MentorDetailsVisible && RecommendedRolesVisible && WebLinksResourcesVisible ? "TopNavBarNextTextActive" : "TopNavBarNextTextInnactive";

  const NextIcon = CategoryVisible && DescriptionVisible && LocationVisible && BenefitsVisible && IntroVideoVisible && MentorDetailsVisible && RecommendedRolesVisible && WebLinksResourcesVisible ? NextIconActive : NextIconInnactive;

  return (
    <div className='NewInternship'>
      <TopNavBar nextlink={nextlink} backlink='' setVisible = {props.setVisible} NextBox = {NextBox} NextText = {NextText} NextIcon = {NextIcon}/>
      <StatusBar link='/' />
      <div className='InternshipDescription'>
        <Fields />
        <Outlet />
      </div>
    </div>
  );
}