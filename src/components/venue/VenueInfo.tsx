import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import VenueMap from "@/components/VenueMap";
import { Event } from "@/lib/supabase";

interface VenueInfoProps {
  description: string;
  videoUrl?: string;
  latitude: number;
  longitude: number;
  name: string;
  amenities?: string[];
  events?: Event[];
}

const VenueInfo = ({
  description,
  videoUrl,
  latitude,
  longitude,
  name,
  amenities = [],
  events = [],
}: VenueInfoProps) => {
  return (
    <div className="space-y-12">
      {/* About Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-muted-foreground">{description}</p>
      </section>

      {/* Video Preview */}
      {videoUrl && (
        <section>
          <h2 className="text-2xl font-bold mb-4">Virtual Tour</h2>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* Map */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Location</h2>
        <div className="h-[400px] rounded-lg overflow-hidden">
          <VenueMap
            latitude={latitude}
            longitude={longitude}
            name={name}
          />
        </div>
      </section>

      {/* Amenities */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {amenities.map((amenity) => (
            <div
              key={amenity}
              className="flex items-center p-4 rounded-lg bg-secondary"
            >
              <span className="text-sm">{amenity}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((event) => (
            <Card key={event.id} className="p-4">
              <img
                src={event.image_url}
                alt={event.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-bold mb-2">{event.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <Button className="w-full">View Details</Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VenueInfo;