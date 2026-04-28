import * as Icons from '@/components/LucideFix';
import React from 'react';

const FloatingContact = () => {
  const contacts = [
    {
      icon: <Icons.Phone size={20} />,
      label: 'Call Us',
      href: 'tel:+919319275051',
      bg: '#0052cc',
      color: 'white'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.049c0 2.12.554 4.189 1.607 6.04L0 24l6.105-1.603a11.845 11.845 0 005.94 1.587h.005c6.637 0 12.048-5.414 12.052-12.051a11.777 11.777 0 00-3.535-8.528" />
        </svg>
      ),
      label: 'WhatsApp',
      href: 'https://wa.me/919319275051',
      bg: '#25D366',
      color: 'white'
    },
    {
      icon: <Icons.Mail size={20} />,
      label: 'Email Us',
      href: 'mailto:corp@virsoftech.com',
      bg: '#EA4335',
      color: 'white'
    }

  ];

  return (
    <>
      <div className="floating-contact">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            className="contact-bubble"
            target={contact.href.startsWith('http') ? '_blank' : undefined}
            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            style={{ 
              backgroundColor: contact.bg,
              color: contact.color
            }}
          >
            <div className="bubble-icon">{contact.icon}</div>
            <span className="bubble-label">{contact.label}</span>
          </a>
        ))}
      </div>

      <style>{`
        .floating-contact {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 999;
          padding-right: 12px;
        }

        .contact-bubble {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          overflow: hidden;
          background: white;
          border: 2px solid white;
        }

        .bubble-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bubble-label {
          display: none;
        }

        .contact-bubble:hover {
          transform: scale(1.1) translateX(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .floating-contact {
            bottom: 2rem;
            top: auto;
            right: 1rem;
            transform: none;
            flex-direction: row;
            gap: 10px;
            padding-right: 0;
            z-index: 99;
          }

          .contact-bubble {
            width: 40px;
            height: 40px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }

          .contact-bubble:hover {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </>
  );
};

export default FloatingContact;
