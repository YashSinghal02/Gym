import React, { useState, useEffect } from 'react';

const testimonials = [
  { name: "Gofret", logo: "https://yashsinghal011.github.io/Only-Images/logo_03.png" },
  { name: "Speak Training", logo: "https://github.com/YashSinghal011/Only-Images/blob/main/logo_02.png?raw=true" },
  { name: "Krempeng", logo: "https://github.com/YashSinghal011/Only-Images/blob/main/logo_05.png?raw=true" },
  { name: "Wild Sport", logo: "https://github.com/YashSinghal011/Only-Images/blob/main/logo_04.png?raw=true" },
  { name: "Krempeng", logo: "https://github.com/YashSinghal011/Only-Images/blob/main/logo_05.png?raw=true" },
  { name: "Wild Cat", logo: "https://github.com/YashSinghal011/Only-Images/blob/main/logo_06.png?raw=true" },
];

const ImageTestimonialCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.name} className="col-4 col-md-2 mb-4">
            <div className={`card h-100 border-0 ${index === activeIndex ? 'active-card' : ''}`}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <img 
                  src={testimonial.logo} 
                  alt={testimonial.name}
                  className="img-fluid mb-2"
                  style={{ 
                    maxHeight: index === activeIndex ? '90px' : '90px',
                    maxWidth: index === activeIndex ? '150px' : '150px',
                    objectFit: 'contain',
                    transition: 'all 0.3s ease',
                    opacity: index === activeIndex ? 1 : 0.6,
                    filter: index === activeIndex ? 'none' : 'grayscale(100%)'
                  }}
                />
                <p className="text-muted text-center small">{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTestimonialCarousel;