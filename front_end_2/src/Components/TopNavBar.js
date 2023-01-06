import { Link } from 'react-router-dom';
import BackIcon from './img/BackIcon.png';

import './TopNavBar.css';

export const TopNavBar = (props) => {
  const removeElementOnBack = () => (
    props.backlink === 'Internships' ? props.setVisible((prev) => !prev) : null
  );

  const removeElementOnFinish = () => (
    props.nextlink === 'Internships' ? props.setVisible((prev) => !prev) : null
  );

  return (
    <div className='TopNavBar'>
      <div className='TopNavBarBack'>
        <Link style={{textDecoration: 'none', outline: 'none'}} className='TopNavBarBackBox' to={`/${props.backlink}`}  onClick = {removeElementOnBack}>
          <img className='TopNavBarBackIcon' src = {BackIcon} alt="BackIcon" />
          <div className='TopNavBarBackText'>Back</div>
        </Link>
      </div>
      <div className='TopNavBarTitle'>
        <div className='TopNavBarTitleBox'>
          <div className='TopNavBarTitleText'>Add New Internship</div>
        </div>
      </div>
      <div className='TopNavBarNext'>
        <Link style={{textDecoration: 'none', outline: 'none'}} className={props.NextBox} to={`/${props.nextlink}`}  onClick = {removeElementOnFinish}>
          <div className={props.NextText}>{props.backlink === "NewInternship/Surveys" ? "Publish Internship" : "Continue to Next Step"}</div>
          <img className='TopNavBarNextIcon' src = {props.NextIcon} alt="NextIcon" />
        </Link>
      </div>
    </div>
  );
}