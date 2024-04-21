import React from "react";
import './SearchJob.css';
export const SearchJob=()=>{
    return(
            <form className="my-form ">
        
              <h2 className="form-title">Register &amp; Find Your Jobs</h2><br></br>
             <div className="form-inline ">
              <div className="form-group mx-2">
                <input type="text" className="form-control" id="from-1" placeholder="Keywords" />
              </div>
        
              <div className="form-group  mx-2">
                <select className="form-control " id="from-1">
                  <option value="" className="active">Select Field</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                 
                </select>
              </div>
        
              <div className="form-group  mx-2">
                <select className="form-control" id="from-1">
                  <option value="">Select Location</option>
                  <option value="location1">Location 1</option>
                  <option value="location2">Location 2</option>
                
                </select>
              </div>
              <button type="submit" className="btn btn-primary mx-2">
              <i class="fa fa-search" style={{color:"white", padding:"5px"}}></i>
              </button>
              </div>
            </form>
        
        
  )
};

