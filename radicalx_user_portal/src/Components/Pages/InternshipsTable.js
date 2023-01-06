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
        <div className='InternshipTableIntershipTitle'>
            <div className='InternshipTableIntershipTitleHeading'>
                <div className='InternshipTableIntershipTitleHeadingText'>Internship Title</div>
                <div className='InternshipTableDownArrow'><img src={DownArrow} alt="DownArrow" /></div>
            </div>
            <div className='InternshipTableInternshipListRow'>
                <div className='InternshipTableInternshipListRowBox'>
                    <div className='InternshipTableInternshipName'>Product Design GVI</div>
                    <div className='InternshipTableInternshipDescription'>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div>
                </div>
            </div>
            <div className='InternshipTableInternshipListRow'>
                <div className='InternshipTableInternshipListRowBox'>
                    <div className='InternshipTableInternshipName'>Product Design GVI</div>
                    <div className='InternshipTableInternshipDescription'>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div>
                </div>
            </div>
            <div className='InternshipTableInternshipListRow'>
                <div className='InternshipTableInternshipListRowBox'>
                    <div className='InternshipTableInternshipName'>Product Design GVI</div>
                    <div className='InternshipTableInternshipDescription'>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div>
                </div>
            </div>
            <div className='InternshipTableInternshipListRow'>
                <div className='InternshipTableInternshipListRowBox'>
                    <div className='InternshipTableInternshipName'>Product Design GVI</div>
                    <div className='InternshipTableInternshipDescription'>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div>
                </div>
            </div>
            <div className='InternshipTableInternshipListRow'>
                <div className='InternshipTableInternshipListRowBox'>
                    <div className='InternshipTableInternshipName'>Product Design GVI</div>
                    <div className='InternshipTableInternshipDescription'>Amet minim mollit non deserunt est sit aliqua dolor do amet sint.</div>
                </div>
            </div>
        </div>
        <div className='InternshipTableCompletionPeriod'>
            <div className='InternshipTableCompletionPeriodHeading'>
                <div className='InternshipTableCompletionPeriodHeadingText'>Completion Period</div>
                <div className='InternshipTableDownArrow'><img src={DownArrow} alt="DownArrow" /></div>
            </div>
            <div className='InternshipTableCompletionPeriodRow'>
                <div className='InternshipTableCompletionPeriodRowBox'>
                    <div className='InternshipTablePeriod'>120 days</div>
                    <div className='InternshipTableCreatedOn'>(created on 10/12/2021)</div>
                </div>  
            </div>
            <div className='InternshipTableCompletionPeriodRow'>
                <div className='InternshipTableCompletionPeriodRowBox'>
                    <div className='InternshipTablePeriod'>120 days</div>
                    <div className='InternshipTableCreatedOn'>(created on 10/12/2021)</div>
                </div>  
            </div>
            <div className='InternshipTableCompletionPeriodRow'>
                <div className='InternshipTableCompletionPeriodRowBox'>
                    <div className='InternshipTablePeriod'>120 days</div>
                    <div className='InternshipTableCreatedOn'>(created on 10/12/2021)</div>
                </div>  
            </div>
            <div className='InternshipTableCompletionPeriodRow'>
                <div className='InternshipTableCompletionPeriodRowBox'>
                    <div className='InternshipTablePeriod'>120 days</div>
                    <div className='InternshipTableCreatedOn'>(created on 10/12/2021)</div>
                </div>  
            </div>
            <div className='InternshipTableCompletionPeriodRow'>
                <div className='InternshipTableCompletionPeriodRowBox'>
                    <div className='InternshipTablePeriod'>120 days</div>
                    <div className='InternshipTableCreatedOn'>(created on 10/12/2021)</div>
                </div>  
            </div>
        </div>
        <div className='InternshipTableTotalEnrolled'>
            <div className='InternshipTableTotalEnrolledHeading'>
                <div className='InternshipTableTotalEnrolledHeadingText'>Total Enrolled</div>
                <div className='InternshipTableDownArrow'><img src={DownArrow} alt="DownArrow" /></div>
            </div>
            <div className='InternshipTableTotalEnrolledRow'>
                <div className='InternshipTableTotalEnrolledBox'>
                    <div className='InternshipTableTotalEnrolledText'>20,000</div>
                </div>
            </div>
            <div className='InternshipTableTotalEnrolledRow'>
                <div className='InternshipTableTotalEnrolledBox'>
                    <div className='InternshipTableTotalEnrolledText'>20,000</div>
                </div>
            </div>
            <div className='InternshipTableTotalEnrolledRow'>
                <div className='InternshipTableTotalEnrolledBox'>
                    <div className='InternshipTableTotalEnrolledText'>20,000</div>
                </div>
            </div>
            <div className='InternshipTableTotalEnrolledRow'>
                <div className='InternshipTableTotalEnrolledBox'>
                    <div className='InternshipTableTotalEnrolledText'>20,000</div>
                </div>
            </div>
            <div className='InternshipTableTotalEnrolledRow'>
                <div className='InternshipTableTotalEnrolledBox'>
                    <div className='InternshipTableTotalEnrolledText'>20,000</div>
                </div>
            </div>
        </div>
        <div className='InternshipTableQualifiedCandidates'>
            <div className='InternshipTableQualifiedCandidatesHeading'>
                <div className='InternshipTableQualifiedCandidatesHeadingText'>Qualified Candidates</div>
                <div className='InternshipTableDownArrow'><img src={DownArrow} alt="DownArrow" /></div>
            </div>
            <div className='InternshipTableQualifiedCandidatesRow'>
                <img src={Graph} alt="Graph" />
            </div>
            <div className='InternshipTableQualifiedCandidatesRow'>
                <img src={Graph} alt="Graph" />
            </div>
            <div className='InternshipTableQualifiedCandidatesRow'>
                <img src={Graph} alt="Graph" />
            </div>
            <div className='InternshipTableQualifiedCandidatesRow'>
                <img src={Graph} alt="Graph" />
            </div>
            <div className='InternshipTableQualifiedCandidatesRow'>
                <img src={Graph} alt="Graph" />
            </div>
        </div>
        <div className='InternshipTableSymbolsColumn'>
            <div className='InternshipTableSymbolsHeading'></div>
            <div className='InternshipTableSymbolsRow'>
                <div className='InternshipTableSymbolsBox'>
                    <div className='InternshipTableSymbol'><img src={Chart} alt="Chart" /></div>
                    <div className='InternshipTableSymbol'><img src={Profile} alt="Profile" /></div>
                    <div className='InternshipTableSymbol'><img src={More} alt="More" /></div>
                </div>
            </div>
            <div className='InternshipTableSymbolsRow'>
                <div className='InternshipTableSymbolsBox'>
                    <div className='InternshipTableSymbol'><img src={Chart} alt="Chart" /></div>
                    <div className='InternshipTableSymbol'><img src={Profile} alt="Profile" /></div>
                    <div className='InternshipTableSymbol'><img src={More} alt="More" /></div>
                </div>
            </div>
            <div className='InternshipTableSymbolsRow'>
                <div className='InternshipTableSymbolsBox'>
                    <div className='InternshipTableSymbol'><img src={Chart} alt="Chart" /></div>
                    <div className='InternshipTableSymbol'><img src={Profile} alt="Profile" /></div>
                    <div className='InternshipTableSymbol'><img src={More} alt="More" /></div>
                </div>
            </div>
            <div className='InternshipTableSymbolsRow'>
                <div className='InternshipTableSymbolsBox'>
                    <div className='InternshipTableSymbol'><img src={Chart} alt="Chart" /></div>
                    <div className='InternshipTableSymbol'><img src={Profile} alt="Profile" /></div>
                    <div className='InternshipTableSymbol'><img src={More} alt="More" /></div>
                </div>
            </div>
            <div className='InternshipTableSymbolsRow'>
                <div className='InternshipTableSymbolsBox'>
                    <div className='InternshipTableSymbol'><img src={Chart} alt="Chart" /></div>
                    <div className='InternshipTableSymbol'><img src={Profile} alt="Profile" /></div>
                    <div className='InternshipTableSymbol'><img src={More} alt="More" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InternshipsTable