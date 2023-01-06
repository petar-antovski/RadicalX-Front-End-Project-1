import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom'
import { TopNavBar } from './TopNavBar';
import { StatusBar } from "./StatusBar";
import { Fields } from './Surveys_Components/Fields';
import { NewInternshipContext } from '../NewInternship.js';
import NextIconInnactive from './img/NextIconInnactive.png';
import NextIconActive from './img/NextIconActive.png';
import './Surveys.css';

export const Surveys = () => {
  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  const nextlink = Survey1Visible && Survey2Visible ? "NewInternship/Settings" : "NewInternship/Surveys";

  const NextBox = Survey1Visible && Survey2Visible ? "TopNavBarNextBoxActive" : "TopNavBarNextBoxInnactive";

  const NextText = Survey1Visible && Survey2Visible ? "TopNavBarNextTextActive" : "TopNavBarNextTextInnactive";

  const NextIcon = Survey1Visible && Survey2Visible ? NextIconActive : NextIconInnactive;

  return (
    <div className='NewInternship'>
      <TopNavBar nextlink={nextlink} backlink='NewInternship/InternshipGuide' NextBox = {NextBox} NextText = {NextText} NextIcon = {NextIcon}/>
      <StatusBar link='/NewInternship/Surveys' />
      <div className='Surveys'>
        <Fields />
        <Outlet />
      </div>
    </div>
  );
}