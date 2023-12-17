import React from 'react'
import './display.css'

const infoDisplay = ({displayedData}) => {
  return (
    <div className='data-container' >
      <h2>Information</h2>
      <form>
        <label>

        <input type='text' value = {displayedData.firstname} readOnly/>
         </label>
        <label>

        <input type='text' value = {displayedData.lastname} readOnly/>
         </label>
        <label>
  
        <input type='text' value = {displayedData.jobtitle} readOnly/>
         </label>
  
      
      </form>
    </div>
  )
}

export default infoDisplay