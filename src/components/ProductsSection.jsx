import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'AXIOME Alpha AXM960 Scanner',
    image: '/assets/images/axm960_scanner.png',
    icon: '🖨️',
    description: 'Axiome AXM960 is one of the best OMR scanner available in market. Mark Reader is authorised dealer of AXIOME products in India.'
  },
  {
    id: 2,
    title: 'AXIOME Alpha AXM980 Scanner',
    image: '/assets/images/axm980_scanner.png',
    icon: '🖨️',
    description: 'The Axiome AXM980 Optical Mark Reader with a large input tray and a fast paper transport is an ideal way to process volumes of forms and to transfer automatically data into your computer.'
  },
  {
    id: 3,
    title: 'Intec CS5000 5 Color Printer',
    image: '/assets/images/intec_cs5000_printer.png',
    icon: '🖨️',
    description: 'ColorSplash CS5000 series takes quality printing to the next level! Perfect for security items, wedding stationery and more... ColorSplash digital imaging systems are aimed towards print professionals seeking an affordable, high-quality production device.'
  },
  {
    id: 4,
    title: 'KaptureALL Software',
    image: null,
    icon: '💻',
    description: 'With KaptureALL it is possible to extract data from simple forms. Furthermore, it is possible to analyze the extracted data in different ways.'
  },
  {
    id: 5,
    title: 'Hemera C',
    image: null,
    icon: '📄',
    description: 'The HEMERA C processes and sorts up to 200 documents per minute on both sides & in color. It can easily handle mixed stacks & different document types within 1 run (US checks up to DIN A3). Its automatic document feeder from the stack & its freely accessible paper transport guarantee maximum user-friendliness with low maintenance & service costs.'
  },
  {
    id: 6,
    title: 'Hemera S',
    image: null,
    icon: '📑',
    description: 'The HEMERA S scans up to 360 documents per minute on both sides and in color - and then sorts them into up to three compartments. It also processes extremely heterogeneous document stacks reliably and trouble-free (US checks up to DIN A3). The documents are collected automatically, significantly reducing total cost of ownership.'
  }
];

const ProductsSection = ({ isPage = false }) => {
  return (
    <section className="section-padding" style={{ background: isPage ? 'var(--background)' : 'white' }}>
      <div className="container">
        {!isPage && (
           <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--secondary)', fontWeight: '700' }}>Our Products</h2>
              <div style={{ width: '80px', height: '2px', background: 'var(--primary)', marginTop: '0.75rem' }}></div>
           </div>
        )}
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '0',
          borderLeft: '1px solid var(--border)',
          borderTop: '1px solid var(--border)'
        }}>
          {products.map(product => (
            <div key={product.id} className="product-card" style={{ 
              padding: '0', 
              display: 'flex',
              flexDirection: 'column',
              background: 'white',
              borderRight: '1px solid var(--border)',
              borderBottom: '1px solid var(--border)'
            }}>
              <div style={{ background: '#fcfcfc', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px' }}>
                {product.image ? (
                  <img src={product.image} alt={product.title} loading="lazy" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                ) : (
                  <div style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    gap: '1rem', width: '100%', height: '100%',
                    background: 'linear-gradient(135deg, rgba(229,57,53,0.04) 0%, rgba(31,31,31,0.03) 100%)',
                    borderRadius: '1rem'
                  }}>
                    <div style={{ fontSize: '4rem', lineHeight: 1 }}>{product.icon}</div>
                    <div style={{
                      fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase',
                      letterSpacing: '0.1em', color: 'var(--muted-foreground)'
                    }}>{product.title}</div>
                  </div>
                )}
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--secondary)', fontWeight: '700' }}>{product.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {!isPage && (
           <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link to="/products" className="btn btn-outline" style={{ padding: '0.75rem 2rem', fontWeight: 'bold' }}>View All Products</Link>
           </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;

