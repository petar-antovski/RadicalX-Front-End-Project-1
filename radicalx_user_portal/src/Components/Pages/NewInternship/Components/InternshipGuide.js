import React, {useContext} from 'react';
import { TopNavBar } from './TopNavBar';
import { StatusBar } from "./StatusBar";
import { Fields } from './Internship_Guide_Components/Fields';
import { Outlet } from 'react-router-dom';
import { NewInternshipContext } from '../NewInternship.js';
import NextIconInnactive from './img/NextIconInnactive.png';
import NextIconActive from './img/NextIconActive.png';
import './InternshipGuide.css';

export const InternshipGuide = () => {
  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  const nextlink = OverviewVisible && ScheduleVisible && ResourcesVisible ? "NewInternship/Surveys" : "NewInternship/InternshipGuide";

  const NextBox = OverviewVisible && ScheduleVisible && ResourcesVisible ? "TopNavBarNextBoxActive" : "TopNavBarNextBoxInnactive";

  const NextText = OverviewVisible && ScheduleVisible && ResourcesVisible ? "TopNavBarNextTextActive" : "TopNavBarNextTextInnactive";

  const NextIcon = OverviewVisible && ScheduleVisible && ResourcesVisible ? NextIconActive : NextIconInnactive;

  return (
    <div className='NewInternship'>
      <TopNavBar nextlink={nextlink} backlink='NewInternship/InternshipDescription' NextBox = {NextBox} NextText = {NextText} NextIcon = {NextIcon}/>
      <StatusBar link='/NewInternship/InternshipGuide' />
      <div className='InternshipGuide'>
        <Fields />
        <Outlet />
      </div>
    </div>
  );
}