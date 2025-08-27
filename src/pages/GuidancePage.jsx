import React from "react";
import LeadHeader from "../LeadForm/LeadHeader";
import LeadHero from "../LeadForm/LeadHero";  
import LeadForm from "../LeadForm/LeadForm";
import ValuePropositions from "../LeadForm/ValuePropositions";
import UniversityPartners from "../LeadForm/UniversityPartners";
import SuccessStories from "../LeadForm/SuccessStories";
import ExpertTeam from "../LeadForm/ExpertTeam";
import CTASection from "../LeadForm/CTASection";
import Footer from "../LeadForm/Footer";


export default function GuidancePage() {
  return (
    <>
      <LeadHeader />
      <LeadHero />
      <LeadForm/>
      <ValuePropositions />
      <UniversityPartners />
      <SuccessStories />
      <ExpertTeam />
      <CTASection />
      <Footer />
    </>
  );
}
