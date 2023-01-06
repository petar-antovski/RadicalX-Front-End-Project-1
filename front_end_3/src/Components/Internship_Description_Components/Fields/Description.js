import { useState, useContext, useEffect } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js'

export const Description = () => {
  const [description, setDescription] = useState('');

  const handleChange = event => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    description.trim().length !== 0 ? setDescriptionVisible(true) : setDescriptionVisible(false);
  }, [description]);

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  return (
    <Form>
      <div className='Description'>
        <label>Description</label>
        <textarea name='description' value = {description} className='DescriptionText' placeholder = 'Description' onChange={handleChange} />
      </div>
    </Form>
  )
}