import React, {useState} from 'react'
import './experience.css';
//Allow access to the prop onDataSubmit
const Experience = ({onSubmit}) => {
    //declare a state variable with an object containing name and emaol
     const [experienceFormData, setExperienceFormData] = useState ({
        experience1: '',
        experience2: '',
        experience3: '',
        experience4: '',
        experience5: '',

     })
    //create a event handler function to update formdata
      const handleExperienceInputChange = (e) => {
          //extract the objects using existing state and update with a dynamic key
        const {name, value} = e.target
        setExperienceFormData ((prevData) => ({...prevData, [name]: value }));
      }
        //Use a function event that will be triggered whem the form is submitted
       const handleExperienceSubmit = (e) => {
        e.preventDefault ()
        onSubmit (experienceFormData)
        setExperienceFormData ({experience1:'',experience2:'',experience3:'', experience4:'',experience5:''});

       }
  return (
    
    <div className='Experience-Container'>
        <h2>Work Experience</h2>
        <form onSubmit= {handleExperienceSubmit}>
            <h4>Experience 1</h4>
            <div id='exp-input'>

        <input type='text' name='experience1' placeholder='Position' onChange= {handleExperienceInputChange}/>
        <input type='text' name='experience2' placeholder='Company' onChange= {handleExperienceInputChange}/>
        <input type='text' name='experience3' placeholder='Startdate' onChange= {handleExperienceInputChange}/>
        <input type='text' name='experience3' placeholder='End date' onChange= {handleExperienceInputChange}/>
        <input type='text' name='experience3' placeholder='Daily task' onChange= {handleExperienceInputChange}/>
        </div>
         <button id='button' type='submit'>Submit</button>
         <h4>Experience 2</h4>
         <div id='exp-input'>
        <input type='text' name='experience1' placeholder='Position' onChange= {handleExperienceInputChange}/>
        <input type='text' name='experience2' placeholder='Company' onChange= {handleExperienceInputChange}/>
        <input type='text' name='experience3' placeholder='Startdate' onChange= {handleExperienceInputChange}/>
        <input type='text' name='experience3' placeholder='End date' onChange= {handleExperienceInputChange}/>
        <input type='text' name='experience3' placeholder='Daily task' onChange= {handleExperienceInputChange}/>
        <button id='button' type='submit'>Submit</button>
        </div>
        </form>

    </div>
  )
}

export default Experience