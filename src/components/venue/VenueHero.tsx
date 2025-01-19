import { MapPin } from "lucide-react";

interface VenueHeroProps {
  venue: {
    name: string;
    address: string;
    image: string;
  };
}

const VenueHero = ({ venue }: VenueHeroProps) => {
  return (
    <div className="relative h-[60vh] min-h-[400px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${venue.image})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">
            {venue.name}
          </h1>
          <div className="flex items-center text-white/80 animate-fadeIn">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{venue.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueHero;