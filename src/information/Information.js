import React, {useState} from 'react'
import './information.css';

//Allow access to the prop onDataSubmit
const Information = ({onDataSubmit}) => {
//declare a state variable with an object containing name and emaol
    const [formData, setFormData] = useState ({
        firstname: '',
        lastname: '',
        jobTitle:''

    });

   

//create a event handler function to update formdata
const handleInputChange = (e) => {
    const {name,value} = e.target
    setFormData ((prevData) => ({...prevData, [name]: value}));
}
//create new objects using existing state and update it 

    //Use a function event that will be triggered whem the form is submitted
   const handleSubmit = (e) => {
    e.preventDefault();
    onDataSubmit(formData);
    setFormData({firstname: '', lastname:'', jobtitle:''});;
   }
    
  return (
    <div className='information-container'>
        <h2>Personal Information</h2>
        <form onSubmit= {handleSubmit}>
           <input type='text' name='firstname' placeholder='First Name' onChange={handleInputChange}/>
           <input type='text' name='lastname' placeholder='Last Name' onChange={handleInputChange}/>
           <input type='text' name='jobtitle' placeholder='Job title' onChange={handleInputChange}/>
           <button type='submmit'>Submit</button>
        </form>

    </div>
  )
}

export default Information