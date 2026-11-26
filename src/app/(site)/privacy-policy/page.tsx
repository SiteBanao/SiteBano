import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SiteBanao collects, uses and protects the information you share with us.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={
        <p>
          Your privacy matters to us. This policy explains what information SiteBanao collects, why we collect it and
          how we look after it.
        </p>
      }
      sections={[
        {
          heading: "Information we collect",
          body: (
            <>
              <p>When you send an enquiry or contact us, we may collect:</p>
              <ul>
                <li>Your name and business name</li>
                <li>Email address and phone number</li>
                <li>Business category, selected package and project details</li>
                <li>Your preferred contact method</li>
              </ul>
              <p>We only collect what you choose to share with us.</p>
            </>
          ),
        },
        {
          heading: "How we use it",
          body: (
            <ul>
              <li>To respond to your enquiry and prepare a quotation</li>
              <li>To communicate with you about your project</li>
              <li>To deliver and support the services you order</li>
            </ul>
          ),
        },
        {
          heading: "WhatsApp & third-party services",
          body: (
            <p>
              If you contact us via WhatsApp, your messages are handled by WhatsApp under its own privacy policy. If our
              enquiry form is connected to a form-handling service, your submission is processed by that service to
              deliver it to us.
            </p>
          ),
        },
        {
          heading: "Sharing",
          body: (
            <p>
              We do not sell or rent your personal information. We only share it with service providers where
              necessary to deliver your project (for example, a domain or hosting provider you&apos;ve chosen), or when
              required by law.
            </p>
          ),
        },
        {
          heading: "Data retention & security",
          body: (
            <p>
              We keep enquiry information only as long as needed for the purposes above and take reasonable measures to
              protect it.
            </p>
          ),
        },
        {
          heading: "Your choices",
          body: (
            <p>
              You can ask us to access, correct or delete the personal information you&apos;ve shared by{" "}
              <Link href="/contact" className="font-medium text-brand-700 underline">
                contacting us
              </Link>
              .
            </p>
          ),
        },
        {
          heading: "Cookies",
          body: (
            <p>
              This website does not use advertising or tracking cookies. If analytics are added in future, this policy
              will be updated.
            </p>
          ),
        },
        {
          heading: "Updates",
          body: <p>We may update this policy from time to time. The latest version will always be on this page.</p>,
        },
      ]}
    />
  );
}
