import Image from "next/image";
import Hero from "@/public/assets/Hero.svg";

const HeroSection: React.FC = () => {
  return (
    <div className="mx-10 relative">
      <Image src={Hero} alt="" className="w-full h-full object-cover rounded-3xl border" />
      <div className="absolute">
        <h1>Find your favorite place here!</h1>
        <p>The best prices for over 2 million properties worldwide</p>
      </div>
    </div>
  );
};

export default HeroSection;
