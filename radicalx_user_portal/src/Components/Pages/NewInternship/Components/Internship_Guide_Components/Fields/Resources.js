import { useState, useCallback, useContext, useEffect } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js'
import { useDropzone } from "react-dropzone"
import document_upload from '../img/document-upload.png'
import close from '../img/close.png';

export const Resources = () => {
  const [curatedresources, setCuratedResources] = useState('');

  const handleCuratedResourcesChange = event => {
    setCuratedResources(event.target.value);
  };

  const [myCuratedResourcesFiles, setMyCuratedResourcesFiles] = useState([])

  const { getRootProps:getRootCuratedResourcesFileProps, getInputProps:getInputCuratedResourcesFileProps  } = useDropzone({
    onDrop: (acceptedFile) => {
      setMyCuratedResourcesFiles([...myCuratedResourcesFiles, ...acceptedFile]);
    },
  });

  const removeCuratedResourcesFile = file => () => {
    const newFiles = [...myCuratedResourcesFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyCuratedResourcesFiles(newFiles)
  }

  const CuratedResourcesFiles = myCuratedResourcesFiles.map(file => (
    <li className='InternshipGuideSubfieldFormUploadedFile' key={file.path} onClick={removeCuratedResourcesFile(file)}>
      <div className='InternshipGuideSubfieldFormUploadedFileText'>{file.path}</div>
      <img src={close}/>
    </li>
  ))

  const [events, setEvents] = useState('');

  const handleEventsChange = event => {
    setEvents(event.target.value);
  };

  const [myEventsFiles, setMyEventsFiles] = useState([])

  const { getRootProps:getRootEventsFileProps, getInputProps:getInputEventsFileProps  } = useDropzone({
    onDrop: (acceptedFile) => {
      setMyEventsFiles([...myEventsFiles, ...acceptedFile]);
    },
  });

  const removeEventsFile = file => () => {
    const newFiles = [...myEventsFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyEventsFiles(newFiles)
  }

  const EventsFiles = myEventsFiles.map(file => (
    <li className='InternshipGuideSubfieldFormUploadedFile' key={file.path} onClick={removeEventsFile(file)}>
      <div className='InternshipGuideSubfieldFormUploadedFileText'>{file.path}</div>
      <img src={close}/>
    </li>
  ))

  useEffect(() => {
    curatedresources.trim().length !== 0 && events.trim().length !==0 && myCuratedResourcesFiles.length !==0 && myEventsFiles.length !==0 ? setResourcesVisible(true) : setResourcesVisible(false);
  }, [curatedresources, events, myCuratedResourcesFiles, myEventsFiles]);

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  return (
    <Form>
      <div className="InternshipGuideSubfieldForm">
        <div className="InternshipGuideSubfieldFormInputs">
          <label>Curated Resources</label>
          <input name='curatedresources' value = {curatedresources} className='InternshipGuideSubfieldFormInputsText' placeholder = 'Description' onChange={handleCuratedResourcesChange}/>
          <div {...getRootCuratedResourcesFileProps({ className: "InternshipGuideSubfieldFormDragDrop" })}>
            <input {...getInputCuratedResourcesFileProps()} />
            <p>Drag n drop to upload your video</p>
            <img src={document_upload} />
          </div>
          <ul className='InternshipGuideSubfieldFormUploadedFiles'>{CuratedResourcesFiles}</ul>
        </div>
        <div className="InternshipGuideSubfieldFormInputs">
          <label>Events</label>
          <input name='events' value = {events} className='InternshipGuideSubfieldFormInputsText' placeholder = 'Description' onChange={handleEventsChange}/>
          <div {...getRootEventsFileProps({ className: "InternshipGuideSubfieldFormDragDrop" })}>
            <input {...getInputEventsFileProps()} />
            <p>Drag n drop to upload your video</p>
            <img src={document_upload} />
          </div>
          <ul className='InternshipGuideSubfieldFormUploadedFiles'>{EventsFiles}</ul>
        </div>
      </div>
    </Form>
    );
  }