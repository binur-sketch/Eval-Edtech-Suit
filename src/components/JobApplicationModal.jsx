import React, { useState } from 'react';
import * as Icons from './LucideFix';
import { useFormSubmit } from '../hooks/useFormSubmit';
import FormStatus from './common/FormStatus';

const JobApplicationModal = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    experience: '',
  });
  const [file, setFile] = useState(null);

  const { status, message, submitForm, setStatus, setMessage } = useFormSubmit({
    successMessage: "Your application has been submitted successfully! Our team will review it and get back to you."
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload your resume.");
      return;
    }

    // Using FormData to support file upload with formsubmit.co
    const submissionData = new FormData();
    submissionData.append('name', formData.name);
    submissionData.append('email', formData.email);
    submissionData.append('phone', formData.phone);
    submissionData.append('linkedin', formData.linkedin);
    submissionData.append('experience', formData.experience);
    submissionData.append('job_title', job.title);
    submissionData.append('department', job.department);
    submissionData.append('resume', file);
    submissionData.append('_captcha', 'false');
    submissionData.append('_template', 'table');
    submissionData.append('_subject', `New Job Application: ${job.title} from ${formData.name}`);

    // Since useFormSubmit currently expects JSON, we will handle the FormData submission here
    // but we can update useFormSubmit to be more flexible.
    // For now, I'll call the AJAX manually or update the hook.
    
    setStatus('loading');
    try {
      const formRecipient = "corp@virsoftech.com";
      const response = await fetch(`https://formsubmit.co/ajax/${formRecipient}`, {
        method: "POST",
        body: submissionData, // fetch automatically sets the correct content-type for FormData
      });

      const result = await response.json();
      if (result.success === "true" || result.success === true) {
        setStatus('success');
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage(err.message || 'Something went wrong. Please try again or contact corp@virsoftech.com directly.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><Icons.X size={24} /></button>
        
        <div className="modal-header">
          <span className="badge">Apply Now</span>
          <h2>{job.title}</h2>
          <p>{job.department} • {job.location}</p>
        </div>

        <form onSubmit={handleSubmit} className="application-form">
          <div className="form-grid">
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 99xx" />
            </div>
            <div className="input-group">
              <label>LinkedIn Profile (Optional)</label>
              <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/..." />
            </div>
          </div>

          <div className="input-group">
            <label>Years of Experience</label>
            <input type="text" name="experience" required value={formData.experience} onChange={handleChange} placeholder="e.g. 5 years" />
          </div>

          <div className="input-group">
            <label>Upload Resume (PDF/DOC/Image)</label>
            <div className="file-upload-wrapper">
              <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" onChange={handleFileChange} required id="resume-upload" />
              <label htmlFor="resume-upload" className="file-upload-label">
                <Icons.Upload size={20} />
                {file ? file.name : 'Choose File'}
              </label>
            </div>
          </div>

          <button type="submit" disabled={status === 'loading'} className="btn btn-primary submit-btn">
            {status === 'loading' ? 'Submitting...' : 'Submit Application'}
          </button>

          <FormStatus status={status} message={message} />
        </form>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(2, 6, 23, 0.7);
          backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background: white;
          width: 100%;
          max-width: 650px;
          border-radius: 2.5rem;
          padding: 3.5rem;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 50px 100px rgba(0,0,0,0.2);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-close {
          position: absolute;
          top: 2rem;
          right: 2.5rem;
          background: var(--muted);
          border: none;
          padding: 0.5rem;
          border-radius: 50%;
          cursor: pointer;
          color: var(--muted-foreground);
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: var(--primary);
          color: white;
          transform: rotate(90deg);
        }

        .modal-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .modal-header h2 {
          margin: 0.5rem 0;
          font-size: 2rem;
        }

        .application-form {
          display: grid;
          gap: 1.5rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .input-group label {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--foreground);
        }

        .input-group input {
          padding: 0.875rem 1.25rem;
          border-radius: 1rem;
          border: 1px solid var(--border);
          background: #f8fafc;
          font-size: 0.9375rem;
          font-family: inherit;
        }

        .file-upload-wrapper {
          position: relative;
        }

        .file-upload-wrapper input {
          position: absolute;
          opacity: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .file-upload-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: #f8fafc;
          border: 2px dashed var(--border);
          border-radius: 1rem;
          color: var(--muted-foreground);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .file-upload-wrapper:hover .file-upload-label {
          border-color: var(--primary);
          background: var(--primary-light);
          color: var(--primary);
        }

        .submit-btn {
          width: 100%;
          padding: 1.25rem;
          margin-top: 1rem;
          border-radius: 1rem;
          font-size: 1.125rem;
          font-family: 'Outfit', sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          .modal-content {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default JobApplicationModal;
