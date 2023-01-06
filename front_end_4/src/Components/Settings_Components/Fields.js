import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Fields.css';
import FieldsLinks from './FieldsLinks';
import AddMoreIcon from './img/AddMoreIcon.png';
import { NewInternshipContext } from '../../NewInternship.js'

export const Fields = () => {
  const [activeIndex, setactiveIndex] = useState(null);
  const handleClick = (index) => setactiveIndex(index);  
  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)
  const clickables = [
  { name: "Basic Settings", link: "NewInternship/Settings/BasicSettings", tick: BasicSettingsVisible },
  { name: "Hero Image", link: "NewInternship/Settings/HeroImage", tick: HeroImageVisible },
  ];
  return (
    <div className='SettingsFields'>
      <ul className='SettingsFields'>
        { clickables.map((clickable, i) => {
            return <FieldsLinks 
            key={ clickable.name }
            name={ clickable.name }
            link={ clickable.link }
            tick={ clickable.tick }
            index={ i }
            isActive={ activeIndex === i }
            onClick={ handleClick }
            />
        })}
      </ul>
    </div>
  )
}