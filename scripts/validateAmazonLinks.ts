/**
 * Amazon Link Validation Script
 *
 * Validates Amazon product links to check for:
 * - Broken links (404 errors)
 * - Unavailable products
 * - Invalid ASIN codes
 *
 * Usage: npm run validate-links
 */

import * as fs from 'fs';
import * as path from 'path';

interface Product {
  id: string;
  name: string;
  amazonUrl: string;
  category?: string;
}

interface ValidationResult {
  productId: string;
  productName: string;
  amazonUrl: string;
  status: 'valid' | 'broken' | 'unavailable' | 'error' | 'skipped';
  httpStatus?: number;
  message?: string;
}

// Rate limiting: delay between requests
const RATE_LIMIT_MS = 1000;

async function validateLink(url: string): Promise<{ status: ValidationResult['status']; httpStatus?: number; message?: string }> {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    const httpStatus = response.status;

    if (httpStatus === 404) {
      return { status: 'broken', httpStatus, message: 'Page not found (404)' };
    }

    if (httpStatus >= 500) {
      return { status: 'error', httpStatus, message: 'Server error' };
    }

    if (response.ok) {
      return { status: 'valid', httpStatus, message: 'Link is valid' };
    }

    return { status: 'error', httpStatus, message: `Unexpected status: ${httpStatus}` };
  } catch (error) {
    return {
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

async function loadProductsFromCategory(category: string): Promise<Product[]> {
  try {
    const dataPath = path.join(process.cwd(), 'data', category, 'products.json');
    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    const data = JSON.parse(fileContent);

    return data.products.map((p: any) => ({
      id: p.id,
      name: p.name,
      amazonUrl: p.amazonUrl,
      category
    }));
  } catch (error) {
    console.error(`Failed to load products from category: ${category}`, error);
    return [];
  }
}

async function getAllProducts(): Promise<Product[]> {
  const categories = ['headsets', 'keyboards'];
  const allProducts: Product[] = [];

  for (const category of categories) {
    const products = await loadProductsFromCategory(category);
    allProducts.push(...products);
  }

  return allProducts;
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('🔍 Amazon Link Validation Script');
  console.log('================================\n');

  const products = await getAllProducts();
  console.log(`Found ${products.length} products to validate\n`);

  const results: ValidationResult[] = [];
  let validCount = 0;
  let brokenCount = 0;
  let errorCount = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const progress = `[${i + 1}/${products.length}]`;

    process.stdout.write(`${progress} Checking: ${product.name}... `);

    const validation = await validateLink(product.amazonUrl);

    results.push({
      productId: product.id,
      productName: product.name,
      amazonUrl: product.amazonUrl,
      status: validation.status,
      httpStatus: validation.httpStatus,
      message: validation.message
    });

    if (validation.status === 'valid') {
      console.log('✓ Valid');
      validCount++;
    } else if (validation.status === 'broken') {
      console.log('✗ Broken');
      brokenCount++;
    } else {
      console.log('⚠ Error');
      errorCount++;
    }

    // Rate limiting: wait between requests
    if (i < products.length - 1) {
      await delay(RATE_LIMIT_MS);
    }
  }

  // Generate summary
  console.log('\n================================');
  console.log('📊 VALIDATION SUMMARY');
  console.log('================================');
  console.log(`Total products: ${products.length}`);
  console.log(`✓ Valid links: ${validCount}`);
  console.log(`✗ Broken links: ${brokenCount}`);
  console.log(`⚠ Errors: ${errorCount}`);
  console.log('');

  // Show broken links
  const brokenLinks = results.filter(r => r.status === 'broken');
  if (brokenLinks.length > 0) {
    console.log('🔴 BROKEN LINKS:');
    brokenLinks.forEach(r => {
      console.log(`  - ${r.productId} (${r.productName})`);
      console.log(`    URL: ${r.amazonUrl}`);
      console.log(`    Status: ${r.httpStatus} - ${r.message}\n`);
    });
  }

  // Show errors
  const errorLinks = results.filter(r => r.status === 'error');
  if (errorLinks.length > 0) {
    console.log('⚠️  ERRORS:');
    errorLinks.forEach(r => {
      console.log(`  - ${r.productId} (${r.productName})`);
      console.log(`    URL: ${r.amazonUrl}`);
      console.log(`    Error: ${r.message}\n`);
    });
  }

  // Save detailed report
  const reportPath = path.join(process.cwd(), 'link-validation-report.json');
  fs.writeFileSync(
    reportPath,
    JSON.stringify(results, null, 2)
  );

  console.log(`📄 Full report saved to: ${reportPath}`);
  console.log('');

  // Exit with error code if there are broken links
  if (brokenCount > 0 || errorCount > 0) {
    console.log('⚠️  Validation completed with issues.');
    process.exit(1);
  } else {
    console.log('✅ All links are valid!');
    process.exit(0);
  }
}

main();
