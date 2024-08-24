import React from "react";
import "./Contact.css";
import themePattern from "/src/assets/theme_pattern.svg";
import mail_icon from "/src/assets/mail_icon.svg";
import location_icon from "/src/assets/location_icon.svg";
import call_icon from "/src/assets/call_icon.svg";
// To make form active We have to get services from contact form provider
// Search:web3forms   and there some code and paste it before return statement
function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    //When we enter email we will get access key and paste here down:
    formData.append("access_key", "b757b163-eccc-410e-a998-87be5db6694d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // If email is sent successfully then.
      alert(res.message);
    }
  };
  return (
    <div id="Contact" className="contact">
      <div className="contact_header">
        <h1>Get In Touch</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="contact_sections">
        <div className="div_left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact_images">
            <img src={mail_icon} alt="" />
            <p>greatstackdev@gmail.com</p>
          </div>
          <div className="contact_images">
            <img src={call_icon} alt="" />
            <p>+772-825-524</p>
          </div>
          <div className="contact_images">
            <img src={location_icon} alt="" />
            <p>CA, United States</p>
          </div>
        </div>
        <div className="div_right">
          <form onSubmit={onSubmit}>
            <div className="input_divs">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="namae" placeholder="Enter your name" />
            </div>
            <div className="input_divs">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="input_divs">
              <label htmlFor="message"> Type your Message Here</label>
              <textarea
                name="message"
                id="meassage"
                placeholder="Enter your Message"
              ></textarea>
            </div>
            <button>Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
