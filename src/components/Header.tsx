import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Cross, Heart, Users, Calendar } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: Heart },
    { name: "About", href: "#about", icon: Users },
    { name: "Services", href: "#services", icon: Cross },
    { name: "Ministry", href: "#ministry", icon: Heart },
    { name: "Leadership", href: "#leadership", icon: Users },
    { name: "Events", href: "#events", icon: Calendar },
    { name: "Contact", href: "#contact", icon: Users },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-gentle border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-hero rounded-full flex items-center justify-center shadow-golden">
              <Cross className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-primary">
                Mang'u Christian Union
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-foreground hover:text-primary transition-spiritual rounded-lg hover:bg-muted"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="default"
              className="bg-gradient-hero hover:opacity-90 transition-spiritual shadow-golden"
            >
              Join Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 gradient-section rounded-lg mt-2 shadow-gentle">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 text-foreground hover:text-primary transition-spiritual rounded-lg hover:bg-card"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
              <div className="pt-3">
                <Button className="w-full bg-gradient-hero hover:opacity-90 transition-spiritual shadow-golden">
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
