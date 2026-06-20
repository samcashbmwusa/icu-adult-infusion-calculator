'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [licenseKey, setLicenseKey] = useState('');
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // كود المصادقة الأصلي للتحقق من الحقول الثلاثة
    if (username.trim() !== '' && password.trim() !== '' && licenseKey.trim() !== '') {
      setError('');
      router.push('/dashboard');
    } else {
      setError('❌ يرجى إدخال اسم المستخدم، كلمة المرور، ورمز الترخيص بشكل صحيح.');
    }
  };

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
      color: '#f8fafc' 
    }} dir="rtl">
      
      {/* 🖼️ صورتك الشخصية المرفوعة مسبقاً في مجلد public */}
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <img 
          src="/57.png" 
          alt="User Profile" 
          style={{ 
            width: '110px', 
            height: '110px', 
            borderRadius: '50%', 
            objectFit: 'cover', 
            border: '3px solid #38bdf8',
            boxShadow: '0 0 15px rgba(56, 189, 248, 0.5)'
          }} 
        />
      </div>

      {/* 🔐 صندوق تسجيل الدخول المطور */}
      <div style={{ 
        maxWidth: '500px', 
        width: '100%', 
        backgroundColor: '#0f172a', 
        border: '1px solid #1e293b', 
        borderRadius: '24px', 
        padding: '36px 28px', 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        
        {/* العناوين وتأثير التوهج النيون (Glowing Neon) القوي والملفت */}
        <div style={{ marginBottom: '28px', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '2.6rem', 
            fontWeight: '900', 
            color: '#ffffff', 
            margin: '0 0 14px 0',
            letterSpacing: '1px',
            textShadow: '0 0 7px #fff, 0 0 15px rgba(56, 189, 248, 0.9), 0 0 30px rgba(56, 189, 248, 0.7)'
          }}>
            منصة دليلي
          </h1>
          
          {/* النص القانوني والتعريفي الصارم والجديد */}
          <p style={{ 
            fontSize: '0.85rem', 
            color: '#cbd5e1', 
            margin: '0 auto', 
            fontWeight: '500', 
            lineHeight: '1.6',
            borderRight: '3px solid #ef4444', 
            paddingRight: '12px',
            textAlign: 'right'
          }}>
            نظام دليلي يضم الأدوية، بروتوكولات، وإجراءات تمريضية - نظام محمي ويمنع تداوله أو إعادة استخدامه تحت المساءلة القانونية
          </p>
        </div>

        {/* نموذج الدخول الأصلي بالحقوق الثلاثة */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          {/* حقل اسم المستخدم */}
          <div style={{ textAlign: 'right' }}>
            <label htmlFor="username" style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px', fontWeight: '600' }}>
              اسم المستخدم:
            </label>
            <input
              id="username"
              type="text"
              placeholder="أدخل اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px 14px', 
                backgroundColor: '#020617', 
                border: '1px solid #1e293b', 
                borderRadius: '12px', 
                color: '#ffffff', 
                fontSize: '0.95rem', 
                outline: 'none',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#38bdf8'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#1e293b'}
            />
          </div>

          {/* حقل كلمة المرور */}
          <div style={{ textAlign: 'right' }}>
            <label htmlFor="password" style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px', fontWeight: '600' }}>
              كلمة المرور:
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px 14px', 
                backgroundColor: '#020617', 
                border: '1px solid #1e293b', 
                borderRadius: '12px', 
                color: '#ffffff', 
                fontSize: '0.95rem', 
                outline: 'none',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#38bdf8'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#1e293b'}
            />
          </div>

          {/* حقل رمز الترخيص */}
          <div style={{ textAlign: 'right' }}>
            <label htmlFor="licenseKey" style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px', fontWeight: '600' }}>
              رمز الترخيص الحصري:
            </label>
            <input
              id="licenseKey"
              type="text"
              placeholder="أدخل رمز الترخيص المعمد"
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '12px 14px', 
                backgroundColor: '#020617', 
                border: '1px solid #1e293b', 
                borderRadius: '12px', 
                color: '#ffffff', 
                fontSize: '0.95rem', 
                outline: 'none',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#38bdf8'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#1e293b'}
            />
          </div>

          {/* عرض رسالة الخطأ في حال وجود حقول فارغة */}
          {error && (
            <div style={{ color: '#f87171', fontSize: '0.85rem', fontWeight: 'bold', backgroundColor: '#7f1d1d20', padding: '10px', borderRadius: '10px', border: '1px solid #7f1d1d40', textAlign: 'center' }}>
              {error}
            </div>
          )}

          {/* زر الدخول المتناسق */}
          <button 
            type="submit"
            style={{ 
              width: '100%', 
              padding: '14px', 
              backgroundColor: '#0284c7', 
              color: '#ffffff', 
              fontSize: '1rem', 
              fontWeight: 'bold', 
              border: 'none', 
              borderRadius: '12px', 
              cursor: 'pointer', 
              transition: 'background-color 0.2s',
              marginTop: '8px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0369a1'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0284c7'}
          >
            التحقق وتفويض الدخول 🔓
          </button>
        </form>

      </div>

    </div>
  );
}