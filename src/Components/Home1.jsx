import React from 'react'
import hero from '../assets/hero.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'


export default function Home1() {

  return (
    <div>
      
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={hero} className="heroimg" alt="..."/>

<div className="innertxt">
    <h1>MAKE YOUR BODY</h1>
    <h3>Fit & Perfect</h3>
</div>

<div className="innericon">
<a href="https://www.linkedin.com/in/yashsinghal-fullstackdeveloper/" target='blank'><i className="linkdein fa-brands fa-linkedin"></i></a>
<a href="https://github.com/YashSinghal02" target='blank'><i className="git fa-brands fa-github"></i></a>
<a href="https://www.instagram.com/yashsinghal21/" target='blank'><i className="insta fa-brands fa-square-instagram"></i></a>
</div>

    </div>
    <div className="carousel-item">
      <img src={hero2} className="heroimg" alt="..."/>
      <div className="innertxt">
    <h1>Crushing Goals</h1>
    <h3> & making record </h3>
</div>

<div className="innericon">
<a href="https://www.linkedin.com/in/yashsinghal-fullstackdeveloper/" target='blank'><i className="linkdein fa-brands fa-linkedin"></i></a>
<a href="https://github.com/YashSinghal02" target='blank'><i className="git fa-brands fa-github"></i></a>
<a href="https://www.instagram.com/yashsinghal21/" target='blank'><i className="insta fa-brands fa-square-instagram"></i></a>
</div>
    </div>
    <div className="carousel-item">
      <img src={hero3} className="heroimg" alt="..."/>

      <div className="innertxt">
    <h1>Pain is temporary</h1>
    <h3>pride is forever</h3>
</div>

<div className="innericon">
<a href="https://www.linkedin.com/in/yashsinghal-fullstackdeveloper/" target='blank'><i className="linkdein fa-brands fa-linkedin"></i></a>
<a href="https://github.com/YashSinghal02" target='blank'><i className="git fa-brands fa-github"></i></a>
<a href="https://www.instagram.com/yashsinghal21/" target='blank'><i className="insta fa-brands fa-square-instagram"></i></a>
</div>

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




    </div>
  )
}
