import React, { useState } from 'react';
import Header from './header/Header';

import Information from './information/Information';
import Display from './display/Display'
import Skills from './skills/Skills'
import SkillsDisplay from'./skillsdisplay/SkillsDisplay'
import GridContainers from './GridContainers';
import Experience from './experience/Experience'
import ExperienceDisplay from './experiencedisplay/ExperienceDisplay'
import Education from './education/Education'
import EducationDisplay from './educationdisplay/EducationDisplay'
import Contact from './contact/Contact'
import ContactDisplay from'./contactdisplay/ContactDisplay'



function App() {
//store the displydata in state handle and return formData
  const [displayedData, setDisplayedData] = useState({});

  const handleDataSubmit = (formData) => {
 
    setDisplayedData(formData);
  };

  const [experienceDisplayData, setExperienceDisplayData] = useState ({});

  const handleExperienceSubmit = (experienceFormData) => {
    setExperienceDisplayData(experienceFormData);
  }

  const [skillsDisplayData,setSkillsDisplayData] = useState ({});
   const handleSkillsSubmit = (skillsFormData) => {
    setSkillsDisplayData(skillsFormData)
   }

   const [educationDisplayData,setEducationDisplayData] = useState ({})
   const handleEducationSubmit = (educationFormData) => {
    setEducationDisplayData(educationFormData)
   }

   const [contactDisplayData,setContactDisplayData] = useState ({})
   const handleContactSubmit = (contactFormData) => {
    setContactDisplayData(contactFormData)
   }
  return (
    <div>
      <Header />
       
      <GridContainers>
      <Information onDataSubmit={handleDataSubmit} />
      <Display displayedData={displayedData}/>
    
        
        
      <Experience onSubmit= {handleExperienceSubmit}/>
      <ExperienceDisplay experienceDisplayData= {experienceDisplayData}/>
      
      <Skills onSubmit={handleSkillsSubmit}/>
      <SkillsDisplay skillsDisplayData= {skillsDisplayData}/>

      <Education onSubmit={handleEducationSubmit}/>
      <EducationDisplay educationDisplayData= {educationDisplayData}/>

      <Contact onSubmit={handleContactSubmit}/> 
      <ContactDisplay contactDisplayData={contactDisplayData}/>
      </GridContainers>
    </div>
  );
}

export default App;


