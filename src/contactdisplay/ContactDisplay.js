import React from 'react'
import './contactdisplay.css'
function ContactDisplay({contactDisplayData}) {
  return (
    <div className='contact-display'>
        <h2>Your Contact</h2>
        <form>
            <label htmlFor='address'>
                <input
                type='text'
                id='address'
                value={contactDisplayData.address}
                readOnly
                />

            </label>
            <label htmlFor='email'>
                <input
                type='text'
                id='email'
                value={contactDisplayData.email}
                readOnly
                />

            </label>
            <label htmlFor='number'>
                <input
                type='text'
                id='anumber'
                value={contactDisplayData.number}
                readOnly
                />

            </label>
            <label htmlFor='link'>
                <input
                type='text'
                id='address'
                value={contactDisplayData.link}
                readOnly
                />

            </label>
        </form>
        
    </div>
  )
}

export default ContactDisplay

