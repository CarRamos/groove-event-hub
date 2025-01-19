import { MapPin } from "lucide-react";

interface VenueHeroProps {
  name: string;
  address: string;
  imageUrl: string;
}

const VenueHero = ({ name, address, imageUrl }: VenueHeroProps) => {
  return (
    <div className="relative h-[60vh] w-full">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute bottom-0 left-0 p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          {name}
        </h1>
        <div className="flex items-center text-white/90">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{address}</span>
        </div>
      </div>
    </div>
  );
};

export default VenueHero;