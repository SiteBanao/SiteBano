import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/shared/LegalPage";
import { packages } from "@/data/packages";
import { formatINR } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for SiteBanao website design and development services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro={
        <p>
          These terms explain how SiteBanao (&quot;we&quot;, &quot;us&quot;) provides website design and development
          services. By placing an order you agree to them. We&apos;ve kept them short and clear.
        </p>
      }
      sections={[
        {
          heading: "Package pricing",
          body: (
            <>
              <p>
                Our packages ({packages.map((p) => `${p.name} ${formatINR(p.price)}`).join(", ")}) are{" "}
                <strong>one-time website development charges only</strong>. ₹999 is our starting development price,
                not the complete cost of owning a website.
              </p>
              <p>Final pricing depends on your requirements and is confirmed in writing before work begins.</p>
            </>
          ),
        },
        {
          heading: "What is not included",
          body: (
            <>
              <p>Unless explicitly agreed in writing, package prices do not include:</p>
              <ul>
                <li>Domain registration and renewal</li>
                <li>Hosting and renewal</li>
                <li>Premium themes, plugins, fonts, stock images or other paid assets</li>
                <li>Ongoing maintenance, updates or support after launch</li>
                <li>Content writing, photography or logo design</li>
                <li>Custom functionality such as bookings, payments, logins or e-commerce</li>
              </ul>
              <p>These are quoted separately. Third-party costs are payable to the respective provider.</p>
            </>
          ),
        },
        {
          heading: "Scope & revisions",
          body: (
            <p>
              Each package has a defined scope (number of pages and features) and a fixed number of revision rounds:
              Starter 1, Business 2, Professional 3. A revision round is one consolidated list of changes within the
              agreed scope. New pages, features or changes after approval are quoted separately. We do not offer
              unlimited revisions.
            </p>
          ),
        },
        {
          heading: "Your content & responsibilities",
          body: (
            <p>
              You are responsible for providing accurate content (text, images, logos) and for ensuring you have the
              right to use it. Timelines begin once all required content is received. Delays in content or feedback
              may extend delivery.
            </p>
          ),
        },
        {
          heading: "Ownership of domain & hosting",
          body: (
            <p>
              We recommend, and help ensure, that your domain and hosting accounts are registered in your name. You
              retain ownership and control of these accounts. Upon full payment, the final website files for your
              project are handed over to you.
            </p>
          ),
        },
        {
          heading: "Payments",
          body: (
            <p>
              Payment terms (such as an advance and balance on completion) are stated in your quotation. Work begins
              after the agreed advance is received. The website is published to your domain after full payment.
            </p>
          ),
        },
        {
          heading: "Timelines",
          body: (
            <p>
              Timelines shown on our website are typical estimates in working days and are not guarantees. Your
              quotation states the expected timeline for your project.
            </p>
          ),
        },
        {
          heading: "Cancellations & refunds",
          body: (
            <p>
              If you cancel before work starts, any advance paid will be handled as stated in your quotation. Once
              design or development work has started, fees for completed work are non-refundable. Third-party
              purchases (domain, hosting, assets) are subject to the provider&apos;s own refund policies.
            </p>
          ),
        },
        {
          heading: "Support & maintenance",
          body: (
            <p>
              We do not provide lifetime or unlimited support. Post-launch support and maintenance are available as
              optional paid plans, agreed separately.
            </p>
          ),
        },
        {
          heading: "Portfolio & demo designs",
          body: (
            <p>
              Designs in our portfolio are demonstration projects for fictional businesses, created to show our design
              styles. Your website will be customised to your content and brand. We may, with your permission, show
              your completed website in our portfolio.
            </p>
          ),
        },
        {
          heading: "Changes to these terms",
          body: (
            <p>
              We may update these terms from time to time. The version on this page applies to new orders. Questions?{" "}
              <Link href="/contact" className="font-medium text-brand-700 underline">
                Contact us
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
