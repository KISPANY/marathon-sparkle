import { Card, CardContent } from "@/components/ui/card";

const Sponsors = () => {
  const titleSponsors = [
    { name: "RunTech Sports", category: "Title Sponsor", logo: "RT" },
    { name: "HealthFirst Medical", category: "Medical Partner", logo: "HF" },
    { name: "EnergyFlow Nutrition", category: "Nutrition Partner", logo: "EF" }
  ];

  const goldSponsors = [
    { name: "City Bank", logo: "CB" },
    { name: "Athletic Gear Co", logo: "AG" },
    { name: "SportsMed Clinic", logo: "SM" },
    { name: "Runner's Paradise", logo: "RP" }
  ];

  const silverSponsors = [
    { name: "Local Coffee Co", logo: "LC" },
    { name: "Fitness First Gym", logo: "FF" },
    { name: "Recovery Spa", logo: "RS" },
    { name: "Sports Photography", logo: "SP" },
    { name: "Marathon Massage", logo: "MM" },
    { name: "Hydration Station", logo: "HS" }
  ];

  const communityPartners = [
    "City Parks Department",
    "Police Athletic League",
    "Fire Department Community",
    "Local Running Clubs",
    "University Athletics",
    "Chamber of Commerce"
  ];

  return (
    <section id="sponsors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Amazing Sponsors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thunder Marathon is made possible by the generous support of our sponsors and community partners
          </p>
        </div>

        {/* Title Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Title Sponsors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {titleSponsors.map((sponsor, index) => (
              <Card key={index} className="group hover:shadow-athletic transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <span className="text-white font-bold text-2xl">{sponsor.logo}</span>
                  </div>
                  <h4 className="font-display font-bold text-xl text-foreground mb-2">
                    {sponsor.name}
                  </h4>
                  <p className="text-primary font-semibold text-sm">
                    {sponsor.category}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-bold text-foreground text-center mb-8">
            Gold Sponsors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {goldSponsors.map((sponsor, index) => (
              <Card key={index} className="group hover:shadow-energy transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-energy rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-bounce">
                    <span className="text-white font-bold text-lg">{sponsor.logo}</span>
                  </div>
                  <h4 className="font-display font-semibold text-foreground text-sm">
                    {sponsor.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-display font-bold text-foreground text-center mb-8">
            Silver Sponsors
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {silverSponsors.map((sponsor, index) => (
              <Card key={index} className="group hover:shadow-athletic transition-smooth">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-gradient-light rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-bounce border border-border">
                    <span className="text-primary font-bold text-sm">{sponsor.logo}</span>
                  </div>
                  <h4 className="font-display font-medium text-foreground text-xs">
                    {sponsor.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div>
          <h3 className="text-xl font-display font-bold text-foreground text-center mb-8">
            Community Partners
          </h3>
          <Card className="max-w-4xl mx-auto shadow-athletic">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {communityPartners.map((partner, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-3 h-3 bg-secondary rounded-full group-hover:scale-125 transition-bounce"></div>
                    <span className="text-foreground font-medium text-sm group-hover:text-primary transition-smooth">
                      {partner}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sponsorship CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-light rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Become a Sponsor
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our community of supporters and help make Thunder Marathon an incredible experience for all participants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-hero text-white rounded-lg font-semibold hover:shadow-depth hover:scale-105 transition-bounce">
                Sponsorship Packages
              </button>
              <button className="px-6 py-3 border border-border rounded-lg font-semibold text-foreground hover:bg-accent transition-smooth">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;