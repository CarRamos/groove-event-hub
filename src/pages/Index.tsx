import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Calendar, MapPin, Share2, Clock, Users, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import EventNavbar from "@/components/EventNavbar";
import EventSidebar from "@/components/EventSidebar";
import EventGallery from "@/components/EventGallery";
import EventFooter from "@/components/EventFooter";
import GuestlistModal from "@/components/GuestlistModal";
import MobileMenu from "@/components/MobileMenu";

// Mock event data fetch
const fetchEventData = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  return {
    id: "1",
    title: "Summer Night Festival",
    description: "Join us for an unforgettable night of electronic music and visual arts...",
    date: "2024-06-15T20:00:00",
    venue: {
      name: "The Grand Hall",
      address: "123 Party Street, Nightlife City",
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    lineup: ["DJ Alpha", "DJ Beta", "DJ Gamma"],
    features: ["Premium Sound System", "Visual Arts", "VIP Areas"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  };
};

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGuestlistOpen, setIsGuestlistOpen] = useState(false);
  const { toast } = useToast();

  const { data: event, isLoading, error } = useQuery({
    queryKey: ["event"],
    queryFn: fetchEventData,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse space-y-4">
          <div className="h-12 w-48 bg-muted rounded"></div>
          <div className="h-4 w-32 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-destructive">Error Loading Event</h2>
          <p className="text-muted-foreground">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <EventNavbar 
        onMenuClick={() => setIsMobileMenuOpen(true)} 
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      <main className="flex-1 container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="relative h-[50vh] rounded-lg overflow-hidden">
              <img
                src={event.images[0]}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hero-overlay flex items-end">
                <div className="p-6">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {event.title}
                  </h1>
                  <div className="flex items-center text-white/80 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.venue.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">About the Event</h2>
              <p>{event.description}</p>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Features</h3>
              <ul className="list-disc pl-5">
                {event.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4">Lineup</h3>
              <ul className="list-disc pl-5">
                {event.lineup.map((artist, index) => (
                  <li key={index}>{artist}</li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            <EventGallery images={event.images} />

            {/* Video Player */}
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src={event.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Map */}
            <div className="h-[400px] rounded-lg overflow-hidden bg-muted">
              {/* Map component will go here */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">Map Loading...</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <EventSidebar
            event={event}
            onGuestlistClick={() => setIsGuestlistOpen(true)}
          />
        </div>
      </main>

      <EventFooter />
      
      <GuestlistModal
        isOpen={isGuestlistOpen}
        onClose={() => setIsGuestlistOpen(false)}
      />
    </div>
  );
};

export default Index;