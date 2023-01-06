import React, {useContext} from 'react';
import { TopNavBar } from './TopNavBar';
import { StatusBar } from "./StatusBar";
import { Fields } from './Settings_Components/Fields';
import { Outlet } from 'react-router-dom';
import { NewInternshipContext } from '../NewInternship.js';
import NextIconInnactive from './img/NextIconInnactive.png';
import NextIconActive from './img/NextIconActive.png';
import './Settings.css';

export const Settings = (props) => {
  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  const nextlink = BasicSettingsVisible && HeroImageVisible ? "" : "NewInternship/Settings";

  const NextBox = BasicSettingsVisible && HeroImageVisible ? "TopNavBarNextBoxActive" : "TopNavBarNextBoxInnactive";

  const NextText = BasicSettingsVisible && HeroImageVisible ? "TopNavBarNextTextActive" : "TopNavBarNextTextInnactive";

  const NextIcon = BasicSettingsVisible && HeroImageVisible ? NextIconActive : NextIconInnactive;

  return (
    <div className='NewInternship'>
      <TopNavBar nextlink={nextlink} backlink='NewInternship/Surveys' NextBox = {NextBox} NextText = {NextText} NextIcon = {NextIcon} setVisible = {props.setVisible} />
      <StatusBar link='/NewInternship/Settings' />
      <div className='Settings'>
        <Fields />
        <Outlet />
      </div>
    </div>
  );
}