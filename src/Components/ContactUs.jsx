import React,{useState} from "react";
import { Header } from "./Header";
import './Contact.css';
export const ContactUs=()=>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic here to handle form submission, e.g., sending a request to a backend server
        console.log('Form submitted:', formData);
        // Reset form fields after submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };
    
    return(
        <div >
            <Header/>  
    <div>
      <h1 className="contact">Contact Us</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    </div>
    <div >
        <img src="https://images.surferseo.art/2bac3300-6ce0-4174-a46b-65523ad30e66.png" alt=""/>
    </div>
        </div>
    )
}