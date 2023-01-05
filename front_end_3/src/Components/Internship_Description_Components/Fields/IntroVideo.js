import { Form } from './Form';
import React, { useState, useCallback, useEffect, useContext } from "react"
import { NewInternshipContext } from '../../../NewInternship.js'
import { useDropzone } from "react-dropzone"
import document_upload from '../img/document-upload.png'
import close from '../img/close.png';

export const IntroVideo = (props) => {
  const [myFiles, setMyFiles] = useState([])

  const onDrop = useCallback(acceptedFiles => {
    setMyFiles([...myFiles, ...acceptedFiles])
  }, [myFiles])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  })

  const removeFile = file => () => {
    const newFiles = [...myFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyFiles(newFiles)
  }

  const files = myFiles.map(file => (
    <li className='IntroVideoUploadedFile' key={file.path} onClick={removeFile(file)}>
      <div className='IntroVideoUploadedFileText'>{file.path}</div>
      <img src={close}/>
    </li>
  ))

  const {CategoryVisible, setCategoryVisible, DescriptionVisible, setDescriptionVisible, LocationVisible, setLocationVisible, BenefitsVisible, setBenefitsVisible, IntroVideoVisible, setIntroVideoVisible, MentorDetailsVisible, setMentorDetailsVisible, RecommendedRolesVisible, setRecommendedRolesVisible, WebLinksResourcesVisible, setWebLinksResourcesVisible} = useContext(NewInternshipContext)

  useEffect(() => {
    myFiles.length > 0 ? setIntroVideoVisible(true) : setIntroVideoVisible(false);
  }, [myFiles]);

  return (
    <Form>
      <dif className="IntroVideo">
        <label>Intro Video</label>
        <div {...getRootProps({ className: "IntroVideoDragDrop" })}>
          <input {...getInputProps()} />
          <p>Drag n drop to upload your video</p>
          <img src={document_upload} />
        </div>
        <ul className='IntroVideoUploadedFiles'>{files}</ul>
      </dif>  
    </Form>
  )
}
