import React from 'react'

export default function Sections() {
  return (
    <div>

<div className="container mt-5 pt-5">
<div className="row">
    {/* <!-- Address --> */}
    <div className="col-md-4">
        <div className="info-box">
            <i className="fas fa-map-marker-alt"></i>
            <h4>Address</h4>
            <p>Majara, Sharanpur Road,<br/>Dehradun</p>
        </div>
    </div>
    
    {/* <!-- Contact Info --> */}
    <div className="col-md-4">
        <div className="info-box">
            <i className="fas fa-phone-alt"></i>
            <h4>Contact Info</h4>
            <p>+91  123-133-4347<br/> Strength Lab@gmail.com</p>
        </div>
    </div>
    
    {/* <!-- Opening Hours --> */}
    <div className="col-md-4">
        <div className="info-box">
            <i className="fas fa-clock"></i>
            <h4>Opening Hours</h4>
            <p>Mon to Sat: 5AM - 11PM<br/><span>Sunday Closed</span></p>
        </div>
    </div>
</div>
</div>
      
    </div>
  )
}
