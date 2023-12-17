import React from 'react';
import './experiencedisplay.css'
function ExperienceDisplay({ experienceDisplayData }) {
  return (
    <div id='experian'>
    <h2>Experience:</h2>
    <form>
      <label htmlFor='position'>
        Position:
        <input
          type='text'
          id='position'
          value={experienceDisplayData.experience1}
          readOnly
        />
      </label>
      <label htmlFor='company'>
        Company:
        <input
          type='text'
          id='company'
          value={experienceDisplayData.experience2}
          readOnly
        />
      </label>
      <label htmlFor='start-date'>
        Start Date:
        <input
          type='text'
          id='start-date'
          value={experienceDisplayData.experience3}
          readOnly
        />
      </label>
      <label htmlFor='end-date'>
        End Date:
        <input
          type='text'
          id='end-date'
          value={experienceDisplayData.experience3}
          readOnly
        />
      </label>
      <label htmlFor='daily-task'>
        Daily Task:
        <input
          type='text'
          id='daily-task'
          value={experienceDisplayData.experience3}
          readOnly
        />
      </label>
      <label htmlFor='position1'>
        Position:
        <input
          type='text'
          id='position1'
          value={experienceDisplayData.experience3}
          readOnly
        />
      </label>
      <label htmlFor='company1'>
        Company:
        <input
          type='text'
          id='company1'
          value={experienceDisplayData.experience3}
          readOnly
        />
      </label>
      <label htmlFor='start-date1'>
        Start Date:
        <input
          type='text'
          id='start-date1'
          value={experienceDisplayData.experience3}
          readOnly
        />
      </label>
      <label htmlFor='end-date1'>
        End Date:
        <input
          type='text'
          id='end-date1'
          value={experienceDisplayData.experience3}
          readOnly
        />
      </label>
      <label htmlFor='daily-task1'>
        Daily Task:
        <input
          type='text'
          id='daily-task1'
          value={experienceDisplayData.experience3}
          readOnly
        />
      </label>
    </form>
  </div>
);
}

export default ExperienceDisplay;

