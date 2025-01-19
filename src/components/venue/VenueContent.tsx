import { MapPin, Music, Star } from "lucide-react";
import { Button } from "../ui/button";

interface VenueContentProps {
  venue: {
    description: string;
    amenities: string[];
    location: {
      lat: number;
      lng: number;
    };
  };
}

const VenueContent = ({ venue }: VenueContentProps) => {
  return (
    <div className="space-y-8">
      {/* About Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-muted-foreground">{venue.description}</p>
      </section>

      {/* Video Preview */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Video Preview</h2>
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground">Video coming soon</span>
        </div>
      </section>

      {/* Location Map */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Location</h2>
        <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground">Map coming soon</span>
        </div>
      </section>

      {/* Amenities */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {venue.amenities.map((amenity) => (
            <div
              key={amenity}
              className="p-4 bg-card rounded-lg flex items-center space-x-2"
            >
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Event cards will go here */}
          <div className="p-8 bg-card rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">No upcoming events</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VenueContent;