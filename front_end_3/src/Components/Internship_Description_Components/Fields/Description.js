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

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible} = useContext(NewInternshipContext)

  return (
    <Form>
      <div className='Description'>
        <label>Description</label>
        <textarea name='description' value = {description} className='DescriptionText' placeholder = 'Description' onChange={handleChange} />
      </div>
    </Form>
  )
}