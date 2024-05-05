import { useRef, useState, useEffect, useCallback } from 'react';
import techProjects from './projects';
import pauseIcon from './../../assets/pause-button-svgrepo-com.svg';
import playIcon from './../../assets/play-button-svgrepo-com.svg';
import { Link } from 'react-router-dom';

const TechProjectsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrollActive, setIsAutoScrollActive] = useState(true);

  const scrollLeft = () => {
    if (carouselRef.current && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = useCallback(() => {
    if (carouselRef.current) {
      if (currentIndex === techProjects.length - 1) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }
  }, [currentIndex]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        scrollRight();
      }, 3000);
    };

    const stopAutoScroll = () => {
      clearInterval(intervalId);
    };

    if (isAutoScrollActive) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
  }, [currentIndex, isAutoScrollActive, scrollRight]);

  const handleAutoScrollToggle = () => {
    setIsAutoScrollActive(!isAutoScrollActive);
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div
        ref={carouselRef}
        className="flex transition-transform ease-in-out duration-300 overflow-x-hidden scrolling-touch rounded-lg shadow-md"
        style={{ minHeight: '280px' }}
      >
        {techProjects.map((project, index) => (
          <div key={index} className="flex-none w-64 m-4 p-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img className="w-full h-40 object-cover object-center rounded-t-lg" src={project.image} alt={`Projeto ${index + 1}`} />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-600">{project.shortDescription}</p>
                <Link to={`/project/${project.id}`} state={project} className="flex justify-center mt-4 bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 w-full rounded-full">Detalhes</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center ml-2">
        <button
          className={`px-1 rotate-180 bg-black bg-opacity-20 hover:bg-opacity-50 text-gray-100 rounded-full focus:outline-none focus:shadow-outline ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={scrollLeft}
          disabled={currentIndex === 0}
        >
          {'➜'}
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center mr-2">
        <button
          className={`px-1 bg-black bg-opacity-20 hover:bg-opacity-50 text-gray-100 rounded-full focus:outline-none focus:shadow-outline ${currentIndex === techProjects.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={scrollRight}
          disabled={currentIndex === techProjects.length - 1}
        >
          {'➜'}
        </button>
      </div>
      <div className="absolute bottom-0 right-1">
        <button
          className={`relative p-1 opacity-30 rounded-full outline-none text-gray-900 hover:opacity-50`}
          onClick={handleAutoScrollToggle}
        >
          {isAutoScrollActive ? <img width='20px' height='20px' src={pauseIcon} /> : <img width='20px' height='20px' src={playIcon} />}
        </button>
      </div>
    </div>
  );
};

export default TechProjectsCarousel;
