import React from 'react'
import "./Programs.css" 
import program_1 from "../../assets/edusity_assets/program-1.png"
import program_2 from "../../assets/edusity_assets/program-2.png"
import program_3 from "../../assets/edusity_assets/program-3.png"
import program_icon_1 from "../../assets/edusity_assets/program-icon-1.png"
import program_icon_2 from "../../assets/edusity_assets/program-icon-2.png"
import program_icon_3 from "../../assets/edusity_assets/program-icon-3.png"
import { Link } from "react-router-dom"; 

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <Link to="/dictionary">
            <img id='side' src={program_icon_1} alt="" />
            <p>code dictionary</p>
            </Link>
        </div>
      </div>
       <div className="program">
        <img src={program_2} alt="" />
         <div className="caption">
            <Link to="/quiz">
            <img src={program_icon_2} alt="" />
            <p>Quizzes</p></Link>
        </div>
      </div>
       <div className="program">
        <img src={program_3} alt="" />
         <div className="caption">
           <Link to="/cgpa">
            <img id='side' src={program_icon_3} alt="" />
            <p>CGPA Calculator</p>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Programs
