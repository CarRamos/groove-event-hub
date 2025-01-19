import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Link, Globe, Music } from "lucide-react";

interface VenueSidebarProps {
  capacity: number;
  musicTypes: string[];
  rating: number;
  socialLinks: Array<{ platform: string; url: string }>;
}

const VenueSidebar = ({
  capacity,
  musicTypes,
  rating,
  socialLinks,
}: VenueSidebarProps) => {
  return (
    <div className="lg:sticky lg:top-20">
      <Card className="p-6">
        {/* Capacity */}
        <div className="flex items-center mb-4">
          <Users className="w-5 h-5 mr-2" />
          <span>Capacity: {capacity}</span>
        </div>

        {/* Music Types */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Music className="w-5 h-5 mr-2" />
            <span>Music</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {musicTypes.map((type) => (
              <Badge key={type} variant="secondary">
                {type}
              </Badge>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <Star className="w-5 h-5 mr-2 text-gold" />
          <span>{rating} / 5</span>
        </div>

        {/* Social Links */}
        <div className="space-y-2 mb-4">
          {socialLinks.map((link) => (
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
  );
};

export default VenueSidebar;