import { useState } from 'react';

/**
 * Centralized form handler for eVAL website.
 * Handles validation and submission to Supabase.
 */
export const useFormSubmit = (options = {}) => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const submitForm = async (formData, formType = 'General Enquiry') => {
    setStatus('loading');

    // 1. Validation
    if (!formData.email || !formData.email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid professional email.');
      return;
    }

    const formRecipient = import.meta.env.VITE_FORM_EMAIL || "binur@virsoftech.com";
    try {
      // 3. FormSubmit.co AJAX Call
      const response = await fetch(`https://formsubmit.co/ajax/${formRecipient}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New ${formType} from eVAL Website`,
          _template: 'table', // Nicely formatted email
          _captcha: 'false',  // Disable captcha for AJAX flow
          form_type: formType
        }),
      });

      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        setStatus('success');
        setMessage(options.successMessage || 'Thank you! Your message has been sent successfully.');
        if (options.onSuccess) options.onSuccess();
      } else {
        throw new Error(result.message || 'Submission failed');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again later or contact us directly at corp@virsoftech.com');
    }
  };

  return { status, message, submitForm, setStatus };
};
