import { Music, Star } from "lucide-react";
import { Button } from "../ui/button";

interface VenueSidebarProps {
  venue: {
    capacity: number;
    musicTypes: string[];
    rating: number;
    socialLinks: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    };
    website: string;
  };
}

const VenueSidebar = ({ venue }: VenueSidebarProps) => {
  return (
    <div className="lg:sticky lg:top-20 space-y-6">
      {/* Capacity */}
      <div className="p-6 bg-card rounded-lg">
        <h3 className="font-semibold mb-2">Capacity</h3>
        <p className="text-2xl font-bold">{venue.capacity} people</p>
      </div>

      {/* Music Types */}
      <div className="p-6 bg-card rounded-lg">
        <h3 className="font-semibold mb-4">Music</h3>
        <div className="flex flex-wrap gap-2">
          {venue.musicTypes.map((type) => (
            <span
              key={type}
              className="px-3 py-1 bg-secondary rounded-full text-sm"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="p-6 bg-card rounded-lg">
        <h3 className="font-semibold mb-2">Rating</h3>
        <div className="flex items-center">
          <Star className="w-6 h-6 text-gold" />
          <span className="text-2xl font-bold ml-2">{venue.rating}</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="p-6 bg-card rounded-lg">
        <h3 className="font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          {Object.entries(venue.socialLinks).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              className="text-muted-foreground hover:text-gold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <Button className="w-full bg-gold hover:bg-gold/90 text-black">
          Book Now
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.open(venue.website, "_blank")}
        >
          Visit Website
        </Button>
      </div>
    </div>
  );
};

export default VenueSidebar;