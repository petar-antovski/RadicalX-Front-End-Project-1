import React from 'react'
import { Link } from 'react-router-dom';
import './Internships.css';
import InternshipsTable from './InternshipsTable';
import AddSquareIcon from '../img/add-square.png';
import Funnel from '../img/Funnel.png';
import CalendarIcon from '../img/calendar-2.png';

const Internships = (props) => {
  const removeElement = () => {
    props.setVisible((prev) => !prev);
  };

  return (
    <div className='Internships'>
      <div className='Titlebar'>
          <div className='Title'>Internships</div>
          <Link style={{textDecoration: 'none', outline: 'none'}} to={`/NewInternship/InternshipDescription`}>
            <div className='create' onClick = {removeElement}>
              <div className='square'><img src={AddSquareIcon} alt="AddSquareIcon" /></div>
              <div className='create_text'>Create New Internship</div>
            </div>
          </Link>
      </div>
      <div className='Body'>
        <div className='Insights'>
          <div className='InsightsTextBox'>
            <div className='InsightsText'>
              <div className='InsightsTitle'>Internship Insights</div>
              <div className='InsightsContent'>In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic.</div>
            </div>
          </div>
          <div className='InsightsGraph'>
            <div className='FilterBar'>
              <div className='Filter'>
                <div className='ThisButtons'>
                  <div className='ThisWeekBox'>
                    <div className='ThisWeekText'>This week</div>
                  </div>
                  <div className='ThisMonthBox'>
                    <div className='ThisMonthText'>This month</div>
                  </div>
                </div>
                <div className='SelectDates'>
                  <div className='SelectDatesIcon'><img src={CalendarIcon} alt="CalendarIcon" /></div>
                  <div className='SelectDatesText'>Select dates</div>
                </div>
              </div>
            </div>
            <div className='Funnel'>
              <img src={Funnel} alt="Funnel" />
            </div>
          </div>
        </div>
        <InternshipsTable />
      </div>
    </div>
  )
}

export default Internships