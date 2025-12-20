import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure - Headset Finder',
  description:
    'Full disclosure about our Amazon affiliate relationships and how we make money through product recommendations.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function DisclosurePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Affiliate Disclosure' },
        ]}
      />

      <article className="max-w-3xl mx-auto prose prose-lg">
        <h1 className="font-display text-4xl font-bold text-gray-900 mb-6">
          Affiliate Disclosure
        </h1>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">
            How We Make Money
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Headset Finder participates in the Amazon Associates Program and other
            affiliate marketing programs. This means we may earn a commission when you
            purchase products through links on our site.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When you click on an affiliate link and make a purchase, Amazon and other
            retailers pay us a small percentage of the sale. This comes at{' '}
            <strong>no additional cost to you</strong> - you pay the same price whether
            you use our link or go directly to the retailer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">
            Our Editorial Independence
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While we earn commissions from affiliate links, this does not influence our
            editorial content or product recommendations. We only recommend products we
            genuinely believe provide value to our readers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our reviews and buying guides are based on:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
            <li>Thorough research of product specifications</li>
            <li>Analysis of user reviews and feedback</li>
            <li>Comparison of features across similar products</li>
            <li>Consideration of value for money at different price points</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">
            Supporting Our Work
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Creating comprehensive buying guides and maintaining this site requires time
            and resources. Affiliate commissions help us:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
            <li>Keep our content free for everyone</li>
            <li>Regularly update our guides with the latest products</li>
            <li>Conduct in-depth research on new headset releases</li>
            <li>Maintain and improve our website</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            If you find our guides helpful, using our affiliate links is a great way to
            support our work at no cost to you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">
            Price and Availability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Prices and availability of products are subject to change. While we strive to
            keep information up to date, we cannot guarantee the accuracy of prices or
            product availability on retailer websites. Please check the retailer's website
            for current prices and availability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">
            Questions?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about our affiliate relationships or how we operate,
            please don't hesitate to reach out. Transparency is important to us, and we're
            happy to answer any concerns you may have.
          </p>
        </section>

        <div className="bg-gray-50 border-l-4 border-accent-blue p-6 rounded">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>FTC Disclosure:</strong> In accordance with the Federal Trade
            Commission's 16 CFR Part 255 (Guides Concerning the Use of Endorsements and
            Testimonials in Advertising), we disclose that we have affiliate relationships
            with Amazon and other retailers mentioned on this site.
          </p>
        </div>
      </article>
    </div>
  );
}
