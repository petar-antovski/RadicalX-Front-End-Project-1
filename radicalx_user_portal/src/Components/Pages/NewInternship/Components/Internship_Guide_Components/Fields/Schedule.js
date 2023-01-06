import { useState, useCallback, useContext, useEffect } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js'
import { useDropzone } from "react-dropzone"
import document_upload from '../img/document-upload.png'
import close from '../img/close.png';

export const Schedule = () => {
  const [duration, setDuration] = useState('');

  const handleDurationChange = event => {
    setDuration(event.target.value);
  };

  const [myDurationFiles, setMyDurationFiles] = useState([])

  const { getRootProps:getRootDurationFileProps, getInputProps:getInputDurationFileProps  } = useDropzone({
    onDrop: (acceptedFile) => {
      setMyDurationFiles([...myDurationFiles, ...acceptedFile]);
    },
  });

  const removeDurationFile = file => () => {
    const newFiles = [...myDurationFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyDurationFiles(newFiles)
  }

  const DurationFiles = myDurationFiles.map(file => (
    <li className='InternshipGuideSubfieldFormUploadedFile' key={file.path} onClick={removeDurationFile(file)}>
      <div className='InternshipGuideSubfieldFormUploadedFileText'>{file.path}</div>
      <img src={close}/>
    </li>
  ))

  const [timeline, setTimeline] = useState('');

  const handleTimelineChange = event => {
    setTimeline(event.target.value);
  };

  const [myTimelineFiles, setMyTimelineFiles] = useState([])

  const { getRootProps:getRootTimelineFileProps, getInputProps:getInputTimelineFileProps  } = useDropzone({
    onDrop: (acceptedFile) => {
      setMyTimelineFiles([...myTimelineFiles, ...acceptedFile]);
    },
  });

  const removeTimelineFile = file => () => {
    const newFiles = [...myTimelineFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyTimelineFiles(newFiles)
  }

  const TimelineFiles = myTimelineFiles.map(file => (
    <li className='InternshipGuideSubfieldFormUploadedFile' key={file.path} onClick={removeTimelineFile(file)}>
      <div className='InternshipGuideSubfieldFormUploadedFileText'>{file.path}</div>
      <img src={close}/>
    </li>
  ))

  const [deliverables, setDeliverables] = useState('');

  const handleDeliverablesChange = event => {
    setDeliverables(event.target.value);
  };

  const [myDeliverablesFiles, setMyDeliverablesFiles] = useState([])

  const { getRootProps:getRootDeliverablesFileProps, getInputProps:getInputDeliverablesFileProps  } = useDropzone({
    onDrop: (acceptedFile) => {
      setMyDeliverablesFiles([...myDeliverablesFiles, ...acceptedFile]);
    },
  });

  const removeDeliverablesFile = file => () => {
    const newFiles = [...myDeliverablesFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyDeliverablesFiles(newFiles)
  }

  const DeliverablesFiles = myDeliverablesFiles.map(file => (
    <li className='InternshipGuideSubfieldFormUploadedFile' key={file.path} onClick={removeDeliverablesFile(file)}>
      <div className='InternshipGuideSubfieldFormUploadedFileText'>{file.path}</div>
      <img src={close}/>
    </li>
  ))

  useEffect(() => {
    duration.trim().length !== 0 && timeline.trim().length !==0 && deliverables.length !== 0 && myDurationFiles.length !==0 && myTimelineFiles.length !==0 && myDeliverablesFiles.length !==0 ? setScheduleVisible(true) : setScheduleVisible(false);
  }, [duration, timeline, deliverables, myDurationFiles, myTimelineFiles, myDeliverablesFiles]);

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  return (
    <Form>
      <div className="InternshipGuideSubfieldForm">
        <div className="InternshipGuideSubfieldFormInputs">
          <label>Duration</label>
          <input name='duration' value = {duration} className='InternshipGuideSubfieldFormInputsText' placeholder = 'Description' onChange={handleDurationChange}/>
          <div {...getRootDurationFileProps({ className: "InternshipGuideSubfieldFormDragDrop" })}>
            <input {...getInputDurationFileProps()} />
            <p>Drag n drop to upload your video</p>
            <img src={document_upload} />
          </div>
          <ul className='InternshipGuideSubfieldFormUploadedFiles'>{DurationFiles}</ul>
        </div>
        <div className="InternshipGuideSubfieldFormInputs">
          <label>Timeline</label>
          <input name='timeline' value = {timeline} className='InternshipGuideSubfieldFormInputsText' placeholder = 'Description' onChange={handleTimelineChange}/>
          <div {...getRootTimelineFileProps({ className: "InternshipGuideSubfieldFormDragDrop" })}>
            <input {...getInputTimelineFileProps()} />
            <p>Drag n drop to upload your video</p>
            <img src={document_upload} />
          </div>
          <ul className='InternshipGuideSubfieldFormUploadedFiles'>{TimelineFiles}</ul>
        </div>
        <div className="InternshipGuideSubfieldFormInputs">
          <label>Deliverables</label>
          <input name='deliverables' value = {deliverables} className='InternshipGuideSubfieldFormInputsText' placeholder = 'Description' onChange={handleDeliverablesChange}/>
          <div {...getRootDeliverablesFileProps({ className: "InternshipGuideSubfieldFormDragDrop" })}>
            <input {...getInputDeliverablesFileProps()} />
            <p>Drag n drop to upload your video</p>
            <img src={document_upload} />
          </div>
          <ul className='InternshipGuideSubfieldFormUploadedFiles'>{DeliverablesFiles}</ul>
        </div>
      </div>
    </Form>
    );
  }