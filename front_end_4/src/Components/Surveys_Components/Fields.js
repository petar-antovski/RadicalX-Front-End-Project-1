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
  { name: "Survey 1", link: "NewInternship/Surveys/Survey1", tick: Survey1Visible },
  { name: "Survey 2", link: "NewInternship/Surveys/Survey2", tick: Survey2Visible },
  ];
  return (
    <div className='SurveysFields'>
      <ul className='SurveysFields'>
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
        })
        }
        <Link style={{textDecoration: 'none', outline: 'none'}} to={'AddSurvey'}>
          <li className='SurveysAddSurveyRow' onClick={handleClick}>
            <div className='SurveysAddSurveyRowBox'>
              <img className='SurveysAddSurveyRowIcon' src = {AddMoreIcon} alt='Add Survey Icon' />
              <div className='SurveysAddSurveyRowtext'>Add Survey</div>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  )
}