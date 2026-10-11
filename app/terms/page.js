import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service — CareerVibe",
  description: "The terms for using CareerVibe during its free beta.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="11 October 2026"
      intro="By using CareerVibe you agree to these terms. We've kept them honest and short — including the parts that admit what the product is not yet."
      sections={[
        {
          heading: "The service",
          body:
            "CareerVibe is an early-stage, free beta product that parses your resume and generates career-path analysis, skill-gap insights and a suggested action plan. Features, accuracy and availability may change or disappear without notice.",
        },
        {
          heading: "No guarantees",
          body:
            "AI-generated output — including match scores, skill gaps, transition timelines and salary ranges — is guidance, not fact. It can be wrong or outdated. It is not a promise of employment, interviews or income, and it is not professional career, legal or financial advice.",
        },
        {
          heading: "Not a job-placement service",
          body:
            "CareerVibe does not apply to jobs on your behalf, guarantee placements, or act as a recruiter. Any external links to job boards are provided for convenience and are governed by those sites' own terms.",
        },
        {
          heading: "Your account & your content",
          body:
            "You're responsible for keeping your login secure. You keep ownership of the resume and data you provide, and you confirm you have the right to upload it (your own resume, or one you're authorised to process).",
        },
        {
          heading: "Acceptable use",
          body:
            "You agree not to misuse the service: no uploading other people's personal data without consent, no attempts to disrupt, reverse-engineer or overload the platform, and no using output to deceive or defraud.",
        },
        {
          heading: "Beta, provided \"as is\"",
          body:
            "The service is offered without warranties of any kind, to the fullest extent permitted by law. We're not liable for any loss arising from your use of CareerVibe or decisions you make based on its output.",
        },
        {
          heading: "Changes to these terms",
          body:
            "We may update these terms as the product evolves. Continuing to use CareerVibe after an update means you accept the revised terms.",
        },
      ]}
    />
  );
}
