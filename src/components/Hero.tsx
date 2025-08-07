import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import heroImage from "@/assets/marathon-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Marathon runners in action during Thunder Marathon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-depth opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Event Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-secondary/20 rounded-full border border-secondary/30 mb-6 animate-fade-in">
            <span className="text-secondary font-medium">2024 Thunder Marathon</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 animate-fade-in">
            Run Your
            <span className="bg-gradient-energy bg-clip-text text-transparent block">
              Best Race
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Join thousands of runners for the ultimate 26.2-mile challenge through scenic routes 
            with professional timing and an unforgettable athletic community.
          </p>

          {/* Event Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-scale-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Calendar className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-white font-semibold">March 15, 2024</div>
              <div className="text-white/70 text-sm">Race Day</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <MapPin className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-white font-semibold">Downtown Start</div>
              <div className="text-white/70 text-sm">City Center</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-white font-semibold">5,000+ Runners</div>
              <div className="text-white/70 text-sm">Registered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Clock className="w-6 h-6 text-secondary mx-auto mb-2" />
              <div className="text-white font-semibold">7:00 AM</div>
              <div className="text-white/70 text-sm">Start Time</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Register for $85
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              View Course Map
            </Button>
          </div>

          {/* Countdown Timer */}
          <div className="mt-12 animate-fade-in">
            <p className="text-white/70 mb-4">Event starts in:</p>
            <div className="flex justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold text-secondary">127</div>
                <div className="text-white/70 text-sm">Days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold text-secondary">08</div>
                <div className="text-white/70 text-sm">Hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold text-secondary">45</div>
                <div className="text-white/70 text-sm">Minutes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold text-secondary">12</div>
                <div className="text-white/70 text-sm">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;