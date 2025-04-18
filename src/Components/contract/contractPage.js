import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contractpage() {
let[formdata,setformdata]=useState({
    name:"",
    email:"",
    messages:"",
});

const handleinput=(e)=>{
const fieldname=e.target.name;
const newvalue=e.target.value;
setformdata((currdata)=>({
    ...currdata,
    [fieldname]: newvalue,
}))

}

const handlesubmit=async(event)=>{
event.preventDefault();
const { name, email, messages } = formdata;
try{
    if(!name || !email || !messages){
        toast.warn("All fields must be filled");
        return;
    }
    let respon= await axios.post(`${process.env.REACT_APP_API_URL}/contract`,
       { name,
        email,
        messages,}
    );
    if(respon.status===201){
        toast.success("Thanks for your message! I'll respond soon.");
        setformdata({ name: "", email: "", messages: "" });
    }
}
catch(err){
    console.error(err);
    toast.warn("Something went wrong. Please try again later.");

}

}


    return (
        <>

            <div className='container mt-2 mb-5 p-4 '>
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-success">Get in Touch</h2>
                    <p className="text-muted">We’d love to hear from you!</p>
                </div>
                <div className='row'>
                    <div className="col-md-6 mb-4 d-flex flex-column gap-4 ps-md-5" >
                        <p>
                            <a href="mailto:bg537763@gmail.com" style={{ textDecoration: "none", color: 'inherit' }}>
                            <i className="fa-solid fa-envelope me-3 text-success" style={{ fontSize: "1.5rem" }}></i>
                            <strong>Email:</strong> bg537763@gmail.com </a>
                        </p>

                        <p>
                            <a
                                href="https://wa.me/919134811468"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <i className="fa-brands fa-whatsapp me-3 text-success" style={{ fontSize: "1.5rem" }}></i>
                                <strong>WhatsApp:</strong> 9134811468
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://www.google.com/maps/place/Barasat,+Kolkata"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <i className="fa-solid fa-location-dot me-3 text-success" style={{ fontSize: "1.5rem" }}></i>
                                <strong>Location:</strong> Barasat, Kolkata
                            </a>
                        </p>


                    </div>
                    <div className="col-md-6">
                    <h4 className="fw-semibold mb-3 text-success">Message Me</h4>
                    <form onSubmit={handlesubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name="name" className="form-control" id="name" placeholder="Enter your name" value={formdata.name}  onChange={handleinput}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email" value={formdata.email} onChange={handleinput} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control"  name="messages" id="message" rows="4" placeholder="Write your message..." value={formdata.messages} onChange={handleinput}></textarea>
                            </div>
                            <button type="submit" className="btn btn-success w-100">Send Message</button>
                        </form>


                    </div>

                </div>
            </div>
            <ToastContainer
  position="top-center"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>

        </>
    );
}

export default Contractpage;