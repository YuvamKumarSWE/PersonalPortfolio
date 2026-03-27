export default function AboutTab() {
  return (
    <div style={{
      fontFamily: 'Tahoma, Verdana, Arial, sans-serif',
      fontSize: 13,
      padding: 16,
      background: '#FFFFFF',
      minHeight: '100%',
      boxSizing: 'border-box',
    }}>

      {/* ── PAGE TITLE ── */}
      <h1 style={{
        fontFamily: 'Tahoma, Verdana, Arial, sans-serif',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000080',
        marginBottom: 4,
        borderBottom: '2px solid #000080',
        paddingBottom: 4,
      }}>
        Yuvam Kumar — Software Developer
      </h1>
      <p style={{ fontSize: 12, color: '#555', marginBottom: 12 }}>
        UBC Computer Science · Open to opportunities
      </p>


      <hr style={{ borderTop: '1px solid #808080', borderBottom: '1px solid #FFFFFF', margin: '8px 0' }} />

      {/* ── ABOUT ME HEADER ── */}
      <div style={{
        background: '#000080', color: '#FFFFFF',
        padding: '4px 8px', fontWeight: 'bold', fontSize: 13, marginBottom: 0,
      }}>
        📋 About Me
      </div>

      {/* ── MAIN LAYOUT (flex, stacks on mobile) ── */}
      <div className="ie-about-cols" style={{
        display: 'flex',
        border: '1px solid #808080',
        borderTop: 'none',
      }}>

        {/* Left column: photo + visitor counter */}
        <div style={{
          background: '#F0F0F0',
          borderRight: '1px solid #808080',
          textAlign: 'center',
          padding: 12,
          flexShrink: 0,
          width: 180,
        }}>
          {/* Profile photo placeholder */}
          <div style={{
            width: 120, height: 140,
            background: '#D4D0C8',
            border: '2px inset #808080',
            margin: '0 auto 8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#808080', fontSize: 11,
          }}>
            [Photo]
          </div>
          <img
            src="/images/yuvam.jpeg"
            alt="Yuvam Kumar"
            style={{ width: 120, height: 140, objectFit: 'cover', border: '2px inset #808080', display: 'none', margin: '0 auto 8px' }}
            onLoad={e => {
              e.target.style.display = 'block';
              e.target.previousSibling.style.display = 'none';
            }}
            onError={() => {}}
          />
          <hr style={{ margin: '8px 0' }} />
          <div className="ie-about-last-updated" style={{ fontSize: 11, color: '#666' }}>
            Last Updated:<br /><strong>March 2026</strong>
          </div>
        </div>

        {/* Right column: bio */}
        <div style={{ padding: 12, background: '#FFFFFF', flex: 1, minWidth: 0 }}>
          <table cellPadding="3" cellSpacing="0" width="100%">
            <tbody>
              {[
                { label: 'Name', value: <strong>Yuvam Kumar</strong> },
                { label: 'School', value: 'University of British Columbia (CS)' },
                { label: 'Occupation', value: 'Software Developer/Engineer', alt: true },
                { label: 'E-mail', value: <a href="mailto:yuvamk.swe@gmail.com" style={{ color: '#0000EE' }}>yuvamk.swe@gmail.com</a> },
                { label: 'GitHub', value: <a href="https://github.com/YuvamKumarSWE" target="_blank" rel="noopener noreferrer" style={{ color: '#0000EE' }}>@YuvamKumarSWE</a>, alt: true },
                { label: 'LinkedIn', value: <a href="https://www.linkedin.com/in/yuvamkumar/" target="_blank" rel="noopener noreferrer" style={{ color: '#0000EE' }}>/in/yuvamkumar</a> },
                { label: 'Interests', value: 'Full-Stack Dev, AI/ML, Cloud, Open Source', alt: true },
              ].map((row, i) => (
                <tr key={i} style={{ background: row.alt ? '#F5F5FF' : undefined }}>
                  <td style={{ fontWeight: 'bold', color: '#000080', width: 100, whiteSpace: 'nowrap', verticalAlign: 'top' }}>{row.label}:</td>
                  <td style={{ wordBreak: 'break-word' }}>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <hr style={{ margin: '12px 0' }} />

          <p style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 8 }}>
            I&apos;m a Computer Science student at UBC and a passionate Software Developer with experience
            in full-stack development, AI/ML, and cloud infrastructure.
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 8 }}>
            I have worked at <strong>Royal Bank of Canada</strong> as a Software Developer Intern,
            building enterprise-grade Spring Boot. I at <strong>UBC Applied Machine Learning and Arts</strong>.
          </p>

          <hr style={{ margin: '12px 0' }} />

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <a href="https://drive.google.com/file/d/1TTAAmm-GkSXFrVPD64hHAJRL4WwiOIHE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="ie-button" style={{ fontSize: 12 }}>📄 View Resume (PDF)</button>
            </a>
            <a href="mailto:yuvamk.swe@gmail.com">
              <button className="ie-button" style={{ fontSize: 12 }}>📧 Send E-mail</button>
            </a>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <hr style={{ margin: '12px 0', borderTop: '1px solid #808080', borderBottom: '1px solid #FFFFFF' }} />
      <div style={{ textAlign: 'center', fontSize: 11, color: '#666', padding: '8px 0' }}>
        <p>© 2026 Yuvam Kumar — All Rights Reserved</p>
        <p style={{ marginTop: 4 }}>
          <a href="mailto:yuvamk.swe@gmail.com" style={{ color: '#0000EE' }}>E-mail</a> |{' '}
          <a href="https://github.com/YuvamKumarSWE" target="_blank" rel="noopener noreferrer" style={{ color: '#0000EE' }}>GitHub</a> |{' '}
          <a href="https://www.linkedin.com/in/yuvamkumar/" target="_blank" rel="noopener noreferrer" style={{ color: '#0000EE' }}>LinkedIn</a>
        </p>
      </div>
    </div>
  );
}
