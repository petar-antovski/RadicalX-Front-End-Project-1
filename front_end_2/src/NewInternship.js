import { Routes, Route } from "react-router-dom";
import { createContext, useState } from 'react';
import { InternshipDescription } from './Components/InternshipDescription';
import { Category } from './Components/Internship_Description_Components/Fields/Category';
import { Description } from './Components/Internship_Description_Components/Fields/Description';
import { Location } from './Components/Internship_Description_Components/Fields/Location';
import { Benefits } from './Components/Internship_Description_Components/Fields/Benefits';
import { IntroVideo } from './Components/Internship_Description_Components/Fields/IntroVideo';
import { MentorDetails } from './Components/Internship_Description_Components/Fields/MentorDetails';
import { RecommendedRoles } from './Components/Internship_Description_Components/Fields/RecommendedRoles';
import { WebLinksResources } from './Components/Internship_Description_Components/Fields/WebLinksResources';
import { AddMore } from './Components/Internship_Description_Components/Fields/AddMore';
import { InternshipGuide } from './Components/InternshipGuide';
import { Surveys } from './Components/Surveys';
import { Settings } from './Components/Settings';

export const NewInternshipContext = createContext();

export const NewInternship = (props) => {
  const [CategoryVisible, setCategoryVisible] = useState(false);
  const [DescriptionVisible, setDescriptionVisible] = useState(false);
  const [LocationVisible, setLocationVisible] = useState(false);
  const [BenefitsVisible, setBenefitsVisible] = useState(false);
  const [IntroVideoVisible, setIntroVideoVisible] = useState(false);
  const [MentorDetailsVisible, setMentorDetailsVisible] = useState(false);
  const [RecommendedRolesVisible, setRecommendedRolesVisible] = useState(false);
  const [WebLinksResourcesVisible, setWebLinksResourcesVisible] = useState(false);

  return (
    <NewInternshipContext.Provider value = {{CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible }}>
      <Routes>
        <Route path='/' element={<InternshipDescription/>}>
          <Route path='/NewInternship/InternshipDescription/Category' element={<Category/>} />
          <Route path='/NewInternship/InternshipDescription/Description' element={<Description/>} />
          <Route path='/NewInternship/InternshipDescription/Location' element={<Location/>} />
          <Route path='/NewInternship/InternshipDescription/Benefits' element={<Benefits/>} />
          <Route path='/NewInternship/InternshipDescription/IntroVideo' element={<IntroVideo/>} />
          <Route path='/NewInternship/InternshipDescription/MentorDetails' element={<MentorDetails/>} />
          <Route path='/NewInternship/InternshipDescription/RecommendedRoles' element={<RecommendedRoles/>} />
          <Route path='/NewInternship/InternshipDescription/WebLinksResources' element={<WebLinksResources/>} />
          <Route path='/NewInternship/InternshipDescription/AddMore' element={<AddMore/>} />
        </Route>
        <Route path='/NewInternship/InternshipGuide' element={<InternshipGuide/>} />
        <Route path='/NewInternship/Surveys' element={<Surveys/>} />
        <Route path='/NewInternship/Settings' element={<Settings/>} />
      </Routes>
    </NewInternshipContext.Provider>
  );
}