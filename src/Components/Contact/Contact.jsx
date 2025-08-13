import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import msg_icon from '../../assets/msg_icon.png'
import location_icon from '../../assets/location_icon.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c3463da6-f183-402a-b38b-b50f1a6d30c1");

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
    <div className='contact'>
      <div className="contact-col">
        <h3>
          Send me a message <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p>Whether you’re seeking clarity, spiritual guidance, or simply curious about what the universe has in store for you — I’m here to help.</p>
        <p>Feel free to reach out for bookings, queries, collaborations, or just to say hi. Let’s connect and begin your journey of self-discovery.</p>
        <ul>
          <li><img src={phone_icon} alt="" />Call / WhatsApp: +91-XXXXXXXX92</li>
          <li><img src={mail_icon} alt="" />Email: tarottalesbynaincy@gmail.com</li>
          <li><img src={location_icon} alt="" />Location: Online sessions available globally</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter Your Name' required />
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter Your Mobile Number' required />
          <label htmlFor="service">Select Your Service</label>
          <select id="service" name="service" required defaultValue="">
            <option value="" disabled>Select a service</option>
            <option value="Future Insights">Future Insights</option>
            <option value="Career & Finance Reading">Career & Finance Reading</option>
            <option value="Love & Relationship Reading">Love & Relationship Reading</option>
            <option value="Chakra Guidance & Healing">Chakra Guidance & Healing</option>
          </select>
          <label>Write Your Message</label>
          <textarea name="message" rows={6} placeholder='Enter Your Message'></textarea>
          <button type='reset' className='Formbtn'>Reset</button>
          <button type='submit' className='Formbtn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
