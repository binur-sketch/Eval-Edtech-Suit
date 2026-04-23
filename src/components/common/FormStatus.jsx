import React from 'react';
import * as Icons from '@/components/LucideFix';

const FormStatus = ({ status, message }) => {
  if (status === 'idle' || status === 'loading') return null;

  const isSuccess = status === 'success';
  
  return (
    <div style={{
      padding: '1rem',
      borderRadius: '0.75rem',
      marginTop: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontSize: '0.875rem',
      background: isSuccess ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
      color: isSuccess ? '#15803d' : '#b91c1c',
      border: `1px solid ${isSuccess ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`
    }}>
      {isSuccess ? <Icons.CheckCircle size={18} /> : <Icons.AlertCircle size={18} />}
      <span>{message}</span>
    </div>
  );
};

export default FormStatus;
