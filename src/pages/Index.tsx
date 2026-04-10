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
import { MountainDivider, WaveDivider, DiamondSeparator } from "@/components/SvgDecorations";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <ScrollReveal>
      <InfoStrip />
    </ScrollReveal>

    <MountainDivider className="text-card -mb-px" />
    <ScrollReveal>
      <HostStory />
    </ScrollReveal>

    <WaveDivider className="text-primary my-4 md:my-8" />

    <ScrollReveal>
      <Rooms />
    </ScrollReveal>

    <DiamondSeparator className="my-6 md:my-10" />

    <ScrollReveal>
      <Gallery />
    </ScrollReveal>

    <MountainDivider className="text-card -mb-px" flip />
    <MountainDivider className="text-background -mb-px" />

    <ScrollReveal>
      <Experiences />
    </ScrollReveal>

    <WaveDivider className="text-primary my-4 md:my-8" />

    <ScrollReveal>
      <Amenities />
    </ScrollReveal>

    <DiamondSeparator className="my-6 md:my-10" />

    <ScrollReveal>
      <Reviews />
    </ScrollReveal>

    <MountainDivider className="text-background -mb-px" />

    <ScrollReveal>
      <SeasonalPricing />
    </ScrollReveal>

    <WaveDivider className="text-primary my-4 md:my-8" />

    <ScrollReveal>
      <Location />
    </ScrollReveal>

    <DiamondSeparator className="my-6 md:my-10" />

    <ScrollReveal>
      <FAQ />
    </ScrollReveal>

    <MountainDivider className="text-card -mb-px" />

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
