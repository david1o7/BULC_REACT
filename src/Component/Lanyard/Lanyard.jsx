import React from 'react'
import { Link } from 'react-scroll'
import './Lanyard.css'
import Navbar from "../Navbar/Navbar.jsx"
import leaf from "../../assets/edusity_assets/leafpic.ico"
import pic1 from "../../assets/BULC/2.png"
import pic2 from "../../assets/BULC/4.png"
import pic3 from "../../assets/BULC/6.png"

const Lanyard = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e5d1143f-b1b2-402d-93fc-523c58604e76");

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
  }

  return (
    <>
    <Navbar/>

    <div className="lanyard-landing">
      {/* Hero Section */}
      <section className="lanyard-hero-section">
        <div className="lanyard-hero-content">
          <h1> <span style={{ backgroundColor: '#000', padding: '12px', borderRadius: '20px', borderTopLeftRadius: '0px' , fontFamily : "Times new roman" }}> BULC</span> Lanyards Are Here.</h1>
          <p>BULC isn’t a product. It’s a promise to never fold.
          And now, you can wear that promise every day.</p>
          <div className="lanyard-hero-buttons">
          <Link to='lanyard-products-section' smooth={true} offset={-30} duration={500} ><button className="lanyard-cta-button primary">Shop Now</button> </Link>
           <Link to='lanyard-contact-section'  smooth={true} offset={-50} duration={500} ><button className="lanyard-cta-button secondary">Custom price Quote</button> </Link>
          </div>
        </div>
        <div className="lanyard-hero-image">
          <div className="lanyard-showcase">
            <div className="lanyard-item">
              <div className="lanyard-card"></div>
              <div className="lanyard-string"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="lanyard-features-section">
        <div className="lanyard-container">
          <h2>Why Choose Our Lanyards?</h2>
          <div className="lanyard-features-grid">
            <div className="lanyard-feature-card">
              <div className="lanyard-feature-icon"><img style={{ height:"100px", width:"auto",}} src={leaf} alt="picture" /></div>
              <h3>Being part of bulc</h3>
              <p>The lanyard shows you are part of the movement.</p>
            </div>
            <div className="lanyard-feature-card">
              <div className="lanyard-feature-icon">🤗</div>
              <h3>Building the community</h3>
              <p> Every lanyard sold increases the reach of the community</p>
            </div>
            <div className="lanyard-feature-card">
              <div className="lanyard-feature-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>High-grade materials that last through daily wear and tear</p>
            </div>
          </div>
        </div>
      </section>

      <section>
      <div style={{ background: "#000"}}>
        <div className="lanyard-content">
            <p style={{ color : "white" , textAlign:"center" ,}}>
       <h2 style={{ textAlign:"center"}}><b>IT'S A STATEMENT.</b></h2>
<br />
         <b>IT SAYS:</b>        
         <ul style={{ listStyleType:"none"}}>
          <li>“I put in the work.”</li>
          <li> “They stopped. I didn’t.”</li>
          <li>“I’m BULC — built under life challenges.”</li>
        </ul>
<br /><br />
      🎯 Why You Need One
      Whether you're on campus, in class, grinding at midnight, or walking into an exam — the BULC lanyard is your daily reminder that you’re not like everyone else.

      It’s for:

      The students who stay disciplined when others slack.

      The silent grinders who want their effort to speak for them.

      Anyone building something bigger than themselves.
    <br /><br />
      🧢 Designs That Speak
      <ul style={{ listStyleType: "none" ,}}>
        <li>🔹 BULC Nation
        You’re part of something bigger. A mindset. A movement.</li>
        <li>🔹 They Slept, I Worked
        When everyone else gave up — you went in harder.</li>
        <li> 🔹 Work Mode
      For the ones who flip the switch and go tunnel vision.</li>

      </ul>
<br /><br />

      💸 Limited Drop
      These lanyards are not mass-produced.
      Once this drop sells out — that’s it.
<br /> <br />
<ul style={{ listStyleType: "none",}}>
  <li>🛒 How to Order</li>
  <li>🔗 Tap the Order Now button under your favorite design.</li>
  <li>🛍️ Pay online (Transfer).</li>
  <li>📦 collect on campus (details at checkout).</li>
</ul>
<br /><br />
      🖤 Support The Mission
      Every lanyard sold helps us reach more people, build tools, and grow the movement.
<br /><br />
<ul style={{ listStyleType: "none"}}>
  <li>📣 Join the Movement</li>
  <li>📸 Tag us wearing your lanyard: #BULCNation</li>
  <li>💬 Share your story with it.</li>
  <li>🎥 It might be featured on our socials.</li>
</ul>
<br /><br />
            </p>
          </div>
        </div>
      </section>

      <section className="lanyard-products-section">
        <div className="lanyard-container">
          <h2>Our Popular Lanyard Styles</h2>
          <div className="lanyard-products-grid">
            <div className="lanyard-product-card">
              <div className="lanyard-product-image basic"> <img style={{ height:"7px" , width:"auto"}} src={ pic1 } alt="" /></div>
              <h3>Basic Lanyard</h3>
              <p>Classic design black</p>
              <span className="lanyard-price">From 2000 NGN </span>
              <Link to='lanyard-contact-form'  smooth={true} offset={-50} duration={500} > <button className="lanyard-order-button">Order Now</button> </Link>
            </div>
            <div className="lanyard-product-card featured">
              <div className="lanyard-product-image premium"> <img style={{ height:"7px" , width:"auto"}} src={ pic2 } alt="" /></div>
              <h3>Premium Lanyard</h3>
              <p>basic design pink</p>
              <span className="lanyard-price">From 2000 NGN </span>
              <Link to='lanyard-contact-form'  smooth={true} offset={-50} duration={500} > <button className="lanyard-order-button">Order Now</button></Link>
            </div>
            <div className="lanyard-product-card">
              <div className="lanyard-product-image custom"> <img style={{ height:"7px" , width:"auto"}} src={ pic3 } alt="" /></div>
              <h3>Custom Lanyard</h3>
              <p>Fully customized to your specifications</p>
              <span className="lanyard-price">From 3000 NGN </span>
              <Link to='lanyard-contact-form'  smooth={true} offset={-50} duration={500} ><button className="lanyard-order-button">Order Now</button></Link>
            </div>
          </div>
        </div>
      </section>


      <section className="lanyard-cta-section">
        <div className="lanyard-container">
          <h2>Ready to Order Your Custom Lanyards?</h2>
          <p>Get started with a free quote and see how we can help your business or event stand out</p>
          <div className="lanyard-cta-buttons">
          <Link to='lanyard-contact-section'  smooth={true} offset={-50} duration={500} > <button className="lanyard-cta-button primary">Get Price Quote</button> </Link>
            <button className="lanyard-cta-button secondary">Call Us: (234) 90 5670 1067</button>
          </div>
        </div>
      </section>

      <section className="lanyard-contact-section">
        <div className="lanyard-container">
          <div className="lanyard-contact-grid">
            <div className="lanyard-contact-info">
              <h3>Get in Touch</h3>
              <div className="lanyard-contact-item">
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>Bulc@gmail.com</p>
                </div>
              </div>
              <div className="lanyard-contact-item">
                <span className="icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>(234) 90-5670-1067</p>
                </div>
              </div>
              <div className="lanyard-contact-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>Babcock uni</p>
                </div>
              </div>
            </div>
            <div className="lanyard-contact-form">
              <h3>Send us an Order</h3>
              <form onSubmit={onSubmit}>
                <div className="lanyard-form-group">
                  <input type="text" name='name' placeholder="Your Name" />
                </div>
                <div className="lanyard-form-group">
                  <input type="email" name='email address' placeholder="Your Email" />
                </div>
                <div className="lanyard-form-group">
                  <input type="phone" name='phone number' placeholder="Your phone number" />
                </div>
                <div className="lanyard-form-group">
                  <textarea name='inquiry' placeholder="Tell us about your lanyard needs"></textarea>
                </div>
                <button type="submit" className="lanyard-submit-button">Send Message</button>
              </form>
              <span>{result}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Lanyard
