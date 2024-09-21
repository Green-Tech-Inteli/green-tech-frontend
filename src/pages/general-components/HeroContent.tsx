import { useRef } from 'react';
import esgImage from './../../assets/esg.png';

const HeroContent = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="relative h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${esgImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center text-white">
          <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-4">
            Construa o Futuro melhor com a Tecnologia e os Princípios ESG
          </h1>
          <p className="text-lg md:text-xs lg:text-sm xl:text-xl text-gray-300 mb-6">
            Descubra como inovação tecnológica e práticas ESG podem transformar negócios e gerar um legado positivo para o planeta.
          </p>
            <button className="md:text-sm lg:text-lg px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-yellow-700">
              Saiba mais
            </button>
          </div>
          <div
            className="absolute bottom-8 animate-bounce cursor-pointer rounded-3xl hover:bg-gray-200 p-3 hover:bg-opacity-60"
            onClick={scrollToNextSection}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div ref={nextSectionRef}></div>
    </>
  );
};

export default HeroContent;