import partner1 from "../../../assets/btg-pactual.svg";
import partner2 from "../../../assets/start.svg";
import partner3 from "../../../assets/LogoElectroTech.svg";


function CarouselPartners() {
  const logos = [partner1, partner2, partner3, partner1, partner2, partner3, partner1, partner2, partner3, partner1, partner2, partner3];

  return (
    <div className="slider relative overflow-hidden bg-gray-300 h-100 mx-auto">
      <div className={"slide-track flex w-[calc(250px*12)] animate-scroll"/*animate-scroll*/}>
        {logos.map((logo, index) => (
          <div key={index} className="slide w-[250px] p-2">
            <img src={logo} alt={`Partner Logo ${index}`} className="h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselPartners;