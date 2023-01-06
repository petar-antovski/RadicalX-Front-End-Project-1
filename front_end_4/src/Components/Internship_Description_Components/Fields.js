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
  { name: "Category", link: "NewInternship/InternshipDescription/Category", tick: CategoryVisible },
  { name: "Description", link: "NewInternship/InternshipDescription/Description", tick: DescriptionVisible },
  { name: "Location", link: "NewInternship/InternshipDescription/Location", tick: LocationVisible },
  { name: "Benefits", link: "NewInternship/InternshipDescription/Benefits", tick: BenefitsVisible },
  { name: "Intro Video", link: "NewInternship/InternshipDescription/IntroVideo", tick: IntroVideoVisible },
  { name: "Mentor Details", link: "NewInternship/InternshipDescription/MentorDetails", tick: MentorDetailsVisible },
  { name: "Recommended Roles", link: "NewInternship/InternshipDescription/RecommendedRoles", tick: RecommendedRolesVisible },
  { name: "Web Links & Resources", link: "NewInternship/InternshipDescription/WebLinksResources", tick: WebLinksResourcesVisible }
  ];
  return (
    <div className='InternshipDescriptionFields'>
      <ul className='InternshipDescriptionFields'>
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
        <Link style={{textDecoration: 'none', outline: 'none'}} to={'/NewInternship/InternshipDescription/AddMore'}>
          <li className='InternshipDescriptionAddMoreRow' onClick={handleClick}>
            <div className='InternshipDescriptionAddMoreRowBox'>
              <img className='InternshipDescriptionAddMoreRowIcon' src = {AddMoreIcon} alt='Add More Icon' />
              <div className='InternshipDescriptionAddMoreRowtext'>Add More</div>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  )
}