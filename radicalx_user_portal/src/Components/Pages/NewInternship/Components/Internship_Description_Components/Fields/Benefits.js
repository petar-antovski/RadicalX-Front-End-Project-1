import { useState, useContext, useEffect } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js'

export const Benefits = () => {
  const [benefits, setBenefits] = useState('');

  const handleChange = event => {
    setBenefits(event.target.value);
  };

  useEffect(() => {
    benefits.trim().length !== 0 ? setBenefitsVisible(true) : setBenefitsVisible(false);
  }, [benefits]);

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  return (
    <Form>
      <div className='Benefits'>
        <label>Benefits</label>
        <textarea name='benefits' value = {benefits} className='BenefitsText' placeholder = 'Description' onChange={handleChange}/>
      </div>
    </Form>
  )
}