export default function UnderUpdatePage() {
  return (
    <main
      dir="rtl"
      style={{
        minHeight: '100vh',
        backgroundColor: '#020617',
        color: '#f8fafc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        fontFamily: 'sans-serif',
      }}
    >
      <section
        style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '24px',
          padding: '42px 28px',
          textAlign: 'center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div style={{ fontSize: '4rem', marginBottom: '18px' }}>
          🛠️
        </div>

        <h1
          style={{
            margin: '0 0 14px',
            fontSize: '1.8rem',
            color: '#38bdf8',
            fontWeight: 800,
          }}
        >
          العمل جاري على التحديثات
        </h1>

        <p
          style={{
            margin: '0 auto 28px',
            color: '#cbd5e1',
            lineHeight: 1.8,
            fontSize: '0.95rem',
            maxWidth: '420px',
          }}
        >
          يتم تجهيز المحتوى والملفات الخاصة بهذا القسم.
          يرجى العودة لاحقاً.
        </p>

        <a
          href="/dashboard"
          style={{
            display: 'inline-block',
            backgroundColor: '#0284c7',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '12px 20px',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '0.95rem',
          }}
        >
          العودة إلى لوحة التحكم
        </a>
      </section>
    </main>
  );
}