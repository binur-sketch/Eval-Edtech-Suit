import React from 'react';
import ProductsSection from '@/components/ProductsSection';
import NewsletterSection from '@/components/NewsletterSection';

const Products = () => {
  return (
    <div className="products-page pt-32">
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '1rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--secondary)' }}>Hardware <span className="gradient-text">Products</span></h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', maxWidth: '800px' }}>
            Discover our range of advanced scanning hardware and evaluation software designed specifically for high-volume assessment processing.
          </p>
      </div>
      
      <ProductsSection isPage={true} />
      
      <NewsletterSection />
    </div>
  );
};

export default Products;
