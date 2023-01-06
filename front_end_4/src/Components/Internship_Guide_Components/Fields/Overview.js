import { useState, useCallback, useContext, useEffect } from 'react';
import { Form } from './Form';
import { NewInternshipContext } from '../../../NewInternship.js'
import { useDropzone } from "react-dropzone"
import document_upload from '../img/document-upload.png'
import close from '../img/close.png';

export const Overview = () => {
  const [brief, setBrief] = useState('');

  const handleBriefChange = event => {
    setBrief(event.target.value);
  };

  const [myBriefFiles, setMyBriefFiles] = useState([])

  const { getRootProps:getRootBriefFileProps, getInputProps:getInputBriefFileProps  } = useDropzone({
    onDrop: (acceptedFile) => {
      setMyBriefFiles([...myBriefFiles, ...acceptedFile]);
    },
  });

  const removeBriefFile = file => () => {
    const newFiles = [...myBriefFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyBriefFiles(newFiles)
  }

  const BriefFiles = myBriefFiles.map(file => (
    <li className='InternshipGuideSubfieldFormUploadedFile' key={file.path} onClick={removeBriefFile(file)}>
      <div className='InternshipGuideSubfieldFormUploadedFileText'>{file.path}</div>
      <img src={close}/>
    </li>
  ))

  const [requirements, setRequirements] = useState('');

  const handleRequirementsChange = event => {
    setRequirements(event.target.value);
  };

  const [myRequirementsFiles, setMyRequirementsFiles] = useState([])

  const { getRootProps:getRootRequirementsFileProps, getInputProps:getInputRequirementsFileProps  } = useDropzone({
    onDrop: (acceptedFile) => {
      setMyRequirementsFiles([...myRequirementsFiles, ...acceptedFile]);
    },
  });

  const removeRequirementsFile = file => () => {
    const newFiles = [...myRequirementsFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyRequirementsFiles(newFiles)
  }

  const RequirementsFiles = myRequirementsFiles.map(file => (
    <li className='InternshipGuideSubfieldFormUploadedFile' key={file.path} onClick={removeRequirementsFile(file)}>
      <div className='InternshipGuideSubfieldFormUploadedFileText'>{file.path}</div>
      <img src={close}/>
    </li>
  ))

  const [milestones, setMilestones] = useState('');

  const handleMilestonesChange = event => {
    setMilestones(event.target.value);
  };

  const [myMilestonesFiles, setMyMilestonesFiles] = useState([])

  const { getRootProps:getRootMilestonesFileProps, getInputProps:getInputMilestonesFileProps  } = useDropzone({
    onDrop: (acceptedFile) => {
      setMyMilestonesFiles([...myMilestonesFiles, ...acceptedFile]);
    },
  });

  const removeMilestonesFile = file => () => {
    const newFiles = [...myMilestonesFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyMilestonesFiles(newFiles)
  }

  const MilestonesFiles = myMilestonesFiles.map(file => (
    <li className='InternshipGuideSubfieldFormUploadedFile' key={file.path} onClick={removeMilestonesFile(file)}>
      <div className='InternshipGuideSubfieldFormUploadedFileText'>{file.path}</div>
      <img src={close}/>
    </li>
  ))

  useEffect(() => {
    brief.trim().length !== 0 && requirements.trim().length !==0 && milestones.length !== 0 && myBriefFiles.length !==0 && myRequirementsFiles.length !==0 && myMilestonesFiles.length !==0 ? setOverviewVisible(true) : setOverviewVisible(false);
  }, [brief, requirements, milestones, myBriefFiles, myRequirementsFiles, myMilestonesFiles]);

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible, OverviewVisible, setOverviewVisible, ScheduleVisible, setScheduleVisible, ResourcesVisible, setResourcesVisible, Survey1Visible, setSurvey1Visible, Survey2Visible, setSurvey2Visible, BasicSettingsVisible, setBasicSettingsVisible, HeroImageVisible, setHeroImageVisible} = useContext(NewInternshipContext)

  return (
    <Form>
      <div className="InternshipGuideSubfieldForm">
        <div className="InternshipGuideSubfieldFormInputs">
          <label>Brief</label>
          <input name='brief' value = {brief} className='InternshipGuideSubfieldFormInputsText' placeholder = 'Description' onChange={handleBriefChange}/>
          <div {...getRootBriefFileProps({ className: "InternshipGuideSubfieldFormDragDrop" })}>
            <input {...getInputBriefFileProps()} />
            <p>Drag n drop to upload your video</p>
            <img src={document_upload} />
          </div>
          <ul className='InternshipGuideSubfieldFormUploadedFiles'>{BriefFiles}</ul>
        </div>
        <div className="InternshipGuideSubfieldFormInputs">
          <label>Requirements</label>
          <input name='requirements' value = {requirements} className='InternshipGuideSubfieldFormInputsText' placeholder = 'Description' onChange={handleRequirementsChange}/>
          <div {...getRootRequirementsFileProps({ className: "InternshipGuideSubfieldFormDragDrop" })}>
            <input {...getInputRequirementsFileProps()} />
            <p>Drag n drop to upload your video</p>
            <img src={document_upload} />
          </div>
          <ul className='InternshipGuideSubfieldFormUploadedFiles'>{RequirementsFiles}</ul>
        </div>
        <div className="InternshipGuideSubfieldFormInputs">
          <label>Milestones</label>
          <input name='milestones' value = {milestones} className='InternshipGuideSubfieldFormInputsText' placeholder = 'Description' onChange={handleMilestonesChange}/>
          <div {...getRootMilestonesFileProps({ className: "InternshipGuideSubfieldFormDragDrop" })}>
            <input {...getInputMilestonesFileProps()} />
            <p>Drag n drop to upload your video</p>
            <img src={document_upload} />
          </div>
          <ul className='InternshipGuideSubfieldFormUploadedFiles'>{MilestonesFiles}</ul>
        </div>
      </div>
    </Form>
    );
  }