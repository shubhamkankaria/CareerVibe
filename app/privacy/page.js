import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy — CareerVibe",
  description: "How CareerVibe collects, uses, and protects your data during beta.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="11 October 2026"
      intro="CareerVibe is an early beta. This page explains, in plain language, exactly what we collect and what we do with it. Short version: your resume is used to generate your career analysis, we don't sell your data, and you can delete everything at any time."
      sections={[
        {
          heading: "What we collect",
          body: [
            "Account information: your email address and, if you sign in with Google, your name and profile photo. Authentication is handled by Firebase.",
            "Your resume: the file you upload and the text extracted from it.",
            "Your generated profile: name, summary, skills, experience, education and industry tags produced from your resume.",
            "Usage data stored in your browser (localStorage): your saved jobs, application status and analysis history, kept on your own device and tied to your account.",
          ],
        },
        {
          heading: "How your resume is processed",
          body:
            "To extract skills and generate career analysis, the text of your resume is sent to an AI provider (Google Gemini) for processing. We do not use your resume to train third-party models, and we do not sell your personal data to anyone.",
        },
        {
          heading: "Where your data is stored",
          body:
            "Your account and profile are associated with your login. A working copy of your saved items also lives in your browser's local storage on your device so the app feels fast between visits.",
        },
        {
          heading: "Payment data",
          body:
            "CareerVibe is free during beta. We do not collect credit-card or payment information today. If paid plans launch later, that will be handled by a dedicated payment provider and covered by an updated policy.",
        },
        {
          heading: "Your control & deletion",
          body:
            "You can clear all of your data at any time from Settings. Deleting your account removes your profile and saved data. Because some information is cached in your browser, clearing your browser storage also removes that copy.",
        },
        {
          heading: "Security",
          body:
            "Data is transmitted over HTTPS. No system is perfectly secure, so we keep only what the product needs and never ask for information we don't use.",
        },
        {
          heading: "Changes to this policy",
          body:
            "If we change this policy in a meaningful way while you're using CareerVibe, we'll update the date at the top of this page.",
        },
      ]}
    />
  );
}
