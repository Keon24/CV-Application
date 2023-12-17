import { useState } from "react";
import './skills.css'

const Skills  = ({onSubmit}) => {
 

  //declare a state variable for formData and include the names of the object
    const [skillsFormData, setSkillsFormData] = useState ({
      Skills1:'',
      Skills2:'',
      Skills3:'',
      Skills4:'',
      Skills5:''
    })
    //create a event handler function to update formdata
       const handleSkillsInputChange = (e) => {
          //extract the objects using existing state and update with a dynamic key
        const {name, value} = e.target
        setSkillsFormData((prevData) => ({...prevData, [name]:value }));

       }
           //Use a function event that will be triggered whem the form is submitted
           const handleSkillsSubmit = (e) => {
          e.preventDefault()
          onSubmit(skillsFormData)
          setSkillsFormData({Skills1:'', Skills2:'',Skills3:'', Skills4:'', Skills5:'',})

           }
  return (
    //add the prop to your form and create inputfields
    <div className='skills-container'>
      <h2>Skills</h2>
      <form onSubmit={handleSkillsSubmit}>
        <div className='skills-input'>
          <input type='text' name='skills1' placeholder='Language or Technology' onChange={handleSkillsInputChange}/>
          <input type='text' name='skills2' placeholder='Language or Technology' onChange={handleSkillsInputChange}/>
          <input type='text' name='skills3' placeholder='Language or Technology' onChange={handleSkillsInputChange}/>
          <input type='text' name='skills4' placeholder='Language or Technology' onChange={handleSkillsInputChange}/>
          <input type='text' name='skills5' placeholder='Language or Technology' onChange={handleSkillsInputChange}/>
          <button id='button-skills'>Submit</button>
        </div>

      </form>

    </div>
  )
}

export default Skills