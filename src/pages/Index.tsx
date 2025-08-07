import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EventDetails from "@/components/EventDetails";
import CourseInfo from "@/components/CourseInfo";
import Training from "@/components/Training";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <EventDetails />
        <CourseInfo />
        <Training />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
