import { useState, useContext, useEffect } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js';
import addmore from '../img/add-square.png';

export const Survey2 = () => {
  const [survey2, setSurvey2] = useState('');

  const handleChange = event => {
    setSurvey2(event.target.value);
  };

  useEffect(() => {
    survey2.trim().length !== 0 ? setSurvey2Visible(true) : setSurvey2Visible(false);
  }, [survey2]);

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  return (
    <Form>
      <div className='SurveyForm'>
        <label>Survey 2</label>
        <div className='SurveyFormFields'>
          <input name='url' value = {survey2} className='SurveyFormInput' placeholder = 'Question' onChange={handleChange}/>
          <div className='SurveyFormAddQuestion'>
            <img src={addmore} />
            Add Question
          </div>
        </div>
      </div>
    </Form>
  )
}