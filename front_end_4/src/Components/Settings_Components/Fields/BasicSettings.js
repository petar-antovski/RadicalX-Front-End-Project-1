import { useState, useContext, useEffect } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js';
import addmore from '../img/add-square.png';

export const BasicSettings = () => {
  const [basicsettings, setBasicSettings] = useState('');

  const handleChange = event => {
    setBasicSettings(event.target.value);
  };

  useEffect(() => {
    basicsettings.trim().length !== 0 ? setBasicSettingsVisible(true) : setBasicSettingsVisible(false);
  }, [basicsettings]);

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  return (
    <Form>
      <div className='SettingsForm'>
        <div className='SettingsURLInput'>
          <label>Internship URL</label>
          <input name='url' value = {basicsettings} className='SettingsFormInput' placeholder = 'radicalx-internship-url' onChange={handleChange}/>
        </div>
        <div className='SettingsAccess'>
          <label>Access</label>
          <label className='SettingCheckBoxLabels'>
            <input type="checkbox" />
            Private Internship
          </label>
          <label className='SettingCheckBoxLabels'>
            <input type="checkbox" />
            Hidden Internship
          </label>
        </div>
        <div className='SettingsSecurity'>
          <label>Security</label>
          <label className='SettingCheckBoxLabels'>
            <input type="checkbox" />
            Disable Text Copying
          </label>
        </div>
      </div>
    </Form>
  )
}