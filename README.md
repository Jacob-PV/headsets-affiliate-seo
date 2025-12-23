# Headsets Affiliate SEO Site

A production-ready Amazon affiliate site for gaming headsets built with Next.js 14, TypeScript, and Tailwind CSS. Features 27 SEO-optimized landing pages, 22 products, advanced filtering, comparison tables, and WCAG 2.1 AA accessibility compliance.

## Recent Updates (December 2024)

### Improvements Implemented
- ✅ **Filter Logic Enhancement** - Multi-select filters now use AND logic instead of OR (e.g., selecting "noise cancelling" AND "built-in mic" shows only products with BOTH features)
- ✅ **Tag Expansion** - Product tags with "+X more" are now clickable to expand and view all tags
- ✅ **Multi-Category Infrastructure** - Added category system with keyboards as a second product category (15 keyboard products, 12 landing pages)
- ✅ **Amazon Link Validation** - Created validation script to check for broken or unavailable product links (run with `npm run validate-links`)

### Category Data Added
- **Headsets**: 22 products, 27 landing pages
- **Keyboards**: 15 products, 12 landing pages

### Scripts Added
- `npm run validate-links` - Validates all Amazon product links across categories

## Features

### Content & SEO
- **27 Landing Pages** - Diverse search intent coverage (platform-specific, budget, use-case, features)
- **22 Headset Products** - Realistic data with complete specs, pros/cons, pricing
- **SEO Optimization** - Unique metadata, canonical URLs, JSON-LD structured data, sitemap generation
- **Internal Linking** - Related guides system for improved site navigation and SEO

### User Experience
- **Advanced Filtering** - Real-time client-side filtering by connection, platform, budget, use case, features
- **Sortable Comparison Table** - Compare specs side-by-side with column sorting
- **FAQ Accordion** - Expandable Q&A sections on every landing page
- **Breadcrumb Navigation** - Clear site hierarchy and navigation
- **Responsive Design** - Mobile-first approach, works on all devices

