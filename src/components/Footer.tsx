import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Cross,
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Ministries", href: "#ministry" },
    { name: "Leadership", href: "#leadership" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  const ministries = [
    { name: "Children's Ministry", href: "#children" },
    { name: "Worship Team", href: "#worship" },
    { name: "Talents Ministry", href: "#talents" },
    { name: "Discipleship", href: "#discipleship" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Church Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary rounded-full flex items-center justify-center shadow-golden">
                <Cross className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Mang'u Christian Union</h3>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-sm sm:text-base">
              A vibrant community of faith where every heart finds hope, every
              soul discovers purpose, and every life is transformed by God's
              amazing grace.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3 text-primary-foreground/80">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Mang'u School, Thika, Kenya</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-primary-foreground/80">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-primary-foreground/80">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">info@mangucu.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Ministries</h4>
            <ul className="space-y-3">
              {ministries.map((ministry, index) => (
                <li key={index}>
                  <a
                    href={ministry.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {ministry.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Subscribe to our newsletter for updates on events, sermons, and
              church news.
            </p>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email address"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button className="bg-secondary hover:bg-secondary-light text-secondary-foreground shadow-golden">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/60">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-primary-foreground hover:text-secondary hover:bg-primary-foreground/10"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-primary-foreground hover:text-secondary hover:bg-primary-foreground/10"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-primary-foreground hover:text-secondary hover:bg-primary-foreground/10"
                >
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-primary-foreground/80 text-sm">
            <Heart className="w-4 h-4 text-secondary" />
            <span>© 2024 Mang'u Christian Union. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-primary-foreground/80 hover:text-secondary transition-colors"
            >
              Sermon Archive
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
