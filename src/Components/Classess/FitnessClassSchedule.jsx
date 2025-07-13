import React, { useState } from 'react';

import './Class.css'; // Make sure to create this file with all the CSS

const classCategories = ['All Classes', 'Cardio', 'Dance', 'Mind & Body', 'Recovery'];

const classData = [
  {
    category: 'Cardio',
    name: 'BODY STEP',
    time: 'WEDNESDAY: 9:00AM',
    description: 'BodyStep is a high-energy, full-body workout that combines cardio, strength, and fun step routines to boost fitness and burn calories.',
    duration:"Duration : 45 minutes",
    session:"Session : 4 / Week",
    cardNumber: 1
  },
  {
    category: 'Mind & Body',
    name: 'YOGA FLOW',
    time: 'TUESDAY: 6:00AM',
    description: 'levate your practice with Power Yoga, a challenging, fast-paced flow that enhances strength, endurance, and flexibility.',
    duration:"Duration : 90 minutes",
    session:"Session : 3 / weeks",
    cardNumber: 2
  },
  {
    category: 'Cardio',
    name: 'Awesome Abs',
    time: 'MONDAY: 7:00PM',
    description: 'Join our Awesome Abs class for an intense core workout designed to strengthen and sculpt your midsection in just 30 minutes!',
    duration:"Duration : 35 minutes",
    session:"Session : 3 / weeks",
    cardNumber: 3
  },
  {
    category: 'Recovery',
    name: 'Advanced Step',
    time: 'Wednesday: 12:00am',
    description: 'Take your cardio to the next level with Advanced Step, a high-energy workout combining complex step routines with strength-building moves.',
    duration:"Duration : 60 minutes",
    session:"Session : 4 / Week",
    cardNumber: 4
  },

  {
    category: 'Cardio',
    name: 'Pilates',
    time: 'Monday: 8:00am',
    description: '    Strengthen your core and improve flexibility with Pilates, a low-impact workout focused on controlled movements and body alignment.',
    duration:"Duration : 80 minutes",
    session:"Session : 2 / Week",
    cardNumber: 5
  },

  {
    category: 'Cardio',
    name: 'New Body',
    time: 'Saturday: 9:00am',
    description: 'Transform your fitness with New Body, a full-body workout combining cardio and strength exercises to tone and sculpt every muscle.',
    duration:"Duration : 90 minutes",
    session:"Session : 4 / Week",
    cardNumber: 6
  },

  {
    category: 'Dance',
    name: 'Ballet Fitness',
    time: 'Friday: 11:00am ',
    description:" Ballet Fitness is a dynamic workout that blends ballet techniques with cardio and strength training to enhance flexibility, posture, and core strength.",
    duration:"Duration : 90 minutes",
    session:"Session : 3 / Week",
    cardNumber: 7
  },

  {
    category: 'Dance',
    name: 'Bodyblance',
    time: 'Friday: 9:00am',
    description: ' BodyBalance is a yoga-based class that combines elements of Tai Chi and Pilates to improve flexibility, strength, and mindfulness.',
    duration:"Duration : 60 minutes",
    session:"Session : 4 / Week",
    cardNumber:8
  },

  {
    category: 'Cardio',
    name: 'Grit Strength',
    time: 'Wednesday: 12:00am',
    description: 'Grit Strength is a high-intensity interval training (HIIT) class designed to build muscle and burn fat through short, intense bursts of strength exercises',
    duration:"Duration : 60 minutes",
    session:"Session : 3 / Week",
    cardNumber: 9
  },

  {
    category: 'Dance',
    name: 'Zumba Athletic',
    time: 'Tuesday: 6:00am',
    description: ' Zumba Athletic combines high-energy dance moves with athletic conditioning exercises for a fun, full-body cardio workout.',
    duration:"Duration : 90 minutes",
    session:"Session : 2 / Week",
    cardNumber: 10
  },
  {
    category: 'Recovery',
    name: 'Flexible Strength',
    time: 'Monday: 9:00am',
    description: ' Flexible Strength is a fusion class that blends stretching and strength exercises to enhance flexibility, mobility, and overall muscle tone',
    duration:"Duration : 45 minutes",
    session:"Session : 3 / Week",
    cardNumber: 11
  },
  {
    category: 'Mind & Body',
    name: 'Hot Yoga',
    time: 'Tuesday: 6:00am',
    description: 'Hot Yoga is a challenging yoga class performed in a heated room to increase flexibility, detoxify the body, and boost mental focus.',
    duration:"Duration :50 minutes",
    session:"Session : 3 / Week",
    cardNumber: 12
  },
  
];

const FlipCard = ({ cardData }) => (
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className={`flip-card-front${cardData.cardNumber}`}>
        <p className="titlecard">{cardData.category}</p>
        <h1 className="titlecardtitle">{cardData.name}</h1>
        <p className="timingclass">{cardData.time}</p>
      </div>
      <div className={`flip-card-back${cardData.cardNumber}`}>
        {/* <h1 className="titlecardback">{cardData.name}</h1> */}
        <p className="aboutclas">{cardData.description}</p>
        <h3 className="titlecardback">{cardData.duration}</h3>
        <h3 className="titlecardback">{cardData.session}</h3>
      </div>
    </div>
  </div>
);

const FitnessFlipCards = () => {
  const [activeCategory, setActiveCategory] = useState('All Classes');

  const filteredClasses = activeCategory === 'All Classes'
    ? classData
    : classData.filter(cls => cls.category === activeCategory);

  return (
    <div className="container mt-5 pt-5 pb-5 mt-2">
      <div className="d-flex justify-content-center mb-4 flex-wrap">
        {classCategories.map(category => (
          <button
            key={category}
            className={`classesbtn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="row">
        {filteredClasses.map((cls, index) => (
          <div key={index} className="col-md-6 col-lg-4 mt-5 mb-2">
            <FlipCard cardData={cls} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessFlipCards;