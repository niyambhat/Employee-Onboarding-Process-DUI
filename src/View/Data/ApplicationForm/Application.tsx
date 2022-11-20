import React, {useState} from 'react'
import PersonalDetailsTab from './PersonalDetailsTab'
function Application() {

  return (
    <div>
      <h1>Application Form</h1>
      <div id="personalDetailsTab">
      <h2>Personal Details Tab</h2>
      <div id="aboutMe_group">
      <h1 className='group-title'>About me</h1>
        <div className="form-element">
          <input type="text" name="name" placeholder='First Name'/>
        </div>
        <div className="form-element">
          <input type="text" name="name" placeholder='Last Name'/>
        </div>
      </div>
     
      <div id="location_group">
      <h1 className='group-title'>Location & Position</h1>
      <div className="form-element_text">
        <label>Which state are you located?
          <input type="text" name="name" />
        </label>
        </div>
      </div>
        <div className="form-element">
        <label>What position are you applying for?
          <input type="text" name="name" />
        </label>
        </div>
      </div>

      <div id="selectionCriteriaTab">
      <h2>Selection Criteria Tab</h2>
        <div id="eligibility_group">
        <h1 className='group-title'>Eligibility</h1>
          <div className="form-element">
         <label>Are you Covid Vaccinated?
          <input type="text" name="name" />
         </label>
      </div>

        <div className="form-element">
        <label>Are you allowed to work in Australia?
          <input type="text" name="name" />
        </label>
        </div>
        </div>

        <div id="availability_group">
         <h1 className='group-title'>Availabilty</h1>
         <label>Please Select an available date.
          <input type="text" name="name" />
        </label>
        </div>

        <div id="documents_group">
        <h1 className='group-title'>Documents</h1>
         <label>Please uploadyour documents.
          <input type="text" name="name" />
        </label>
        </div>
      </div>

      <button>Submit</button>
      {/* todo
      <h2>Admin Tab</h2> */}


     </div>
  )
}

export default Application