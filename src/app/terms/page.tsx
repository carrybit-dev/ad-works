{/*
  OWNER TO REVIEW — lawyer review recommended before relying on this.
  Defaults applied from the draft (owner can adjust):
  - Effective date: September 26, 2026
*/}
import type { Metadata } from 'next';
import LegalLayout, { LegalSection } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Fardin Ad Works YouTube video promotion campaigns.',
};

const EFFECTIVE_DATE = 'September 26, 2026';

export default function TermsPage() {
  return (
    <LegalLayout eyebrow="LEGAL" title="Terms of Service" effectiveDate={EFFECTIVE_DATE}>
      <LegalSection heading="1. The service">
        <p>
          Fardin Ad Works runs paid Google Ads discovery campaigns to promote a client&apos;s
          YouTube video to targeted viewers. The service uses Google&apos;s advertising platform
          to buy real paid traffic. We do not use bots, click farms, or fabricated views.
        </p>
      </LegalSection>

      <LegalSection heading="2. What you are buying">
        <p>
          You are buying campaign setup, targeting, management, and paid advertising delivery
          for the YouTube video URL you provide. Package view figures and timeframes are
          estimates, not guarantees. Actual delivery depends on factors outside our control,
          including ad-auction conditions, audience availability, ad review, viewer behavior,
          and YouTube&apos;s systems.
        </p>
      </LegalSection>

      <LegalSection heading="3. No guaranteed outcomes">
        <p>
          We do not promise an exact number of views, watch hours, subscribers, likes,
          comments, sales, revenue, monetization approval, or organic or algorithmic
          promotion. A paid campaign may influence channel activity, but it does not guarantee
          any particular result beyond our good-faith management of the purchased campaign.
        </p>
      </LegalSection>

      <LegalSection heading="4. Your responsibilities">
        <p>
          You must provide the correct, publicly accessible YouTube video URL and accurate
          targeting information. Your video, channel, claims, music, images, and other content
          must comply with YouTube&apos;s Terms of Service, Community Guidelines, advertising
          requirements, and monetization policies. You confirm that you have the rights and
          permissions needed to promote the content.
        </p>
      </LegalSection>

      <LegalSection heading="5. Payment and ad spend">
        <p>
          Payment is due upfront in United States dollars (USD). Once campaign funds have been
          spent through Google Ads, that ad spend is non-recoverable. Refunds for unspent
          funds are handled under the Refund Policy.
        </p>
      </LegalSection>

      <LegalSection heading="6. Campaign changes">
        <p>
          You may request changes to the video URL, targeting, or campaign instructions
          before launch. After launch, we will try to accommodate reasonable changes, but
          changes may interrupt delivery, require a new ad review, or affect estimated
          results. A replacement video must meet the same platform requirements.
        </p>
      </LegalSection>

      <LegalSection heading="7. Suspension or refusal">
        <p>
          We may pause or decline a campaign if the content is unlawful, misleading,
          infringing, unsafe, or rejected by Google or YouTube. Any unspent budget will be
          handled under the Refund Policy.
        </p>
      </LegalSection>

      <LegalSection heading="8. Limitation of liability">
        <p>
          To the fullest extent permitted by law, Fardin Ad Works will not be liable for
          indirect, incidental, special, or consequential losses, including lost revenue,
          lost subscribers, loss of monetization, or account action by a platform. Our total
          liability for a claim related to an order is capped at the amount you paid for that
          order. Nothing here limits rights or liabilities that cannot legally be limited.
        </p>
      </LegalSection>

      <LegalSection heading="9. Contact">
        <p>
          Questions about these terms may be sent to contact@fardintareque.com.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
