import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "07b5f6af-7aa9-4475-9d66-13b45108feeb");

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
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out with any questions about the tryout process or if you’d like to sponsor our team. Your feedback, ideas, and suggestions are invaluable as we strive to become the very best version of ourselves as a team.
</p>
            <ul>
                <li><img src={mail_icon} alt="" />hooraas2k@gmail.com</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required />
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}


export default Contact