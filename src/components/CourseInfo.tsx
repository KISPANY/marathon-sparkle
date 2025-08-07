import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, Clock, Droplets, Heart, Route } from "lucide-react";
import courseMapImage from "@/assets/course-map.jpg";

const CourseInfo = () => {
  const courseHighlights = [
    {
      icon: Route,
      title: "26.2 Miles",
      description: "USATF certified course",
      detail: "Fast & scenic route"
    },
    {
      icon: TrendingUp,
      title: "Rolling Hills",
      description: "Moderate elevation gain",
      detail: "450 ft total elevation"
    },
    {
      icon: Clock,
      title: "6 Hour Limit",
      description: "Generous time cutoff",
      detail: "Support throughout"
    },
    {
      icon: Droplets,
      title: "13 Aid Stations",
      description: "Every 2 miles",
      detail: "Water, sports drinks & gels"
    }
  ];

  const milestones = [
    { mile: "Start", location: "Downtown Plaza", time: "7:00 AM", description: "Grand start ceremony" },
    { mile: "5K", location: "Riverside Park", time: "7:25 AM", description: "First major milestone" },
    { mile: "10K", location: "Historic District", time: "7:50 AM", description: "Beautiful architecture views" },
    { mile: "13.1", location: "Lakefront Turnaround", time: "8:30 AM", description: "Half marathon point" },
    { mile: "20", location: "University Campus", time: "9:15 AM", description: "Student cheer zone" },
    { mile: "26.2", location: "Victory Plaza", time: "10:00 AM", description: "Finish line celebration" }
  ];

  return (
    <section id="course" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Course Information
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the scenic 26.2-mile journey through our beautiful city
          </p>
        </div>

        {/* Course Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {courseHighlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-athletic transition-smooth">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-1">
                    {highlight.description}
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    {highlight.detail}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Course Map and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-depth group">
              <img
                src={courseMapImage}
                alt="Thunder Marathon course map showing the complete 26.2-mile route"
                className="w-full h-auto group-hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-depth opacity-0 group-hover:opacity-20 transition-smooth"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-display font-bold text-foreground mb-1">Interactive Course Map</h4>
                  <p className="text-sm text-muted-foreground">Click to explore the full route with elevation profile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Description */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-display font-bold text-foreground mb-6">
              A Route Like No Other
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Thunder Marathon course is designed to showcase the best of our city while 
                providing runners with an unforgettable racing experience. Starting from the 
                heart of downtown, runners will journey through diverse neighborhoods, scenic 
                parks, and iconic landmarks.
              </p>
              <p>
                The course features rolling hills that challenge without overwhelming, with the 
                most significant elevation occurring between miles 8-12. The route then levels 
                out for a strong finish through the lakefront district.
              </p>
              <p>
                Strategic aid stations every 2 miles ensure proper hydration and nutrition, 
                while enthusiastic crowd support and live entertainment keep energy high 
                throughout the entire 26.2-mile journey.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="athletic" size="lg">
                <MapPin className="w-4 h-4 mr-2" />
                Download Course Map
              </Button>
              <Button variant="outline" size="lg">
                View Elevation Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Course Milestones */}
        <Card className="shadow-athletic">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-display font-bold text-foreground">
              Key Course Milestones
            </CardTitle>
            <p className="text-muted-foreground">
              Important landmarks and timing throughout your race
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-smooth">
                  <div className="w-16 h-16 bg-gradient-energy rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {milestone.mile}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="font-display font-semibold text-foreground">
                        {milestone.location}
                      </h4>
                      <span className="text-primary font-medium text-sm">
                        Est. {milestone.time}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CourseInfo;