### Design System
- **Typography** - Space Grotesk (headings) + Inter (body) + JetBrains Mono (specs)
- **Color Palette** - Amazon orange CTAs (#FF9900), blue accents (#2563EB), neutral grays
- **Animations** - Subtle fade-ins, hover effects, smooth transitions
- **Accessibility** - WCAG 2.1 AA compliant, keyboard navigation, screen reader support

### Technical
- **Static Generation** - All pages pre-rendered using Next.js 14 App Router
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Utility-first styling with custom design tokens
- **Amazon Affiliates** - Environment variable for affiliate tag injection

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **SEO:** next-sitemap
- **Fonts:** Google Fonts (Space Grotesk, Inter, JetBrains Mono)

## Project Structure

```
headsets-affiliate-seo/
├── app/
│   ├── layout.tsx              # Root layout with fonts and header/footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # Design system and Tailwind
│   ├── headsets/
│   │   ├── page.tsx            # Category hub (all guides)
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic landing page template
│   └── disclosure/
│       └── page.tsx            # Affiliate disclosure page
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # Reusable button component
│   │   ├── Badge.tsx           # Tag/badge component
│   │   └── Card.tsx            # Card container
│   ├── layout/
│   │   ├── Header.tsx          # Site header with navigation
│   │   ├── Footer.tsx          # Footer with disclosure
│   │   └── Breadcrumbs.tsx     # Breadcrumb navigation
│   ├── products/
│   │   ├── ProductCard.tsx     # Product display card
│   │   ├── AmazonButton.tsx    # Amazon CTA button
│   │   ├── ProsConsList.tsx    # Pros and cons display
│   │   └── TagChips.tsx        # Product tags
│   └── landing/
│       ├── LandingPageClient.tsx   # Client wrapper for filtering
│       ├── FilterPanel.tsx         # Sidebar filter controls
│       ├── ProductList.tsx         # Grid of product cards
│       ├── ComparisonTable.tsx     # Sortable specs table
│       ├── FAQ.tsx                 # Accordion FAQ component
│       └── RelatedGuides.tsx       # Related pages links
├── lib/
│   ├── products.ts             # Product data utilities
│   ├── landingPages.ts         # Landing page utilities
│   ├── filters.ts              # Filter configuration
│   ├── utils.ts                # Helper functions
│   └── seo/
│       ├── metadata.ts         # Next.js metadata generation
│       └── jsonLd.ts           # Schema.org structured data
├── types/
│   ├── product.ts              # Product type definitions
│   ├── landingPage.ts          # Landing page types
│   └── filter.ts               # Filter types
├── data/
│   └── headsets/
│       ├── products.json       # 22 headset products
│       └── landingPages.json   # 27 landing pages
├── public/                     # Static assets (images, etc.)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── next-sitemap.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd headsets-affiliate-seo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` and configure:
   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_AMAZON_AFFILIATE_TAG=yourtag-20
   ```

   **Important:** Replace `yourtag-20` with your actual Amazon Associates affiliate tag.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the site**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

The build process will:
- Statically generate all 27 landing pages
- Generate sitemap.xml and robots.txt
- Optimize images and assets
- Bundle and minify CSS/JS

## Content Management

### Adding New Products

Edit `data/headsets/products.json`:

```json
{
  "id": "unique-slug",
  "name": "Product Name",
  "brand": "Brand Name",
  "priceUsd": 99.99,
  "imageUrl": "/images/product.jpg",
  "amazonUrl": "https://amazon.com/dp/PRODUCTID",
  "shortSummary": "Brief description...",
  "pros": ["Pro 1", "Pro 2"],
  "cons": ["Con 1", "Con 2"],
  "tags": ["wired", "gaming", "has-mic"],
  "specs": {
    "connection": "wired",
    "hasMic": true,
    "useCases": ["gaming"],
    "platforms": ["pc", "ps5"],
    "batteryHours": null,
    "weightGrams": 300,
    "noiseCancelling": false,
    "openBack": false,
    "warranty": "2 years"
  }
}
```

### Adding New Landing Pages

Edit `data/headsets/landingPages.json`:

```json
{
  "slug": "unique-page-slug",
  "category": "headsets",
  "title": "SEO Title (60 chars max)",
  "metaDescription": "SEO description (155 chars max)",
  "h1": "Page Headline",
  "introMarkdown": "Introduction paragraph...",
  "requiredTags": ["wireless", "gaming"],
  "optionalFilters": ["platform", "budget"],
  "productIds": ["product-1", "product-2"],
  "faq": [
    {
      "question": "Question text?",
      "answer": "Answer text."
    }
  ],
  "updatedAt": "2025-12-19T00:00:00Z"
}
```

## SEO Configuration

### Sitemap

Configure in `next-sitemap.config.js`:

```javascript
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  generateRobotsTxt: true,
};
```

After build, sitemap is available at `/sitemap.xml`.

### Metadata

Each page generates unique metadata:
- Title tags (unique per page)
- Meta descriptions (155 chars max)
- Canonical URLs
- Open Graph tags
- Twitter Card tags

### Structured Data

JSON-LD schemas implemented:
- BreadcrumbList (all pages)
- FAQPage (landing pages)
- Article (landing pages)
- ItemList (product listings)
- Product (individual products)

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_SITE_URL`: Your production URL
     - `NEXT_PUBLIC_AMAZON_AFFILIATE_TAG`: Your Amazon affiliate tag
   - Deploy

3. **Automatic Deployments**
   - Every push to `main` triggers a new deployment
   - Preview deployments for pull requests

### Other Platforms

The site works on any platform that supports Next.js 14:
- Netlify
- AWS Amplify
- Railway
- Render
- Self-hosted with Docker

## Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Your site's production URL | Yes | `https://headsetfinder.com` |
| `NEXT_PUBLIC_AMAZON_AFFILIATE_TAG` | Amazon Associates affiliate tag | Yes | `yoursite-20` |

## Accessibility Features

- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Readers**: Proper ARIA labels and landmarks
- **Focus Indicators**: Visible focus states for all interactive elements
- **Color Contrast**: WCAG 2.1 AA compliant contrast ratios
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Skip Links**: Skip to main content for keyboard users
- **Reduced Motion**: Respects `prefers-reduced-motion` setting

## Performance Optimizations

- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Google Fonts loaded via next/font
- **Code Splitting**: Automatic code splitting per route
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Minimal JavaScript**: Server components where possible

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## License

MIT License - feel free to use for your own affiliate sites.

## Contributing

Pull requests welcome! Please ensure:
- TypeScript types are correct
- Accessibility standards maintained
- Build succeeds without errors
- Code follows existing patterns

## Support

For issues or questions:
- Open a GitHub issue
- Check existing documentation
- Review the code comments

---

Built with Next.js 14, TypeScript, and Tailwind CSS.
Production-ready affiliate site template for Amazon Associates.
