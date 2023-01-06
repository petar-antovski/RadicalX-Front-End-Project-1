import React from 'react';
import { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Fields.css';
import FieldsIcon from './img/FieldsIcon.png';
import SubFieldsIcon from './img/menu.png';
import tick_circle_active from './img/tick_circle_active.png';
import tick_circle_innactive from './img/tick_circle_innactive.png';
import arrow_right_active from './img/arrow_right_active.png';
import arrow_right_innactive from './img/arrow_right_innactive.png';
import AddMoreIcon from './img/AddMoreIcon.png';
import AddChapterIcon from './img/additem.png';
import { NewInternshipContext } from '../../NewInternship.js'

export const Fields = () => {
  const location = useLocation();

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  return (
    <div className='InternshipGuideFields'>
      <ul className='InternshipGuideFields'>
        <Link style={{textDecoration: 'none', outline: 'none'}} to={'/NewInternship/InternshipGuide/Overview'}>
          <li className='InternshipGuideFieldsRow'>
            <img className='InternshipGuideFieldsicon' src = {FieldsIcon} alt="Fieldsicon" />
            <div className={location.pathname === '/NewInternship/InternshipGuide/Overview' ? 'InternshipGuideFieldsRowActive' : 'InternshipGuideFieldsRowInnactive'}>
              <div className='InternshipGuideFieldsRowHeading'> 
                <div className='InternshipGuideFieldsRowHeadingtext'>Overview</div>
                <img className='InternshipGuidetick-circle' src={OverviewVisible ? tick_circle_active : tick_circle_innactive} alt={OverviewVisible ? 'tick_circle_active' : 'tick_circle_innactive'} />
                <img className='InternshipGuidearrow-right' src={location.pathname === '/NewInternship/InternshipGuide/Overview' ? arrow_right_active : arrow_right_innactive} alt={location.pathname === '/NewInternship/InternshipGuide/Overview' ? 'arrow_right_active' : 'arrow_right_innactive'} />
              </div>
              <ul className='InternshipGuideFieldsSubRows'>
                <li className='InternshipGuideFieldsSubRow'>
                  <img className='InternshipGuideSubFieldsicon' src = {SubFieldsIcon} alt="SubFieldsIcon" />
                  <div className='InternshipGuideFieldsSubRowtextbox'>Brief</div>
                </li>
                <li className='InternshipGuideFieldsSubRow'>
                  <img className='InternshipGuideSubFieldsicon' src = {SubFieldsIcon} alt="SubFieldsIcon" />
                  <div className='InternshipGuideFieldsSubRowtextbox'>Requirements</div>
                </li>
                <li className='InternshipGuideFieldsSubRow'>
                  <img className='InternshipGuideSubFieldsicon' src = {SubFieldsIcon} alt="SubFieldsIcon" />
                  <div className='InternshipGuideFieldsSubRowtextbox'>Milestones</div>
                </li>
                <li className='InternshipGuideFieldsSubAddMoreRow'>
                  <img className='InternshipGuideSubAddMoreicon' src = {AddMoreIcon} alt="AddMoreIcon" />
                  <div className='InternshipGuideFieldsSubRowAddMoretextbox'>Add More</div>
                </li>
              </ul>
            </div>
          </li>
        </Link>
        <Link style={{textDecoration: 'none', outline: 'none'}} to={'/NewInternship/InternshipGuide/Schedule'}>
          <li className='InternshipGuideFieldsRow'>
            <img className='InternshipGuideFieldsicon' src = {FieldsIcon} alt="Fieldsicon" />
            <div className={location.pathname === '/NewInternship/InternshipGuide/Schedule' ? 'InternshipGuideFieldsRowActive' : 'InternshipGuideFieldsRowInnactive'}>
              <div className='InternshipGuideFieldsRowHeading'> 
                <div className='InternshipGuideFieldsRowHeadingtext'>Schedule</div>
                <img className='InternshipGuidetick-circle' src={ScheduleVisible ? tick_circle_active : tick_circle_innactive} alt={ScheduleVisible ? 'tick_circle_active' : 'tick_circle_innactive'} />
                <img className='InternshipGuidearrow-right' src={location.pathname === '/NewInternship/InternshipGuide/Schedule' ? arrow_right_active : arrow_right_innactive} alt={location.pathname === '/NewInternship/InternshipGuide/Schedule' ? 'arrow_right_active' : 'arrow_right_innactive'} />
              </div>
              <ul className='InternshipGuideFieldsSubRows'>
                <li className='InternshipGuideFieldsSubRow'>
                  <img className='InternshipGuideSubFieldsicon' src = {SubFieldsIcon} alt="SubFieldsIcon" />
                  <div className='InternshipGuideFieldsSubRowtextbox'>Duration</div>
                </li>
                <li className='InternshipGuideFieldsSubRow'>
                  <img className='InternshipGuideSubFieldsicon' src = {SubFieldsIcon} alt="SubFieldsIcon" />
                  <div className='InternshipGuideFieldsSubRowtextbox'>Timeline</div>
                </li>
                <li className='InternshipGuideFieldsSubRow'>
                  <img className='InternshipGuideSubFieldsicon' src = {SubFieldsIcon} alt="SubFieldsIcon" />
                  <div className='InternshipGuideFieldsSubRowtextbox'>Deliverables</div>
                </li>
                <li className='InternshipGuideFieldsSubAddMoreRow'>
                  <img className='InternshipGuideSubAddMoreicon' src = {AddMoreIcon} alt="AddMoreIcon" />
                  <div className='InternshipGuideFieldsSubRowAddMoretextbox'>Add More</div>
                </li>
              </ul>
            </div>
          </li>
        </Link>
        <Link style={{textDecoration: 'none', outline: 'none'}} to={'/NewInternship/InternshipGuide/Resources'}>
          <li className='InternshipGuideFieldsRow'>
            <img className='InternshipGuideFieldsicon' src = {FieldsIcon} alt="Fieldsicon" />
            <div className={location.pathname === '/NewInternship/InternshipGuide/Resources' ? 'InternshipGuideFieldsRowActive' : 'InternshipGuideFieldsRowInnactive'}>
              <div className='InternshipGuideFieldsRowHeading'> 
                <div className='InternshipGuideFieldsRowHeadingtext'>Resources</div>
                <img className='InternshipGuidetick-circle' src={ResourcesVisible ? tick_circle_active : tick_circle_innactive} alt={ResourcesVisible ? 'tick_circle_active' : 'tick_circle_innactive'} />
                <img className='InternshipGuidearrow-right' src={location.pathname === '/NewInternship/InternshipGuide/Resources' ? arrow_right_active : arrow_right_innactive} alt={location.pathname === '/NewInternship/InternshipGuide/Resources' ? 'arrow_right_active' : 'arrow_right_innactive'} />
              </div>
              <ul className='InternshipGuideFieldsSubRows'>
                <li className='InternshipGuideFieldsSubRow'>
                  <img className='InternshipGuideSubFieldsicon' src = {SubFieldsIcon} alt="SubFieldsIcon" />
                  <div className='InternshipGuideFieldsSubRowtextbox'>Curated Resources</div>
                </li>
                <li className='InternshipGuideFieldsSubRow'>
                  <img className='InternshipGuideSubFieldsicon' src = {SubFieldsIcon} alt="SubFieldsIcon" />
                  <div className='InternshipGuideFieldsSubRowtextbox'>Events</div>
                </li>
                <li className='InternshipGuideFieldsSubAddMoreRow'>
                  <img className='InternshipGuideSubAddMoreicon' src = {AddMoreIcon} alt="AddMoreIcon" />
                  <div className='InternshipGuideFieldsSubRowAddMoretextbox'>Add More</div>
                </li>
              </ul>
            </div>
          </li>
        </Link>
        <Link style={{textDecoration: 'none', outline: 'none'}} to={'/NewInternship/InternshipGuide/AddChapter'}>
          <li className='InternshipGuideAddChapterRow'>
            <div className='InternshipGuideAddChapterRowBox'>
              <img className='InternshipGuideAddChapterRowIcon' src = {AddChapterIcon} alt='Add More Icon' />
              <div className='InternshipGuideAddChapterRowtext'>Add Chapter</div>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  )
}