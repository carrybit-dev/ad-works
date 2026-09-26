{/*
  OWNER TO REVIEW — lawyer review recommended before relying on this.
  Defaults applied from the draft (owner can adjust):
  - Effective date: September 26, 2026
  - Material under-delivery threshold: 80% of estimated views
  - Claim window: 14 days after completion notice
  - Remedy confirmation: 7 business days
  - Approved refund processing: 7 business days
*/}
import type { Metadata } from 'next';
import LegalLayout, { LegalSection } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description:
    'Refund Policy for Fardin Ad Works YouTube video promotion campaigns.',
};

const EFFECTIVE_DATE = 'September 26, 2026';

export default function RefundPage() {
  return (
    <LegalLayout eyebrow="LEGAL" title="Refund Policy" effectiveDate={EFFECTIVE_DATE}>
      <LegalSection heading="Before launch">
        <p>
          If you cancel before the campaign launches and no ad spend has been incurred, you
          will receive a full refund.
        </p>
      </LegalSection>

      <LegalSection heading="During a campaign">
        <p>
          If you cancel after launch, we will stop the campaign as soon as reasonably
          possible and refund the unspent campaign budget on a pro-rata basis. Amounts
          already spent through Google Ads are non-recoverable.
        </p>
      </LegalSection>

      <LegalSection heading="After completion">
        <p>
          Completed campaigns are not refundable because the advertising budget has already
          been spent with Google. This does not limit the under-delivery remedy below.
        </p>
      </LegalSection>

      <LegalSection heading="Material under-delivery">
        <p>
          A campaign is materially under-delivered if it finishes below 80% of the
          package&apos;s estimated view figure, excluding delivery limits caused by the
          client&apos;s content, incorrect information, requested pauses, or platform
          restrictions. If material under-delivery occurs, you may choose either:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-white">A free extension:</strong> we continue the campaign
            using our funds for a reasonable period to address the shortfall.
          </li>
          <li>
            <strong className="text-white">A proportional credit:</strong> we issue a service
            credit based on the undelivered portion for use on a future campaign.
          </li>
        </ul>
        <p>
          Tell us your preferred remedy within 14 days after the campaign completion notice.
          We will confirm the remedy within 7 business days after reviewing the campaign
          record.
        </p>
      </LegalSection>

      <LegalSection heading="Disapproved content or ads">
        <p>
          If Google or YouTube disapproves the video or ads because of the client&apos;s
          content, we will refund the unspent campaign budget. Any amount already spent
          before the disapproval is non-recoverable. The client remains responsible for
          ensuring that the content and channel meet platform rules.
        </p>
      </LegalSection>

      <LegalSection heading="How to request a cancellation, refund, or remedy">
        <p>
          Email contact@fardintareque.com with your order reference, the promoted video URL,
          and a short explanation of the request. Approved refunds will be sent to the
          original payment method within 7 business days, although the payment provider or
          bank may take additional time to post the funds.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
