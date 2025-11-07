import HeroSection from '@/components/sections/hero-section';
import UrgencyBanner from '@/components/sections/urgency-banner';
import PainPointsSection from '@/components/sections/pain-points-section';
import BenefitsSection from '@/components/sections/benefits-section';
import WhoAmISection from '@/components/sections/who-am-i-section';
import SocialProofSection from '@/components/sections/social-proof-section';
import FinalCtaSection from '@/components/sections/final-cta-section';
import FeedbackSection from '@/components/sections/feedback-section';
import FaqSection from '@/components/sections/faq-section';
import Footer from '@/components/footer';
import GuaranteesSection from '@/components/sections/guarantees-section';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-transparent">
      <main className="flex-1">
        <HeroSection />
        <UrgencyBanner />
        <PainPointsSection />
        <BenefitsSection />
        <WhoAmISection />
        <SocialProofSection />
        <GuaranteesSection />
        <FinalCtaSection />
        <FeedbackSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
