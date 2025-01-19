import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Venue } from "@/lib/supabase";
import { Helmet } from "react-helmet";
import { MapPin, Music, Users, Star, Link, Globe } from "lucide-react";
import EventNavbar from "@/components/EventNavbar";
import EventFooter from "@/components/EventFooter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import VenueMap from "@/components/VenueMap";
import { useToast } from "@/components/ui/use-toast";

const VenueDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();

  // Fetch venue details
  const { data: venue, isLoading, error } = useQuery({
    queryKey: ["venue", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("venues")
        .select("*, events(*)")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data as Venue;
    },
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to load venue details",
        variant: "destructive",
      });
      console.error("Venue fetch error:", error);
    }
  }, [error, toast]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-2xl">Loading venue details...</div>
      </div>
    );
  }

  if (!venue) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl">Venue not found</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${venue.name} - Wild & Free Venues`}</title>
        <meta name="description" content={venue.description} />
        <meta property="og:title" content={`${venue.name} - Wild & Free Venues`} />
        <meta property="og:description" content={venue.description} />
        <meta property="og:image" content={venue.image_url} />
      </Helmet>

      <EventNavbar onMenuClick={() => {}} />

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src={venue.image_url}
          alt={venue.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {venue.name}
          </h1>
          <div className="flex items-center text-white/90">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{venue.address}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-muted-foreground">{venue.description}</p>
            </section>

            {/* Video Preview */}
            {venue.video_url && (
              <section>
                <h2 className="text-2xl font-bold mb-4">Virtual Tour</h2>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={venue.video_url}
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
                  latitude={venue.latitude}
                  longitude={venue.longitude}
                  name={venue.name}
                />
              </div>
            </section>

            {/* Amenities */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {venue.amenities?.map((amenity) => (
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
                {venue.events?.map((event) => (
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-20 space-y-8">
              <Card className="p-6">
                {/* Capacity */}
                <div className="flex items-center mb-4">
                  <Users className="w-5 h-5 mr-2" />
                  <span>Capacity: {venue.capacity}</span>
                </div>

                {/* Music Types */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Music className="w-5 h-5 mr-2" />
                    <span>Music</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {venue.music_types?.map((type) => (
                      <Badge key={type} variant="secondary">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 mr-2 text-gold" />
                  <span>{venue.rating} / 5</span>
                </div>

                {/* Social Links */}
                <div className="space-y-2 mb-4">
                  {venue.social_links?.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      className="flex items-center text-sm hover:text-gold transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link className="w-4 h-4 mr-2" />
                      {link.platform}
                    </a>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button className="w-full bg-gold hover:bg-gold/90 text-black">
                    Book Venue
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Globe className="w-4 h-4 mr-2" />
                    Visit Website
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <EventFooter />
    </>
  );
};

export default VenueDetails;