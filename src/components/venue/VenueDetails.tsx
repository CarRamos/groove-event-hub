import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VenueHero from "./VenueHero";
import VenueContent from "./VenueContent";
import VenueSidebar from "./VenueSidebar";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import EventFooter from "../EventFooter";

interface VenueData {
  id: string;
  name: string;
  description: string;
  address: string;
  image: string;
  capacity: number;
  musicTypes: string[];
  rating: number;
  amenities: string[];
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  website: string;
  location: {
    lat: number;
    lng: number;
  };
}

const VenueDetails = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState<VenueData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulated API call
    const fetchVenue = async () => {
      try {
        // Replace with actual API call
        const mockVenue: VenueData = {
          id: "1",
          name: "Skyline Lounge",
          description: "An exclusive rooftop venue with panoramic city views...",
          address: "123 Nightlife Street, Downtown",
          image: "/placeholder.svg",
          capacity: 500,
          musicTypes: ["House", "Techno", "Electronic"],
          rating: 4.5,
          amenities: ["VIP Tables", "Full Bar", "Dance Floor", "Smoking Area"],
          socialLinks: {
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            twitter: "https://twitter.com",
          },
          website: "https://example.com",
          location: {
            lat: 40.7128,
            lng: -74.006,
          },
        };
        setVenue(mockVenue);
        setLoading(false);
      } catch (err) {
        setError("Failed to load venue details");
        setLoading(false);
      }
    };

    fetchVenue();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!venue) return <Error message="Venue not found" />;

  return (
    <div className="min-h-screen bg-background">
      <VenueHero venue={venue} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <VenueContent venue={venue} />
          </div>
          <div className="lg:col-span-1">
            <VenueSidebar venue={venue} />
          </div>
        </div>
      </div>
      <EventFooter />
    </div>
  );
};

export default VenueDetails;