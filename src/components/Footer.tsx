import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Calendar,
  Clock,
  Users
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#event", label: "Event Details" },
    { href: "#course", label: "Course Map" },
    { href: "#training", label: "Training" },
    { href: "#sponsors", label: "Sponsors" }
  ];

  const raceInfo = [
    { href: "#registration", label: "Registration" },
    { href: "#results", label: "Past Results" },
    { href: "#photos", label: "Photo Gallery" },
    { href: "#faq", label: "FAQ" },
    { href: "#volunteer", label: "Volunteer" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer id="contact" className="bg-gradient-depth text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-energy rounded-full"></div>
              <span className="font-display font-bold text-2xl">Thunder Marathon</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Join thousands of runners for the ultimate 26.2-mile challenge through scenic routes 
              with professional timing and an unforgettable athletic community.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-white/90">info@thundermarathon.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-white/90">(555) 123-RACE</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-white/90">Downtown Plaza, Main St</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-secondary transition-smooth hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Race Information */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Race Info</h3>
            <ul className="space-y-3">
              {raceInfo.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-secondary transition-smooth hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Details & Newsletter */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Event Details</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-secondary" />
                <div>
                  <div className="text-white font-semibold">March 15, 2024</div>
                  <div className="text-white/70 text-sm">Race Day</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary" />
                <div>
                  <div className="text-white font-semibold">7:00 AM Start</div>
                  <div className="text-white/70 text-sm">All Distances</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-secondary" />
                <div>
                  <div className="text-white font-semibold">5,000+ Runners</div>
                  <div className="text-white/70 text-sm">Expected</div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/10 rounded-lg p-4 border border-white/20">
              <h4 className="font-display font-semibold text-white mb-3">Stay Updated</h4>
              <p className="text-white/80 text-sm mb-4">Get race updates and training tips</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded text-white placeholder-white/60 focus:outline-none focus:border-secondary text-sm"
                />
                <Button variant="energy" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-white/80 font-medium">Follow Us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:scale-110 transition-bounce"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-white/80 text-sm">
                © 2024 Thunder Marathon. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Organized by Thunder Marathon Organization
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;