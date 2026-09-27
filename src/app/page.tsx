import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IssueSelector from "@/components/IssueSelector";
import ServiceScope from "@/components/ServiceScope";
import DiagnosisStory from "@/components/DiagnosisStory";
import AcSpotlight from "@/components/AcSpotlight";
import PlumbingSpotlight from "@/components/PlumbingSpotlight";
import RepairChecklist from "@/components/RepairChecklist";
import PropertyMaintenance from "@/components/PropertyMaintenance";
import WhoWeHelp from "@/components/WhoWeHelp";
import DammamLocal from "@/components/DammamLocal";
import HowItWorks from "@/components/HowItWorks";
import WhatsAppPanel from "@/components/WhatsAppPanel";
import WhyDifferent from "@/components/WhyDifferent";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <IssueSelector />
        <ServiceScope />
        <DiagnosisStory />
        <AcSpotlight />
        <PlumbingSpotlight />
        <RepairChecklist />
        <PropertyMaintenance />
        <WhoWeHelp />
        <DammamLocal />
        <HowItWorks />
        <WhatsAppPanel />
        <WhyDifferent />
        <Faq />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
