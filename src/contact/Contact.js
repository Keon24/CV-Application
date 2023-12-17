import { useState } from "react";
import './contact.css'

const Contact = ({onSubmit}) => {

 //declare a state variable for formData and include the names of the object
 const [contactFormData,setContactFormData] =  useState({
address:'',
email:'',
number:'',
link:''

 });


   //create a event handler function to update formdata
   const handleContactInputChange = (e) => {
    //create new objects using existing state and update it using spread operator
    const {name,value}= e.target
    setContactFormData((prevData) => ({...prevData,[name]: value}));

   }
        //Use a function event that will be triggered whem the form is submitted
        const handleContactSubmit = (e) => {
            e.preventDefault()
            onSubmit(contactFormData)
            setContactFormData({address:'', email:'', number:'', link:''})
        }
        return (
            //add the prop to your form and create inputfields
            <div className='contact-container'>
                <h2>Contact</h2>
            <div className='contact-input'>
                <form onSubmit={handleContactSubmit}>
                    <input type='text' name='address' placeholder='address' onChange={handleContactInputChange}/>
                    <input type='text' name='email' placeholder='email' onChange={handleContactInputChange}/>
                    <input type='text' name='number' placeholder='number' onChange={handleContactInputChange}/>
                    <input type='text' name='link' placeholder='link' onChange={handleContactInputChange}/>
                    <button id='button'>Submit</button>
                </form>
                
                </div> 
        
            </div>
          )
        }
        
        export default Contact;