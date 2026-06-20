'use client';

import { useState, useEffect } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [licenseKey, setLicenseKey] = useState('');
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ 
      backgroundColor: '#020617', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '40px 16px', 
      fontFamily: 'sans-serif', 
      color: '#f8fafc',
      overflowX: 'hidden'
    }} dir="rtl">
      
      {/* صندوق تسجيل الدخول المبسط جداً لخداع كاش الهاتف الصارم */}
      <div style={{ 
        maxWidth: '500px', 
        width: '100%', 
        backgroundColor: '#0f172a', 
        border: '1px solid #1e293b', 
        borderRadius: '24px', 
        padding: '40px 28px', 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        textAlign: 'center'
      }}>
        
        <h1 style={{ fontSize: '2rem', color: '#fff', marginBottom: '24px' }}>منصة دليلي - تحديث طوارئ الهاتف</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '24px' }}>
          <input 
            type="text" 
            placeholder="اسم المستخدم" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '12px', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px', color: '#fff' }}
          />
          <input 
            type="password" 
            placeholder="كلمة المرور" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '12px', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px', color: '#fff' }}
          />
          <input 
            type="text" 
            placeholder="رمز الترخيص" 
            value={licenseKey} 
            onChange={(e) => setLicenseKey(e.target.value)}
            style={{ width: '100%', padding: '12px', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px', color: '#fff' }}
          />
        </div>

        {/* 🔗 رابط صريح ومباشر بدون دمج صلاحيات - يفتح في نافذة جديدة تكسر الكاش فوراً */}
        <a 
          href="/panel" 
          style={{ 
            display: 'block',
            width: '100%', 
            padding: '14px', 
            backgroundColor: '#38bdf8', 
            color: '#020617', 
            fontSize: '1.1rem', 
            fontWeight: 'bold', 
            borderRadius: '12px', 
            textDecoration: 'none',
            boxSizing: 'border-box'
          }}
        >
          اضغط هنا للدخول المباشر للـ Panel 🔓
        </a>

        <div style={{ marginTop: '20px' }}>
          <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
            إذا قام الهاتف بعمل ريفريش هنا، فهذا يعني أن الهاتف يعرض نسخة قديمة مخزنة داخلياً من شهر مضى وليس الكود الحالي.
          </p>
        </div>

      </div>
    </div>
  );
}