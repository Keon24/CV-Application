import { useState } from "react"
import './education.css'



const Education = ({onSubmit}) => {
//declare a state variable for formData and include the names of the object
const [educationFormData,setEducationFormData] = useState ({
  school:'',
  degree:''
});
  //create a event handler function to update formdata
  const handleEducationInputChange = (e) => {
 //extract the objects using existing state and update with a dynamic key
 const {name, value} = e.target
 setEducationFormData((prevData) => ({...prevData, [name]: value}));
  };
     

     //Use a function event that will be triggered whem the form is submitted
     const handleEducationSubmit = (e) => {
      e.preventDefault()
      onSubmit(educationFormData);
     setEducationFormData ({school:'',degree:''})
     };
      //add the prop to your form and create inputfields

  return (
<div className='education-container'>
  <h2>Education</h2>
  <form onSubmit={handleEducationSubmit}>
    <div className='education-input'>
     <input type='text' name='school' placeholder='school' onChange={handleEducationInputChange} />
     <input type='text' name='degree' placeholder='degree' onChange={handleEducationInputChange} />
     <button id='button'>Submit</button>
    </div>
  </form>

</div>
  )
}

export default Education