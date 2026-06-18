'use client';

import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div 
      style={{
        backgroundColor: '#020617',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 16px',
        fontFamily: 'sans-serif',
        color: '#f8fafc',
        boxSizing: 'border-box'
      }} 
      dir="rtl"
    >
      {/* العنوان العلوي والترويسة */}
      <div style={{ maxWidth: '800px', width: '100%', marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '900', color: '#ffffff', marginBottom: '8px' }}>
          لوحة التحكم الرئيسية
        </h1>
        <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: '0' }}>
          نظام حاسبة أدوية العناية الحثيثة للبالغين - مستشفى الجامعة الأردنية
        </p>
        <div style={{ width: '100px', height: '4px', backgroundColor: '#2563eb', borderRadius: '4px', marginTop: '16px', marginLeft: 'auto', marginRight: 'auto' }}></div>
      </div>

      {/* شبكة الخيارات التفاعلية الثلاثة */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          maxWidth: '800px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {/* الكرت الأول: الأدوية */}
        <div 
          onClick={() => router.push('/medications')}
          style={{
            backgroundColor: '#0f172a',
            border: '1px solid #1e293b',
            borderRadius: '16px',
            padding: '32px 24px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#2563eb';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#1e293b';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>💊</div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffffff', margin: '0' }}>الأدوية</h2>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '8px', margin: '0' }}>حاسبة نسب التدفق والجرعات الدقيقة لأدوية العناية الحثيثة.</p>
        </div>

        {/* الكرت الثاني: السياسات */}
        <div 
          onClick={() => router.push('/policies')}
          style={{
            backgroundColor: '#0f172a',
            border: '1px solid #1e293b',
            borderRadius: '16px',
            padding: '32px 24px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#10b981';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#1e293b';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📜</div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffffff', margin: '0' }}>السياسات</h2>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '8px', margin: '0' }}>السياسات الطبية والتمريضية المعتمدة في قسم الـ ICU.</p>
        </div>

        {/* الكرت الثالث: الإجراءات */}
        <div 
          onClick={() => router.push('/procedures')}
          style={{
            backgroundColor: '#0f172a',
            border: '1px solid #1e293b',
            borderRadius: '16px',
            padding: '32px 24px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#eab308';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#1e293b';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🛠️</div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffffff', margin: '0' }}>الإجراءات</h2>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '8px', margin: '0' }}>بروتوكولات وخطوات العمل التمريضية للمرضى الداخليين.</p>
        </div>
      </div>

      <p style={{ fontSize: '11px', color: '#64748b', marginTop: '60px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        © All Rights Reserved. Designed & Developed by Suliman Bilal Awad
      </p>
    </div>
  );
}