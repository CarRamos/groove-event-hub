import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Venue } from "@/lib/supabase";
import { Helmet } from "react-helmet";
import EventNavbar from "@/components/EventNavbar";
import EventFooter from "@/components/EventFooter";
import { useToast } from "@/components/ui/use-toast";
import VenueHero from "@/components/venue/VenueHero";
import VenueInfo from "@/components/venue/VenueInfo";
import VenueSidebar from "@/components/venue/VenueSidebar";

const VenueDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();

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
      
      <VenueHero
        name={venue.name}
        address={venue.address}
        imageUrl={venue.image_url}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <VenueInfo
              description={venue.description}
              videoUrl={venue.video_url}
              latitude={venue.latitude}
              longitude={venue.longitude}
              name={venue.name}
              amenities={venue.amenities}
              events={venue.events}
            />
          </div>
          <div className="lg:col-span-1">
            <VenueSidebar
              capacity={venue.capacity}
              musicTypes={venue.music_types}
              rating={venue.rating}
              socialLinks={venue.social_links}
            />
          </div>
        </div>
      </div>

      <EventFooter />
    </>
  );
};

export default VenueDetails;