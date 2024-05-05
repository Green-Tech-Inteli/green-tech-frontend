import { useEffect, useRef } from 'react';
import error from '../../assets/error-404.png';
import Footer from '../general-components/Footer';
import Header from '../general-components/Header';
import HeroContent from '../general-components/HeroContent';
import CustomScrollbar from '../general-components/CustomScrollBar';

function Error() {
    const nextSectionRef = useRef<HTMLDivElement>(null);

    const scrollToNextSection = () => {
      if (nextSectionRef.current) {
        nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    useEffect(() => {
        scrollToNextSection();
    }, []);

  return (
    <div>
        <Header />
        <HeroContent />
        <CustomScrollbar />
        <div ref={nextSectionRef} className="h-screen bg-green-950 bg-opacity-90 bg-center flex flex-col justify-center items-center">
          <img width="720" height="440" src={error} alt="404" />
          <h1 className='text-lg text-white'>Página não encontrada, tem certeza que essa página realmente existe ?</h1>
        </div>
        <Footer />
    </div>
  );
}

export default Error;