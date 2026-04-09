import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Reviews from "@/components/Reviews";
import BookingCTA from "@/components/BookingCTA";
import WebsiteCTA from "@/components/WebsiteCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Rooms />
    <Amenities />
    <Reviews />
    <BookingCTA />
    <Footer />
  </div>
);

export default Index;
