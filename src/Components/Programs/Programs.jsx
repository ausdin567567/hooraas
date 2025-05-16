import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program1.png'
import program_2 from '../../assets/program2.png'
import program_3 from '../../assets/program3.png'
import program_4 from '../../assets/program4.png'
import program_5 from '../../assets/program5.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <p>Raas Royalty</p>
            </div>
        </div>
        <div className="program">
            <img src={program_4} alt="" />
            <div className="caption">
                <p>Blacksburg Ki Badmaashi</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <p>River City Raas</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <p>A-Town Showdown</p>
            </div>
        </div>
        <div className="program">
            <img src={program_5} alt="" />
            <div className="caption">
                <p>Raas All Stars</p>
            </div>
        </div>
    </div>
  )
}

export default Programs
