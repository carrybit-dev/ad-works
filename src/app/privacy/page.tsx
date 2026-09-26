{/*
  OWNER TO REVIEW — lawyer review recommended before relying on this.
  Defaults applied from the draft (owner can adjust):
  - Effective date: September 26, 2026
  - Record retention: 24 months after campaign ends
  - Material change notice: 14 days where reasonably possible
*/}
import type { Metadata } from 'next';
import LegalLayout, { LegalSection } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Fardin Ad Works — how we collect, use, and protect your information.',
};

const EFFECTIVE_DATE = 'September 26, 2026';

export default function PrivacyPage() {
  return (
    <LegalLayout eyebrow="LEGAL" title="Privacy Policy" effectiveDate={EFFECTIVE_DATE}>
      <LegalSection heading="1. Information we collect">
        <p>We collect the information needed to provide and support the service, including:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-white">Contact details:</strong> your name and email address.
          </li>
          <li>
            <strong className="text-white">Campaign details:</strong> YouTube channel and video
            URLs, targeting preferences, order reference, and campaign instructions.
          </li>
          <li>
            <strong className="text-white">Payment information:</strong> payments are processed
            by our payment provider. We do not store full payment-card details.
          </li>
          <li>
            <strong className="text-white">Website data:</strong> basic device, browser,
            referral, and usage information collected through essential and analytics cookies
            or similar technologies.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="2. How we use information">
        <p>
          We use this information to process orders, set up and manage campaigns, communicate
          with you, provide support, prevent misuse, improve our website and services,
          maintain business records, and meet legal obligations.
        </p>
      </LegalSection>

      <LegalSection heading="3. When we share information">
        <p>
          We share only what is reasonably necessary with service providers that help us
          operate, including Google for advertising delivery and our payment processor for
          payment processing. These providers handle information under their own terms and
          privacy practices. We may also disclose information when required by law or to
          protect our rights and users. We do not sell personal information.
        </p>
      </LegalSection>

      <LegalSection heading="4. Cookies and analytics">
        <p>
          Our website may use essential cookies for basic operation and analytics cookies to
          understand visits and improve the site. Where required, we will ask for consent
          before using non-essential cookies. You can limit cookies through your browser
          settings, although some site features may not work as intended.
        </p>
      </LegalSection>

      <LegalSection heading="5. Retention">
        <p>
          We keep campaign and contact records for 24 months after the campaign ends, unless
          a longer period is needed for tax, accounting, dispute, fraud-prevention, or other
          legal reasons. We delete or anonymize information when it is no longer needed.
        </p>
      </LegalSection>

      <LegalSection heading="6. Your choices and rights">
        <p>
          You may ask to access, correct, or delete your personal information by emailing
          contact@fardintareque.com. Depending on where you live, you may have additional
          privacy rights. We may need to verify your request and may retain information
          where the law requires it.
        </p>
      </LegalSection>

      <LegalSection heading="7. Security and international processing">
        <p>
          We use reasonable administrative and technical measures to protect personal
          information. No online service can guarantee absolute security. Google, the payment
          processor, and other service providers may process information in countries
          different from yours, subject to their own safeguards and applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="8. Changes to this policy">
        <p>
          We may update this policy when our services or legal obligations change. The
          revised version will be posted on the website with a new effective date. For
          material changes, we will provide notice 14 days before they take effect when
          reasonably possible.
        </p>
      </LegalSection>

      <LegalSection heading="9. Contact">
        <p>
          For privacy questions or requests, email contact@fardintareque.com.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
