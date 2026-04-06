
import React from 'react'
import './Contact.css'
import Copynavbar from './Copynavbar'
import { PhoneCall, Mail, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <>
      <Copynavbar />

      <div className="contact-container">

        {/* HEADING */}
        <div className="formheading">
          <h1>Contact Us</h1>
          <p>Get In Touch With Our Team..</p>
        </div>

        <div className="contact-content">

          {/* LEFT SIDE INFO */}
          <div className="contact-info">

            <div className="info-box">
              <PhoneCall />
              <div>
                <h4>Call</h4>
                <p>8998899889</p>
              </div>
            </div>

            <div className="info-box">
              <Mail />
              <div>
                <h4>Email</h4>
                <p>abc@gmail.com</p>
              </div>
            </div>

            <div className="info-box">
              <MapPin />
              <div>
                <h4>Address</h4>
                <p>ABC Location</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <form className="fill">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button>Send Now</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default Contact