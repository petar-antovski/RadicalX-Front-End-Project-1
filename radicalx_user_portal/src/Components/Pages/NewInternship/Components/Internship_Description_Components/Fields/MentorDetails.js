import { useState, useContext, useEffect } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js';
import profileimage from '../img/profileimage.png';

export const MentorDetails = () => {
  const [name, setName] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const [email, setEmail] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const [linkedin, setLinkedin] = useState('');

  const handleLinkedinChange = event => {
    setLinkedin(event.target.value);
  };

  useEffect(() => {
    name.trim().length !== 0 && email.trim().length !== 0 ? setMentorDetailsVisible(true) : setMentorDetailsVisible(false);
  }, [name, email]);

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  return (
    <Form>
      <div className='MentorDetails'>
        <label>Mentor Details</label>
        <div className='MentorDetailsImage'>
          <div className='MentorDetailsImagePhoto'></div>
          <img className='MentorDetailsImageCorner' src={profileimage}/>
        </div>
        <div className='MentorDetailsNameEmail'>
          <input name='name' value = {name} className='MentorDetailsName' placeholder = 'Name' onChange={handleNameChange}/>
          <input name='email' value = {email} className='MentorDetailsEmail' placeholder = 'Email address' onChange={handleEmailChange}/>
        </div>
        <input name='linkedin' value = {linkedin} className='MentorDetailsLinkedin' placeholder = 'LinkedIn URL (optional)' onChange={handleLinkedinChange}/>
      </div>
    </Form>
  )
}