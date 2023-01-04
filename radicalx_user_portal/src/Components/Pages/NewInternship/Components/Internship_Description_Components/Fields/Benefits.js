import { useState, useContext } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js'

export const Benefits = () => {
  const [benefits, setBenefits] = useState('');

  const handleChange = event => {
    setBenefits(event.target.value);
  };

  const handleBlur = () => {
    benefits.trim().length !== 0 ? setBenefitsVisible(true) : setBenefitsVisible(false);
  }

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible} = useContext(NewInternshipContext)

  return (
    <Form>
      <div className='Benefits'>
        <label>Benefits</label>
        <textarea name='benefits' value = {benefits} className='BenefitsText' placeholder = 'Description' onChange={handleChange} onBlur = {handleBlur} />
      </div>
    </Form>
  )
}