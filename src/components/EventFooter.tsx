import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EventFooter = () => {
  const quickLinks = [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Privacy", href: "#" },
  ];

  const popularCities = [
    { label: "New York", href: "#" },
    { label: "Los Angeles", href: "#" },
    { label: "Miami", href: "#" },
    { label: "Chicago", href: "#" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">VENUE</h3>
            <p className="text-sm text-muted-foreground">
              Your premier destination for nightlife and entertainment. Discover the
              best events in your city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h4 className="font-semibold mb-4">Popular Cities</h4>
            <ul className="space-y-2">
              {popularCities.map((city) => (
                <li key={city.label}>
                  <a
                    href={city.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {city.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Subscribe to get updates about new events.
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 VENUE. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EventFooter;