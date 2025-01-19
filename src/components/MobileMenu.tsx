import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuItems = [
    { label: "Database View", href: "#" },
    { label: "Submit Event", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "Cities", href: "#" },
    { label: "Venues", href: "#" },
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
            <span className="text-2xl font-bold text-gold">VENUE</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="space-y-6 flex-1">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-2 py-1.5 text-sm transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
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