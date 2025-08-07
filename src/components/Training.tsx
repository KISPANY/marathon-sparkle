import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Target, 
  Heart, 
  Zap, 
  Clock, 
  Dumbbell,
  Apple,
  Moon
} from "lucide-react";
import trainingImage from "@/assets/training.jpg";

const Training = () => {
  const trainingTips = [
    {
      icon: Calendar,
      title: "16-Week Plan",
      description: "Progressive training schedule designed for marathon success",
      detail: "Beginner to advanced levels"
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Establish realistic time goals and pacing strategies",
      detail: "Personalized targets"
    },
    {
      icon: Heart,
      title: "Heart Rate Training",
      description: "Learn zone-based training for optimal performance",
      detail: "Maximize efficiency"
    },
    {
      icon: Zap,
      title: "Speed Work",
      description: "Interval training to improve race pace and endurance",
      detail: "Track workouts included"
    }
  ];

  const weeklySchedule = [
    { day: "Monday", workout: "Rest Day", duration: "Recovery", description: "Complete rest or light stretching" },
    { day: "Tuesday", workout: "Speed Work", duration: "45-60 min", description: "Track intervals or tempo runs" },
    { day: "Wednesday", workout: "Easy Run", duration: "30-45 min", description: "Conversational pace recovery run" },
    { day: "Thursday", workout: "Cross Training", duration: "30-60 min", description: "Cycling, swimming, or strength training" },
    { day: "Friday", workout: "Rest Day", duration: "Recovery", description: "Rest or light yoga/stretching" },
    { day: "Saturday", workout: "Long Run", duration: "1-3 hours", description: "Progressive distance building" },
    { day: "Sunday", workout: "Recovery Run", duration: "20-40 min", description: "Easy pace active recovery" }
  ];

  const nutritionTips = [
    {
      icon: Apple,
      title: "Pre-Run Fuel",
      tips: ["Eat 2-3 hours before long runs", "Focus on carbohydrates", "Avoid high fiber/fat foods", "Stay hydrated"]
    },
    {
      icon: Zap,
      title: "During Race",
      tips: ["Start fueling at mile 6-8", "30-60g carbs per hour", "Practice in training", "Use sports drinks/gels"]
    },
    {
      icon: Heart,
      title: "Recovery",
      tips: ["Eat within 30 minutes", "3:1 carb to protein ratio", "Chocolate milk works well", "Focus on whole foods"]
    }
  ];

  return (
    <section id="training" className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Training Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prepare for your best marathon performance with our comprehensive training guide
          </p>
        </div>

        {/* Training Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-display font-bold text-foreground mb-6">
              Your Path to 26.2 Miles
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Training for a marathon is a journey that requires dedication, consistency, and smart planning. 
                Our comprehensive 16-week training program is designed to safely build your endurance while 
                minimizing injury risk.
              </p>
              <p>
                Whether you're a first-time marathoner or looking to set a new personal record, our structured 
                approach includes progressive long runs, speed work, recovery periods, and cross-training to 
                develop the fitness needed for race day success.
              </p>
            </div>
            <Button variant="athletic" size="lg">
              <Calendar className="w-4 h-4 mr-2" />
              Get Free Training Plan
            </Button>
          </div>
          <div className="relative">
            <img
              src={trainingImage}
              alt="Marathon training group preparing for Thunder Marathon with professional coaching"
              className="rounded-2xl shadow-depth w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-depth opacity-20 rounded-2xl"></div>
          </div>
        </div>

        {/* Training Fundamentals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trainingTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card key={index} className="text-center group hover:shadow-athletic transition-smooth">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-energy rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {tip.description}
                  </p>
                  <p className="text-xs text-primary font-semibold">
                    {tip.detail}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Training Tabs */}
        <Card className="shadow-athletic">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-display font-bold text-foreground">
              Complete Training Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="schedule" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="schedule" className="font-medium">Weekly Schedule</TabsTrigger>
                <TabsTrigger value="nutrition" className="font-medium">Nutrition</TabsTrigger>
                <TabsTrigger value="recovery" className="font-medium">Recovery</TabsTrigger>
              </TabsList>

              <TabsContent value="schedule" className="space-y-4">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Sample Weekly Training Schedule
                </h3>
                <div className="space-y-3">
                  {weeklySchedule.map((day, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent transition-smooth">
                      <div className="w-20 font-display font-semibold text-primary text-sm">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-foreground">{day.workout}</h4>
                          <span className="text-sm text-muted-foreground">{day.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="nutrition" className="space-y-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Marathon Nutrition Strategy
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {nutritionTips.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-display font-semibold text-foreground mb-3">
                          {section.title}
                        </h4>
                        <ul className="space-y-2">
                          {section.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              <TabsContent value="recovery" className="space-y-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Recovery & Injury Prevention
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Moon className="w-5 h-5 text-primary" />
                      Sleep & Rest
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-foreground">7-9 hours sleep:</strong>
                          <span className="text-muted-foreground"> Essential for muscle recovery and adaptation</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-foreground">Rest days:</strong>
                          <span className="text-muted-foreground"> Allow 1-2 complete rest days per week</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-foreground">Listen to your body:</strong>
                          <span className="text-muted-foreground"> Take extra rest when feeling overly fatigued</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Dumbbell className="w-5 h-5 text-primary" />
                      Active Recovery
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-foreground">Stretching:</strong>
                          <span className="text-muted-foreground"> Daily 10-15 minute flexibility routine</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-foreground">Foam rolling:</strong>
                          <span className="text-muted-foreground"> Self-massage to reduce muscle tension</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <strong className="text-foreground">Cross-training:</strong>
                          <span className="text-muted-foreground"> Swimming, cycling, or yoga for active recovery</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Training;