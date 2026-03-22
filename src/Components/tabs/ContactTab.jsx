import { useState } from 'react';

export default function ContactTab() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!subject.trim() && !message.trim()) return;
    const mailto = `mailto:yuvamk.swe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div style={{
      fontFamily: 'Tahoma, Verdana, Arial, sans-serif',
      fontSize: 12,
      background: '#D4D0C8',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* ── OUTLOOK EXPRESS TITLE BAR ── */}
      <div style={{
        background: 'linear-gradient(90deg, #000080 0%, #1084D0 100%)',
        color: '#FFFFFF',
        padding: '3px 8px',
        fontWeight: 'bold',
        fontSize: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        flexShrink: 0,
      }}>
        <span>✉</span>
        <span>New Message — Outlook Express</span>
      </div>

      {/* ── ADDRESS FIELDS (Outlook table style) ── */}
      <table cellPadding="0" cellSpacing="0" width="100%"
        style={{ borderBottom: '1px solid #808080', background: '#FFFFFF' }}>
        <tbody>
          <tr style={{ borderBottom: '1px solid #C0C0C0' }}>
            <td style={{
              width: 60, padding: '4px 8px',
              background: '#D4D0C8',
              borderRight: '1px solid #808080',
              fontWeight: 'bold', verticalAlign: 'middle',
              fontSize: 12,
            }}>
              <button className="ie-button" style={{ fontSize: 11, padding: '1px 4px' }}>To:</button>
            </td>
            <td style={{ padding: '2px 4px' }}>
              <input
                type="text"
                value="yuvamk.swe@gmail.com"
                readOnly
                style={{
                  width: '100%', border: 'none', outline: 'none',
                  fontFamily: 'Tahoma, sans-serif', fontSize: 12,
                  background: '#FFFFFF', color: '#000080', fontWeight: 'bold',
                }}
              />
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid #C0C0C0' }}>
            <td style={{
              padding: '4px 8px',
              background: '#D4D0C8',
              borderRight: '1px solid #808080',
              fontWeight: 'bold', verticalAlign: 'middle',
              fontSize: 12,
            }}>
              <button className="ie-button" style={{ fontSize: 11, padding: '1px 4px' }}>Cc:</button>
            </td>
            <td style={{ padding: '2px 4px' }}>
              <input
                type="text"
                placeholder=""
                readOnly
                style={{
                  width: '100%', border: 'none', outline: 'none',
                  fontFamily: 'Tahoma, sans-serif', fontSize: 12,
                  background: '#FFFFFF',
                }}
              />
            </td>
          </tr>
          <tr>
            <td style={{
              padding: '4px 8px',
              background: '#D4D0C8',
              borderRight: '1px solid #808080',
              fontWeight: 'bold', verticalAlign: 'middle',
              fontSize: 12,
            }}>
              Subject:
            </td>
            <td style={{ padding: '2px 4px' }}>
              <input
                type="text"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                placeholder="Enter subject..."
                style={{
                  width: '100%', border: 'none', outline: 'none',
                  fontFamily: 'Tahoma, sans-serif', fontSize: 12,
                  background: '#FFFFFF',
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* ── MESSAGE BODY ── */}
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Write your message here..."
        style={{
          flex: 1,
          minHeight: 280,
          width: '100%',
          border: 'none',
          borderTop: '2px solid #808080',
          resize: 'none',
          padding: '8px 10px',
          fontFamily: 'Tahoma, Verdana, Arial, sans-serif',
          fontSize: 13,
          background: '#FFFFFF',
          outline: 'none',
          lineHeight: 1.6,
          boxSizing: 'border-box',
        }}
      />

      {/* ── BOTTOM INFO BAR ── */}
      <div style={{
        padding: '4px 8px',
        background: '#D4D0C8',
        borderTop: '1px solid #808080',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 6,
        flexShrink: 0,
      }}>
        <span style={{ fontSize: 11, color: '#555' }}>
          From: Visitor &nbsp;|&nbsp;
          <a href="https://github.com/YuvamKumarSWE" target="_blank" rel="noopener noreferrer" style={{ color: '#0000EE' }}>GitHub</a>
          &nbsp;|&nbsp;
          <a href="https://www.linkedin.com/in/yuvamkumar/" target="_blank" rel="noopener noreferrer" style={{ color: '#0000EE' }}>LinkedIn</a>
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {sent && (
            <span style={{ color: '#006600', fontSize: 11 }}>✅ Opening mail client...</span>
          )}
          <button
            className="ie-button"
            onClick={handleSend}
            style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12 }}
          >
            📤 Send Message
          </button>
        </div>
      </div>

      {/* ── EXTRA: Social/contact links section ── */}
      <div style={{ padding: '8px 16px', background: '#F0F0F0', borderTop: '1px solid #C0C0C0' }}>
        <p style={{ fontWeight: 'bold', marginBottom: 6, color: '#000080', fontSize: 12 }}>
          📋 Other ways to reach me:
        </p>
        <table cellPadding="4" cellSpacing="0" width="100%" style={{ fontSize: 12 }}>
          <tbody>
            <tr style={{ background: '#FFFFFF' }}>
              <td style={{ width: 80, fontWeight: 'bold', color: '#555' }}>E-mail:</td>
              <td><a href="mailto:yuvamk.swe@gmail.com" style={{ color: '#0000EE' }}>yuvamk.swe@gmail.com</a></td>
              <td className="ie-contact-desc" style={{ color: '#888', fontSize: 11 }}>Best way to reach me</td>
            </tr>
            <tr style={{ background: '#F5F5F5' }}>
              <td style={{ fontWeight: 'bold', color: '#555' }}>GitHub:</td>
              <td><a href="https://github.com/YuvamKumarSWE" target="_blank" rel="noopener noreferrer" style={{ color: '#0000EE' }}>@YuvamKumarSWE</a></td>
              <td className="ie-contact-desc" style={{ color: '#888', fontSize: 11 }}>Browse my code</td>
            </tr>
            <tr style={{ background: '#FFFFFF' }}>
              <td style={{ fontWeight: 'bold', color: '#555' }}>LinkedIn:</td>
              <td><a href="https://www.linkedin.com/in/yuvamkumar/" target="_blank" rel="noopener noreferrer" style={{ color: '#0000EE' }}>/in/yuvamkumar</a></td>
              <td className="ie-contact-desc" style={{ color: '#888', fontSize: 11 }}>Professional network</td>
            </tr>
            <tr style={{ background: '#F5F5F5' }}>
              <td style={{ fontWeight: 'bold', color: '#555' }}>Resume:</td>
              <td>
                <a
                  href="https://drive.google.com/file/d/1TTAAmm-GkSXFrVPD64hHAJRL4WwiOIHE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0000EE' }}
                >
                  View on Google Drive
                </a>
              </td>
              <td className="ie-contact-desc" style={{ color: '#888', fontSize: 11 }}>PDF format</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
