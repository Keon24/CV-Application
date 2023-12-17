import React from 'react'
import './educationdisplay.css'

function EducationDisplay({educationDisplayData}) {
  return (
<div className='educationdisplay-container'>
    <h2>Your Education</h2>
    <div className='education-display'>
      <form>
      <label htmlFor='school'>
            <input
            type='text'
            id='school'
            value={educationDisplayData.school}
            readOnly
            />
   
        </label>
        <label htmlFor='degree'>
            <input
            type='text'
            id='degree'
            value={educationDisplayData.degree}
            readOnly
            />
   
        </label>

            </form>
    </div>


</div>
  )
}

export default EducationDisplay