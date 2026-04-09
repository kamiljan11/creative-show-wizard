import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoStrip from "@/components/InfoStrip";
import FeaturedOn from "@/components/FeaturedOn";
import Rooms from "@/components/Rooms";
import Experiences from "@/components/Experiences";
import Amenities from "@/components/Amenities";
import HostStory from "@/components/HostStory";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import SeasonalPricing from "@/components/SeasonalPricing";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import BookingCTA from "@/components/BookingCTA";
import WebsiteCTA from "@/components/WebsiteCTA";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <InfoStrip />
    <FeaturedOn />
    <Rooms />
    <Experiences />
    <Amenities />
    <HostStory />
    <Gallery />
    <Reviews />
    <SeasonalPricing />
    <Location />
    <FAQ />
    <ContactForm />
    <BookingCTA />
    <WebsiteCTA />
    <Footer />
    <CookieConsent />
  </div>
);

export default Index;
