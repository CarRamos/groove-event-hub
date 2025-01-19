import { Calendar, Clock, MapPin, Share2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface EventSidebarProps {
  event: any;
  onGuestlistClick: () => void;
}

const EventSidebar = ({ event, onGuestlistClick }: EventSidebarProps) => {
  const addToCalendar = () => {
    // Implement calendar functionality
    console.log("Adding to calendar...");
  };

  const shareEvent = () => {
    // Implement share functionality
    console.log("Sharing event...");
  };

  return (
    <div className="lg:sticky lg:top-20">
      <Card className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(event.date).toLocaleDateString()}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-2" />
            {new Date(event.date).toLocaleTimeString()}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            {event.venue.name}
          </div>
        </div>

        <div className="space-y-4">
          <Button
            className="w-full bg-gold hover:bg-gold/90 text-black"
            onClick={onGuestlistClick}
          >
            <Users className="w-4 h-4 mr-2" />
            Join Guestlist
          </Button>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={addToCalendar}>
              <Calendar className="w-4 h-4 mr-2" />
              Calendar
            </Button>
            <Button variant="outline" onClick={shareEvent}>
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EventSidebar;