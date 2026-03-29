import React, { useEffect } from 'react';
import hero from '../assets/hero.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

export default function Home1() {

  useEffect(() => {
    // ✅ Preload images
    [hero, hero2, hero3].forEach((img) => {
      const image = new Image();
      image.src = img;
    });

    // ✅ Initialize Bootstrap carousel with faster transition
    const carouselElement = document.querySelector('#carouselExampleAutoplaying');

    if (carouselElement && window.bootstrap) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 2500,
        ride: 'carousel',
        pause: false,
        wrap: true,
        touch: true
      });
    }

  }, []);

  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src={hero} className="heroimg" alt="hero1" />
            <div className="innertxt">
              <h1>MAKE YOUR BODY</h1>
              <h3>Fit & Perfect</h3>
            </div>
          </div>

          <div className="carousel-item">
            <img src={hero2} className="heroimg" alt="hero2" />
            <div className="innertxt">
              <h1>Crushing Goals</h1>
              <h3>& making record</h3>
            </div>
          </div>

          <div className="carousel-item">
            <img src={hero3} className="heroimg" alt="hero3" />
            <div className="innertxt">
              <h1>Pain is temporary</h1>
              <h3>Pride is forever</h3>
            </div>
          </div>

        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
    </div>
  );
}