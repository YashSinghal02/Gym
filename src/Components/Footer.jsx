import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();

    const handleJoinNow = () => {
      navigate('/classses', { state: { WhoAreWe: 'Strength Lab' } });
    };
  return (
    <div>
      
      {/* <footer>
    <div className="container">
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="logofoot mb-3">
                    <img src={logo} alt="Strength
 lab logo"/> Strength
 lab
                </div>
                <p className="text-muted">When an unknown printer took galle tyand scram bled it to make typnknown pret specimen book printer took galle of tyand scram.</p>
                <div className="social-icons mt-3">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <h5>Our Classes</h5>
                <div className="red-line"></div>
                <ul className="text-muted">
                    <li>Fitness Classes</li>
                    <li>Aerobics Classes</li>
                    <li>Power Yoga</li>
                    <li>Lean Machines</li>
                    <li>Full-Body Strength</li>
                </ul>
            </div>
            <div className="col-md-4 mb-4">
                <h5>Working Ours</h5>
                <div className="red-line"></div>
                <ul className="text-muted">
                    <li>Monday - Friday:</li>
                    <li>7:00am-11:00pm</li>
                    <li>Saturday:</li>
                    <li>7:00am-9:00pm</li>
                    <li>Sunday Close</li>
                </ul>
            </div>
        </div>
        <hr/>
        <div className="text-center text-muted">
            <small>&copy; 2024 All Rights Are reserved By <b>Yash Singhal</b></small>
        </div>
    </div>
</footer> */}

<footer>
        <div className="container p-5">
            <div className="row">
                <div className="col-md-3 mb-4 footer-about">
                    <h4 className="section-title">About</h4>
                    <div className="red-line"></div>
                    <p>Welcome to our gym, where we are dedicated to helping you achieve your fitness goals in a supportive and energetic environment.</p>
                    <div className="contact-info">
                        <p><i className="fas fa-map-marker-alt"></i> Majra,Dehradun</p>
                        <p><i className="fas fa-phone"></i> 123-133-4347</p>
                        <p><i className="fas fa-envelope"></i> Strength
 Lab@gmail.com</p>
                    </div>
                    <img src={logo} alt="Strength
 Lab logo" className="logofoot mt-3"/>
                </div>
                <div className="col-md-3 mb-4">
                    <h4 className="section-title">Our Classes</h4>
                    <div className="red-line"></div>
                    <ul className='footul'>
                        <li><a className='foota' href="" onClick={handleJoinNow}>Fitness Classes</a></li>
                        <li><a className='foota' href="" onClick={handleJoinNow}>Aerobics Classes</a></li>
                        <li><a className='foota' href="" onClick={handleJoinNow}>Power Yoga</a></li>
                        <li><a className='foota' href="" onClick={handleJoinNow}>Lean Machines</a></li>
                        <li><a className='foota' href="" onClick={handleJoinNow}>Full-Body Strength</a></li>
                    </ul>
                </div>
{/*  */}
<img src="https://github.com/YashSinghal001/Images-Only/blob/main/footer-2.png?raw=true" className='rocket' alt="" />


{/*  */}
                <div className="col-md-3 mb-4">
                    <h4 className="section-title">Working Hours</h4>
                    <div className="red-line"></div>
                    <ul>
                        <li><strong className='footer-days'>Sunday-Monday:</strong></li>
                        <li className='footer-days'>4.00am-10.00pm</li>
                        <li><strong className='footer-days'> Saturday:</strong></li>
                        <li className='footer-days'>5.00am-10.00pm</li>
                        <li><strong className='footer-days'>Sunday Close</strong></li>
                    </ul>
                </div>
                <div className="col-md-3 mb-4">
                    <h4 className="section-title">Gallery</h4>
                    <div className="red-line"></div>
                    <div className="row">
                        <div className="col-4 mb-3"><img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/03/testimonial-3-155x154.jpg" alt="Gallery 1" className="gallery-img"/></div>
                        <div className="col-4 mb-3"><img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/03/testimonial-2-150x150.png" alt="Gallery 2" className="gallery-img"/></div>
                        <div className="col-4 mb-3"><img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/03/pexels-photo-6455851-1-150x150.jpg" alt="Gallery 3" className="gallery-img"/></div>
                        <div className="col-4 mb-3"><img src="	https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/03/blog-2-150x150.jpg" alt="Gallery 4" className="gallery-img"/></div>
                        <div className="col-4 mb-3"><img src="	https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/03/blog-5-150x150.jpg" alt="Gallery 5" className="gallery-img"/></div>
                        <div className="col-4 mb-3"><img src="	https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/03/blog-7-150x150.jpg" alt="Gallery 6" className="gallery-img"/></div>
                    </div>
                </div>
            </div>
            <hr className="mt-4 mb-4" style={{backgroundColor:"#333"}}/>
            <div className="row">
                <div className="col-md-6">
                    <p className='copyright'>&copy; 2040 Strength
 Lab. All Rights Reserved By Yash Singhal</p>
                </div>
                <div className="col-md-6 text-md-end">
                    <div className="social-icons">
                        <a target='blank' href="https://github.com/YashSinghal02"><i className="fab fa-github"></i></a>
                        <a target='blank' href="https://www.linkedin.com/in/yashsinghal-fullstackdeveloper/"><i className="fab fa-linkedin-in"></i></a>
                        <a target='blank' href="https://www.instagram.com/yashsinghal21/"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <a href="#" className="back-to-top"><i className="fas fa-arrow-up"></i></a>


<a href="#" className="back-to-top"><i className="fas fa-arrow-up"></i></a>


    </div>
  )
}
