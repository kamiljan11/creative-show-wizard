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
import { DiamondSeparator } from "@/components/SvgDecorations";

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

    {/* bg-card → bg-background transition */}
    <DiamondSeparator className="py-6 md:py-10" />

    <ScrollReveal>
      <Gallery />
    </ScrollReveal>
    <ScrollReveal>
      <Experiences />
    </ScrollReveal>
    <ScrollReveal>
      <Amenities />
    </ScrollReveal>

    {/* bg-background → bg-card transition */}
    <ScrollReveal>
      <Reviews />
    </ScrollReveal>

    <DiamondSeparator className="py-6 md:py-10" />

    <ScrollReveal>
      <SeasonalPricing />
    </ScrollReveal>

    {/* bg-background → bg-card transition */}
    <ScrollReveal>
      <Location />
    </ScrollReveal>
    <ScrollReveal>
      <FAQ />
    </ScrollReveal>

    <DiamondSeparator className="py-6 md:py-10" />

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
