import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoStrip from "@/components/InfoStrip";

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
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <ScrollReveal>
      <InfoStrip />
    </ScrollReveal>
    <ScrollReveal>
      <HostStory />
    </ScrollReveal>
    <ScrollReveal>
      <Rooms />
    </ScrollReveal>
    <ScrollReveal>
      <Gallery />
    </ScrollReveal>
    <ScrollReveal>
      <Experiences />
    </ScrollReveal>
    <ScrollReveal>
      <Amenities />
    </ScrollReveal>
    <ScrollReveal>
      <Reviews />
    </ScrollReveal>
    <ScrollReveal>
      <SeasonalPricing />
    </ScrollReveal>
    <ScrollReveal>
      <Location />
    </ScrollReveal>
    <ScrollReveal>
      <FAQ />
    </ScrollReveal>
    <ScrollReveal>
      <ContactForm />
    </ScrollReveal>
    <ScrollReveal>
      <WebsiteCTA />
    </ScrollReveal>
    <Footer />
    <CookieConsent />
  </div>
);

export default Index;
