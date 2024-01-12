import React from 'react';
import { FaBook, FaSearch, FaRegBookmark, FaRegClock, FaAdjust, FaCog } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

const EbookReaderFeatures = () => {
  const features = [
    {
      title: 'Extensive Library',
      description: 'Access a vast collection of e-books across genres and subjects.',
      icon: <FaBook className='lg:text-9xl  md:text-8xl sm:text-6xl ' />, // Decrease font size on mobile
    },
    {
      title: 'Search Functionality',
      description: 'Effortlessly search for your favorite books or topics of interest.',
      icon: <FaSearch className='lg:text-9xl mmd:text-8xl sm:text-6xl ' />, // Decrease font size on mobile
    },
    {
      title: 'Bookmarking',
      description: 'Bookmark your progress and easily pick up where you left off.',
      icon: <FaRegBookmark className='lg:text-9xl md:text-8xl sm:text-6xl ' />, // Decrease font size on mobile
    },
    {
      title: 'Reading History',
      description: 'Track your reading history and review previously read books.',
      icon: <FaRegClock className='lg:text-9xl  md:text-8xl sm:text-6xl ' />, // Decrease font size on mobile
    },
    // {
    //   title: 'Customizable Settings',
    //   description: 'Adjust font size, background color, and more for a personalized reading experience.',
    //   icon: <FaAdjust />,
    // },
    // {
    //   title: 'Configuration Options',
    //   description: 'Fine-tune settings such as language, reading preferences, and notifications.',
    //   icon: <FaCog />,
    // },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default EbookReaderFeatures;
