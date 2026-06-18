'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [licenseKey, setLicenseKey] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (username === 'admin' && password === 'CCU2026' && licenseKey === 'JUH-001') {
      document.cookie = "icu_auth=true; path=/; max-age=86400";
      router.push('/medications');
    } else {
      setError('خطأ في اسم المستخدم، كلمة المرور أو رمز الترخيص! يرجى التواصل مع المطور لأخذ الإذن.');
      setLoading(false);
    }
  };

  return (
    <div 
      style={{
        backgroundColor: '#020617',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        fontFamily: 'sans-serif',
        color: '#f8fafc',
        boxSizing: 'border-box'
      }} 
      dir="rtl"
    >
      <div 
        style={{
          backgroundColor: '#0f172a',
          padding: '32px',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          maxWidth: '448px',
          width: '100%',
          border: '1px solid #1e293b',
          boxSizing: 'border-box'
        }}
      >
        
        {/* شاشة عرض المطور والصورة الشخصية */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px' }} dir="ltr">
          <div 
            style={{
              width: '112px',
              height: '112px',
              marginBottom: '12px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid #2563eb',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
              backgroundColor: '#1e293b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img 
              src="/suliman.jpg" 
              alt="Suliman Bilal Awad, R.N"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                // حلقة ذكية للتنقل بين الصيغ والاحتمالات في حال وجود خطأ في التسمية على السيرفر
                const img = e.target as HTMLImageElement;
                if (img.src.includes('/suliman.jpg')) {
                  img.src = '/suliman.png';
                } else if (img.src.includes('/suliman.png')) {
                  img.src = '/suliman.PNG';
                } else if (img.src.includes('/suliman.PNG')) {
                  img.src = '/suliman.JPG';
                } else if (img.src.includes('/suliman.JPG')) {
                  img.src = '/suliman.jpeg';
                } else if (img.src.includes('/suliman.jpeg')) {
                  img.src = '/suliman.JPEG';
                }
              }}
            />
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#f1f5f9', margin: '0', textAlign: 'center' }}>
            Suliman Bilal Awad, R.N
          </h2>
          <p style={{ fontSize: '0.75rem', color: '#60a5fa', fontWeight: '600', textTransform: 'uppercase', marginTop: '4px', textAlign: 'center' }}>
            Jordan University Hospital
          </p>
          <div style={{ width: '64px', height: '4px', backgroundColor: '#2563eb', borderRadius: '4px', marginTop: '12px' }}></div>
        </div>

        <h1 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#e2e8f0', textAlign: 'center', marginBottom: '8px' }}>
          ICU Adult Infusion Calculator
        </h1>
        <p style={{ fontSize: '0.75rem', color: '#94a3b8', textAlign: 'center', marginBottom: '24px', margin: '0' }}>
          نظام حاسبة أدوية العناية الحثيثة للبالغين - نظام محمي وخاص
        </p>

        {error && (
          <div style={{ backgroundColor: 'rgba(127, 29, 29, 0.4)', borderRight: '4px solid #ef4444', color: '#fca5a5', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.875rem', textAlign: 'right' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold', color: '#cbd5e1', marginBottom: '4px', textAlign: 'right' }}>اسم المستخدم (Username)</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '10px 16px', backgroundColor: '#1e293b', border: '1px solid #334155', color: '#ffffff', borderRadius: '12px', outline: 'none', direction: 'ltr', boxSizing: 'border-box' }}
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold', color: '#cbd5e1', marginBottom: '4px', textAlign: 'right' }}>كلمة المرور (Password)</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '10px 16px', backgroundColor: '#1e293b', border: '1px solid #334155', color: '#ffffff', borderRadius: '12px', outline: 'none', direction: 'ltr', boxSizing: 'border-box' }}
              placeholder="Enter password"
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold', color: '#cbd5e1', marginBottom: '4px', textAlign: 'right' }}>رمز الترخيص الإذن (License Key)</label>
            <input
              type="text"
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value)}
              style={{ width: '100%', padding: '10px 16px', backgroundColor: '#1e293b', border: '1px solid #334155', color: '#ffffff', borderRadius: '12px', outline: 'none', direction: 'ltr', boxSizing: 'border-box' }}
              placeholder="JUH-XXX"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ width: '100%', backgroundColor: '#2563eb', color: '#ffffff', fontWeight: 'bold', padding: '12px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '1rem', marginTop: '8px' }}
          >
            {loading ? 'جاري التحقق والدخول...' : 'تسجيل الدخول'}
          </button>
        </form>

        <p style={{ fontSize: '10px', color: '#64748b', textAlign: 'center', marginTop: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          © All Rights Reserved. Designed & Developed by Suliman Bilal Awad
        </p>

      </div>
    </div>
  );
}