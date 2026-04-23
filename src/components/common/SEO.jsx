import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = '/og-image.jpg', 
  ogType = 'website',
  canonicalUrl
}) => {
  const siteTitle = 'eVAL – Examination Evaluation, Assessment & Learning Solutions';
  const fullTitle = title ? `${title} | eVAL` : siteTitle;
  const defaultDescription = 'eVAL provides secure, scalable, and automated examination solutions including OMR, CBT, AI Proctoring, and LMS for institutions worldwide.';
  const defaultKeywords = 'OMR Software, CBT Platform, AI Proctoring, Exam Evaluation, OMR Sheet Scanning, Assessment Solutions, LMS, QPMS, Education Technology';

  const url = canonicalUrl || window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
