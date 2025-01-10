import React from 'react'
import "./Contact.css"
import map from "../../assets/map.avif"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9366309f-b1a9-4c3d-bf62-7795548e1a67");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };










  return (
    <div class="container my-4" id="contact">
    <h3 class="fs-2 text-center my-4">Contect Us</h3>
    <div class="row">
        <div class="col-6 img">
           <img src={map} style={{width: '100%', borderRadius:'10px'}}/>
        </div>
        <div class="col-6">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" placeholder="Your Name " name='name' required/>

                <label>Phone</label>
                <input type="tel" placeholder="Your Phone " name='phone' required/>
                <label>Email</label>
                <input type="email" placeholder="Your email" name='email' required/>

                <label>Message</label><br/>
                <textarea  id="" rows="3" name='message'></textarea>
                <button class="send-btn">Send Message</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
</div>
  )
}

export default Contact