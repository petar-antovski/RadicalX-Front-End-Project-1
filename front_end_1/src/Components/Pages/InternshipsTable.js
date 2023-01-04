import React from 'react'
import './Internships.css';
import DownArrow from '../img/arrow-square-down.png';
import Graph from '../img/Row.png';
import Chart from '../img/chart.png';
import Profile from '../img/profile-2user.png';
import More from '../img/more-2.png';

const InternshipsTable = () => {
  return (
    <div className='InternshipTable'>
        <div className='IntershipTitle'>
            <div className='IntershipTitleHeading'>
                <div className='IntershipTitleHeadingText'>Internship Title</div>
                <div className='DownArrow'><img src={DownArrow} alt="DownArrow" /></div>
            </div>
            <div className='InternshipListRow'>
                <div className='InternshipListRowBox'>
                <div className='InternshipName'>Product Design GVI</div>
                <div className='InternshipDescription'>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div>
                </div>
            </div>
            <div className='InternshipListRow'>
                <div className='InternshipListRowBox'>
                <div className='InternshipName'>Product Design GVI</div>
                <div className='InternshipDescription'>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div>
                </div>
            </div>
            <div className='InternshipListRow'>
                <div className='InternshipListRowBox'>
                <div className='InternshipName'>Product Design GVI</div>
                <div className='InternshipDescription'>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div>
                </div>
            </div>
            <div className='InternshipListRow'>
                <div className='InternshipListRowBox'>
                <div className='InternshipName'>Product Design GVI</div>
                <div className='InternshipDescription'>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div>
                </div>
            </div>
            <div className='InternshipListRow'>
                <div className='InternshipListRowBox'>
                <div className='InternshipName'>Product Design GVI</div>
                <div className='InternshipDescription'>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div>
                </div>
            </div>
        </div>
        <div className='CompletionPeriod'>
            <div className='CompletionPeriodHeading'>
                <div className='CompletionPeriodHeadingText'>Completion Period</div>
                <div className='DownArrow'><img src={DownArrow} alt="DownArrow" /></div>
            </div>
            <div className='CompletionPeriodRow'>
                <div className='CompletionPeriodRowBox'>
                <div className='Period'>120 days</div>
                <div className='CreatedOn'>(created on 10/12/2021)</div>
                </div>  
            </div>
            <div className='CompletionPeriodRow'>
                <div className='CompletionPeriodRowBox'>
                <div className='Period'>120 days</div>
                <div className='CreatedOn'>(created on 10/12/2021)</div>
                </div>  
            </div>
            <div className='CompletionPeriodRow'>
                <div className='CompletionPeriodRowBox'>
                <div className='Period'>120 days</div>
                <div className='CreatedOn'>(created on 10/12/2021)</div>
                </div>  
            </div>
            <div className='CompletionPeriodRow'>
                <div className='CompletionPeriodRowBox'>
                <div className='Period'>120 days</div>
                <div className='CreatedOn'>(created on 10/12/2021)</div>
                </div>  
            </div>
            <div className='CompletionPeriodRow'>
                <div className='CompletionPeriodRowBox'>
                <div className='Period'>120 days</div>
                <div className='CreatedOn'>(created on 10/12/2021)</div>
                </div>  
            </div>
        </div>
        <div className='TotalEnrolled'>
            <div className='TotalEnrolledHeading'>
                <div className='TotalEnrolledHeadingText'>Total Enrolled</div>
                <div className='DownArrow'><img src={DownArrow} alt="DownArrow" /></div>
            </div>
            <div className='TotalEnrolledRow'>
                <div className='TotalEnrolledBox'>
                <div className='TotalEnrolledText'>20,000</div>
                </div>
            </div>
            <div className='TotalEnrolledRow'>
                <div className='TotalEnrolledBox'>
                <div className='TotalEnrolledText'>20,000</div>
                </div>
            </div>
            <div className='TotalEnrolledRow'>
                <div className='TotalEnrolledBox'>
                <div className='TotalEnrolledText'>20,000</div>
                </div>
            </div>
            <div className='TotalEnrolledRow'>
                <div className='TotalEnrolledBox'>
                <div className='TotalEnrolledText'>20,000</div>
                </div>
            </div>
            <div className='TotalEnrolledRow'>
                <div className='TotalEnrolledBox'>
                <div className='TotalEnrolledText'>20,000</div>
                </div>
            </div>
        </div>
        <div className='QualifiedCandidates'>
            <div className='QualifiedCandidatesHeading'>
                <div className='QualifiedCandidatesHeadingText'>Qualified Candidates</div>
                <div className='DownArrow'><img src={DownArrow} alt="DownArrow" /></div>
            </div>
            <div className='QualifiedCandidatesRow'>
                <img src={Graph} alt="Graph" />
            </div>
            <div className='QualifiedCandidatesRow'>
                <img src={Graph} alt="Graph" />
            </div>
            <div className='QualifiedCandidatesRow'>
                <img src={Graph} alt="Graph" />
            </div>
            <div className='QualifiedCandidatesRow'>
                <img src={Graph} alt="Graph" />
            </div>
            <div className='QualifiedCandidatesRow'>
                <img src={Graph} alt="Graph" />
            </div>
        </div>
        <div className='SymbolsColumn'>
            <div className='SymbolsHeading'></div>
            <div className='SymbolsRow'>
                <div className='SymbolsBox'>
                <div className='Symbol'><img src={Chart} alt="Chart" /></div>
                <div className='Symbol'><img src={Profile} alt="Profile" /></div>
                <div className='Symbol'><img src={More} alt="More" /></div>
                </div>
            </div>
            <div className='SymbolsRow'>
                <div className='SymbolsBox'>
                <div className='Symbol'><img src={Chart} alt="Chart" /></div>
                <div className='Symbol'><img src={Profile} alt="Profile" /></div>
                <div className='Symbol'><img src={More} alt="More" /></div>
                </div>
            </div>
            <div className='SymbolsRow'>
                <div className='SymbolsBox'>
                <div className='Symbol'><img src={Chart} alt="Chart" /></div>
                <div className='Symbol'><img src={Profile} alt="Profile" /></div>
                <div className='Symbol'><img src={More} alt="More" /></div>
                </div>
            </div>
            <div className='SymbolsRow'>
                <div className='SymbolsBox'>
                <div className='Symbol'><img src={Chart} alt="Chart" /></div>
                <div className='Symbol'><img src={Profile} alt="Profile" /></div>
                <div className='Symbol'><img src={More} alt="More" /></div>
                </div>
            </div>
            <div className='SymbolsRow'>
                <div className='SymbolsBox'>
                <div className='Symbol'><img src={Chart} alt="Chart" /></div>
                <div className='Symbol'><img src={Profile} alt="Profile" /></div>
                <div className='Symbol'><img src={More} alt="More" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InternshipsTable