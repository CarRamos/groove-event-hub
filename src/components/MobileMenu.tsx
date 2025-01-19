import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Club XYZ", href: "/venues/1" },
    { label: "Lounge ABC", href: "/venues/2" },
    { label: "Events", href: "/" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="text-2xl font-bold text-gold" onClick={onClose}>
              VENUE
            </Link>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="space-y-6 flex-1">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-2 py-1.5 text-sm transition-colors hover:text-gold"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Follow Us
              </h3>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-2 py-1.5 text-sm transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;