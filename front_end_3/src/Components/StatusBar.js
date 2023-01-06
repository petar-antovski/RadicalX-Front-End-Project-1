import {useContext} from 'react';
import { NewInternshipContext } from '../NewInternship.js';
import StatusBarIcon from './img/StatusBarIcon.png';
import StatusBarCompleteIcon from './img/tick-circle.png';
import './StatusBar.css';

export const StatusBar = ({link}) => {
  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  return (
    <nav>
        <ol className="StatusBar">
          <li className={CategoryVisible && DescriptionVisible && LocationVisible && BenefitsVisible && IntroVideoVisible && MentorDetailsVisible && RecommendedRolesVisible && WebLinksResourcesVisible ? "StatusBarItemComplete" : link === "/" ? "StatusBarItemActive" : "StatusBarItemInnactive"}>
            <img className='StatusBarItemicon' src = {CategoryVisible && DescriptionVisible && LocationVisible && BenefitsVisible && IntroVideoVisible && MentorDetailsVisible && RecommendedRolesVisible && WebLinksResourcesVisible ? StatusBarCompleteIcon : StatusBarIcon} alt="StatusBarItemIcon" />
            <div className='StatusBarItemtext'>Internship Description</div>
          </li>
          <li className={OverviewVisible && ScheduleVisible && ResourcesVisible ? "StatusBarItemComplete" : link === "/NewInternship/InternshipGuide" ? "StatusBarItemActive" : "StatusBarItemInnactive"}>
            <img className='StatusBarItemicon' src = {OverviewVisible && ScheduleVisible && ResourcesVisible ? StatusBarCompleteIcon : StatusBarIcon} alt="StatusBarItemIcon" />
            <div className='StatusBarItemtext'>Internship Guide</div>
          </li>
          <li className={Survey1Visible && Survey2Visible ? "StatusBarItemComplete" : link === "/NewInternship/Surveys" ? "StatusBarItemActive" : "StatusBarItemInnactive"}>
            <img className='StatusBarItemicon' src = {Survey1Visible && Survey2Visible ? StatusBarCompleteIcon : StatusBarIcon} alt="StatusBarItemIcon" />
            <div className='StatusBarItemtext'>Surveys</div>
          </li>
          <li className={BasicSettingsVisible && HeroImageVisible ? "StatusBarItemComplete" : link === "/NewInternship/Settings" ? "StatusBarItemActive" : "StatusBarItemInnactive"}>
            <img className='StatusBarItemicon' src = {BasicSettingsVisible && HeroImageVisible ? StatusBarCompleteIcon : StatusBarIcon} alt="StatusBarItemIcon" />
            <div className='StatusBarItemtext'>Settings</div>
          </li>
        </ol>
    </nav>
  );
};
