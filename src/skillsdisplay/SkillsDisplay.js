import React from 'react'
import './skillsdisplay.css'

function SkillsDisplay({skillsDisplayData}) {
  return (
    <div className='skillsdisplay-container'>
     <h2>Your Skills</h2>
     <form>
        <label htmlFor='language1'>
            <input
            type='text'
            id='language1'
            value={skillsDisplayData.skills1}
            readOnly
            />
   
        </label>
        <label htmlFor='language2'>
            <input 
            type='text'
            id='language2'
            value={skillsDisplayData.skills2}
            readOnly
            />
            
        </label>
        <label htmlFor='language3'>
            <input 
            type='text'
            id='language3'
            value={skillsDisplayData.skills3}
            readOnly
            />
            
        </label>
        <label htmlFor='language54'>
            <input 
            type='text'
            id='language2'
            value={skillsDisplayData.skills4}
            readOnly
            />
            
        </label>
        <label htmlFor='language5'>
            <input 
            type='text'
            id='language5'
            value={skillsDisplayData.skills5}
            readOnly
            />
            
        </label>
     </form>
    </div>
  )
}

export default SkillsDisplay