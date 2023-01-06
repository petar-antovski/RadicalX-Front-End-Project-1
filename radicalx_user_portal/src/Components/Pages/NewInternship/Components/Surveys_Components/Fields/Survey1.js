import { useState, useContext, useEffect } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js';
import addmore from '../img/add-square.png';

export const Survey1 = () => {
  const [survey1, setSurvey1] = useState('');

  const handleChange = event => {
    setSurvey1(event.target.value);
  };

  useEffect(() => {
    survey1.trim().length !== 0 ? setSurvey1Visible(true) : setSurvey1Visible(false);
  }, [survey1]);

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  return (
    <Form>
      <div className='SurveyForm'>
        <label>Survey 1</label>
        <div className='SurveyFormFields'>
          <input name='url' value = {survey1} className='SurveyFormInput' placeholder = 'Question' onChange={handleChange}/>
          <div className='SurveyFormAddQuestion'>
            <img src={addmore} />
            Add Question
          </div>
        </div>
      </div>
    </Form>
  )
}