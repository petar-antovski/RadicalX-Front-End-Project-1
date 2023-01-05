import { useState, useContext, useEffect } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js';
import addmore from '../img/add-square.png';

export const WebLinksResources = () => {
  const [weblinksresources, setWebLinksResources] = useState('');

  const handleChange = event => {
    setWebLinksResources(event.target.value);
  };

  useEffect(() => {
    weblinksresources.trim().length !== 0 ? setWebLinksResourcesVisible(true) : setWebLinksResourcesVisible(false);
  }, [weblinksresources]);

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible} = useContext(NewInternshipContext)

  return (
    <Form>
      <div className='WebLinksResources'>
        <label>Web Links and Resources</label>
        <div className='WebLinksResourcesFields'>
          <input name='url' value = {weblinksresources} className='WebLinksResourcesInputURL' placeholder = 'Add URL' onChange={handleChange}/>
          <div className='WebLinksResourcesAddURL'>
            <img src={addmore} />
            Add URL
          </div>
        </div>
      </div>
    </Form>
  )
}