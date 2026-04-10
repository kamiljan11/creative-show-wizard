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
import { WaveDivider, DiamondSeparator } from "@/components/SvgDecorations";

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

    <WaveDivider className="text-primary my-2 md:my-6" />

    <ScrollReveal>
      <Rooms />
    </ScrollReveal>

    <DiamondSeparator className="my-6 md:my-10" />

    <ScrollReveal>
      <Gallery />
    </ScrollReveal>

    <WaveDivider className="text-primary my-2 md:my-6" />

    <ScrollReveal>
      <Experiences />
    </ScrollReveal>

    <DiamondSeparator className="my-6 md:my-10" />

    <ScrollReveal>
      <Amenities />
    </ScrollReveal>

    <WaveDivider className="text-primary my-2 md:my-6" />

    <ScrollReveal>
      <Reviews />
    </ScrollReveal>

    <DiamondSeparator className="my-6 md:my-10" />

    <ScrollReveal>
      <SeasonalPricing />
    </ScrollReveal>

    <WaveDivider className="text-primary my-2 md:my-6" />

    <ScrollReveal>
      <Location />
    </ScrollReveal>

    <DiamondSeparator className="my-6 md:my-10" />

    <ScrollReveal>
      <FAQ />
    </ScrollReveal>

    <WaveDivider className="text-primary my-2 md:my-6" />

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
