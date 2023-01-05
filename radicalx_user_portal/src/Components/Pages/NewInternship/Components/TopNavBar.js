import { Link } from 'react-router-dom';
import BackIcon from './img/BackIcon.png';
import NextIconInnactive from './img/NextIconInnactive.png';
import NextIconActive from './img/NextIconActive.png';
import {useContext} from 'react';
import { NewInternshipContext } from '../NewInternship.js'

import './TopNavBar.css';

export const TopNavBar = (props) => {
  const removeElementOnBack = () => (
    props.backlink === 'Internships' ? props.setVisible((prev) => !prev) : null
  );

  const removeElementOnFinish = () => (
    props.nextlink === 'Internships' ? props.setVisible((prev) => !prev) : null
  );

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible} = useContext(NewInternshipContext)

  const NextBox = CategoryVisible && DescriptionVisible && LocationVisible && BenefitsVisible && IntroVideoVisible && MentorDetailsVisible && RecommendedRolesVisible && WebLinksResourcesVisible ? "NextBoxActive" : "NextBoxInnactive";

  const NextText = CategoryVisible && DescriptionVisible && LocationVisible && BenefitsVisible && IntroVideoVisible && MentorDetailsVisible && RecommendedRolesVisible && WebLinksResourcesVisible ? "NextTextActive" : "NextTextInnactive";

  const NextIcon = CategoryVisible && DescriptionVisible && LocationVisible && BenefitsVisible && IntroVideoVisible && MentorDetailsVisible && RecommendedRolesVisible && WebLinksResourcesVisible ? NextIconActive : NextIconInnactive;


  return (
    <div className='TopNavBar'>
      <div className='Back'>
        <Link style={{textDecoration: 'none', outline: 'none'}} className='BackBox' to={`/${props.backlink}`}  onClick = {removeElementOnBack}>
          <img className='BackIcon' src = {BackIcon} alt="BackIcon" />
          <div className='BackText'>Back</div>
        </Link>
      </div>
      <div className='Title'>
        <div className='TitleBox'>
          <div className='TitleText'>Add New Internship</div>
        </div>
      </div>
      <div className='Next'>
        <Link style={{textDecoration: 'none', outline: 'none'}} className={NextBox} to={`/${props.nextlink}`}  onClick = {removeElementOnFinish}>
          <div className={NextText}>{props.backlink === "NewInternship/Surveys" ? "Publish Internship" : "Continue to Next Step"}</div>
          <img className='NextIcon' src = {NextIcon} alt="NextIcon" />
        </Link>
      </div>
    </div>
  );
}