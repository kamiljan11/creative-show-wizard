import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Experiences from "@/components/Experiences";
import Amenities from "@/components/Amenities";
import HostStory from "@/components/HostStory";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import SeasonalPricing from "@/components/SeasonalPricing";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import BookingCTA from "@/components/BookingCTA";
import WebsiteCTA from "@/components/WebsiteCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Rooms />
    <Experiences />
    <Amenities />
    <HostStory />
    <Gallery />
    <Reviews />
    <SeasonalPricing />
    <Location />
    <FAQ />
    <BookingCTA />
    <WebsiteCTA />
    <Footer />
  </div>
);

export default Index;
