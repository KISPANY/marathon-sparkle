import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Medal, 
  Timer, 
  MapPin, 
  Shirt, 
  Camera,
  Coffee,
  Shield
} from "lucide-react";

const EventDetails = () => {
  const raceInfo = [
    {
      icon: Trophy,
      title: "Race Categories",
      description: "Full Marathon, Half Marathon, 10K, and 5K Fun Run options available for all skill levels"
    },
    {
      icon: Medal,
      title: "Finisher Medals",
      description: "Custom designed medals for all finishers with personalized time engraving"
    },
    {
      icon: Timer,
      title: "Professional Timing",
      description: "ChipTiming technology with live tracking and instant results"
    },
    {
      icon: MapPin,
      title: "Scenic Route",
      description: "Beautiful course through downtown, parks, and waterfront with crowd support"
    },
    {
      icon: Shirt,
      title: "Race Swag",
      description: "Premium technical t-shirt, race bib, and exclusive Thunder Marathon gear"
    },
    {
      icon: Camera,
      title: "Photo Coverage",
      description: "Professional race photographers capturing your moment throughout the course"
    },
    {
      icon: Coffee,
      title: "Post-Race Party",
      description: "Food, drinks, and celebration at the finish line festival"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Medical support, hydration stations every 2 miles, and safety marshals"
    }
  ];

  const pricePackages = [
    {
      name: "Early Bird",
      price: "$65",
      description: "Register before December 31st",
      features: ["All race amenities", "T-shirt & medal", "Post-race food", "Photo downloads"],
      popular: false
    },
    {
      name: "Regular",
      price: "$85",
      description: "Standard registration",
      features: ["All race amenities", "Premium t-shirt & medal", "Post-race food", "Photo downloads", "Training plan access"],
      popular: true
    },
    {
      name: "VIP",
      price: "$125",
      description: "Premium experience",
      features: ["All regular features", "VIP start corral", "Exclusive swag bag", "Massage tent access", "Premium parking"],
      popular: false
    }
  ];

  return (
    <section id="event" className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Event Details
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Thunder Marathon 2024
          </p>
        </div>

        {/* Race Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {raceInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="group hover:shadow-athletic transition-smooth animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-energy rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Registration Packages */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Registration Packages
            </h3>
            <p className="text-lg text-muted-foreground">
              Choose the perfect package for your marathon experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricePackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-smooth hover:shadow-depth ${
                  pkg.popular ? 'border-secondary shadow-energy scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-energy text-white px-4 py-1 rounded-b-lg font-semibold text-sm">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h4 className="font-display font-bold text-2xl text-foreground mb-2">
                    {pkg.name}
                  </h4>
                  <div className="text-4xl font-black text-primary mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={pkg.popular ? "hero" : "athletic"} 
                    size="lg" 
                    className="w-full"
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;