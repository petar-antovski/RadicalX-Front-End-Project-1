import StatusBarIcon from './img/StatusBarIcon.png';
import './StatusBar.css';

export const StatusBar = ({link}) => {

  return (
    <nav>
        <ol className="StatusBar">
          <li className={link === "/NewInternship/InternshipDescription" ? "StatusBarItemActive" : "StatusBarItemInnactive"}>
            <img className='StatusBarItemicon' src = {StatusBarIcon} alt="StatusBarItemIcon" />
            <div className='StatusBarItemtext'>Internship Description</div>
          </li>
          <li className={link === "/NewInternship/InternshipGuide" ? "StatusBarItemActive" : "StatusBarItemInnactive"}>
            <img className='StatusBarItemicon' src = {StatusBarIcon} alt="StatusBarItemIcon" />
            <div className='StatusBarItemtext'>Internship Guide</div>
          </li>
          <li className={link === "/NewInternship/Surveys" ? "StatusBarItemActive" : "StatusBarItemInnactive"}>
            <img className='StatusBarItemicon' src = {StatusBarIcon} alt="StatusBarItemIcon" />
            <div className='StatusBarItemtext'>Surveys</div>
          </li>
          <li className={link === "/NewInternship/Settings" ? "StatusBarItemActive" : "StatusBarItemInnactive"}>
            <img className='StatusBarItemicon' src = {StatusBarIcon} alt="StatusBarItemIcon" />
            <div className='StatusBarItemtext'>Settings</div>
          </li>
        </ol>
    </nav>
  );
};
