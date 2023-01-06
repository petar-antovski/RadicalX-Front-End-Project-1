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
import { Overview } from './Components/Internship_Guide_Components/Fields/Overview';
import { Schedule } from './Components/Internship_Guide_Components/Fields/Schedule';
import { Resources } from './Components/Internship_Guide_Components/Fields/Resources';
import { AddChapter } from './Components/Internship_Guide_Components/Fields/AddChapter';
import { Surveys } from './Components/Surveys';
import { Survey1 } from './Components/Surveys_Components/Fields/Survey1';
import { Survey2 } from './Components/Surveys_Components/Fields/Survey2';
import { AddSurvey } from './Components/Surveys_Components/Fields/AddSurvey';
import { Settings } from './Components/Settings';
import { BasicSettings } from './Components/Settings_Components/Fields/BasicSettings';
import { HeroImage } from './Components/Settings_Components/Fields/HeroImage';

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
  const [OverviewVisible, setOverviewVisible] = useState(false);
  const [ScheduleVisible, setScheduleVisible] = useState(false);
  const [ResourcesVisible, setResourcesVisible] = useState(false);
  const [Survey1Visible, setSurvey1Visible] = useState(false);
  const [Survey2Visible, setSurvey2Visible] = useState(false);
  const [BasicSettingsVisible, setBasicSettingsVisible] = useState(false);
  const [HeroImageVisible, setHeroImageVisible] = useState(false);

  return (
    <NewInternshipContext.Provider value = {{ CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible }}>
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
        <Route path='/NewInternship/InternshipGuide' element={<InternshipGuide/>}>
          <Route path='/NewInternship/InternshipGuide/Overview' element={<Overview/>} />
          <Route path='/NewInternship/InternshipGuide/Schedule' element={<Schedule/>} />
          <Route path='/NewInternship/InternshipGuide/Resources' element={<Resources/>} />
          <Route path='/NewInternship/InternshipGuide/AddChapter' element={<AddChapter/>} />
        </Route>
        <Route path='/NewInternship/Surveys' element={<Surveys/>}>
          <Route path='/NewInternship/Surveys/Survey1' element={<Survey1/>} />
          <Route path='/NewInternship/Surveys/Survey2' element={<Survey2/>} />
          <Route path='/NewInternship/Surveys/AddSurvey' element={<AddSurvey/>} />
        </Route>
        <Route path='/NewInternship/Settings' element={<Settings  setVisible = {props.setVisible} />}>
          <Route path='/NewInternship/Settings/BasicSettings' element={<BasicSettings/>} />
          <Route path='/NewInternship/Settings/HeroImage' element={<HeroImage/>} />
        </Route>
      </Routes>
    </NewInternshipContext.Provider>
  );
}