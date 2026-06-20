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
      color: '#f8fafc',
      overflowX: 'hidden'
    }} dir="rtl">
      
      {/* 🧩 حاقن الأنيميشن لإطار الصورة والخيط المتحرك حول العنوان */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rotateProfileGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes borderTrace {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}} />

      {/* 🖼️ حاوية الصورة الشخصية الدائرية المتوهجة دوراناً */}
      <div style={{ marginBottom: '28px', textAlign: 'center' }}>
        <div style={{
          position: 'relative',
          width: '128px',
          height: '128px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)'
        }}>
          <div style={{
            position: 'absolute',
            width: '140%',
            height: '140%',
            background: 'conic-gradient(from 0deg, transparent 20%, #38bdf8 50%, transparent 80%)',
            animation: 'rotateProfileGlow 3s linear infinite',
            zIndex: 1
          }} />
          
          <img 
            src="/profile.jpg" 
            alt="User Profile" 
            style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              border: '3px solid #0f172a',
              position: 'relative',
              zIndex: 2
            }} 
          />
        </div>
      </div>

      {/* 🔐 صندوق تسجيل الدخول */}
      <div style={{ 
        maxWidth: '500px', 
        width: '100%', 
        backgroundColor: '#0f172a', 
        border: '1px solid #1e293b', 
        borderRadius: '24px', 
        padding: '40px 28px 36px 28px', 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
      }}>
        
        <div style={{ marginBottom: '28px', textAlign: 'center' }}>
          
          {/* 🔲 حاوية العنوان المزودة بالفريم المتحرك (يسير من الأعلى اليمين نحو اليسار فالأسفل فاليمين فالأعلى) */}
          <div style={{ 
            position: 'relative', 
            display: 'inline-block', 
            padding: '12px 36px',
            borderRadius: '16px',
            backgroundColor: '#0f172a',
            // هنا نصنع الفريم المضيء المتحرك عبر تدرج لوني خطي منساب
            backgroundImage: 'linear-gradient(90deg, #38bdf8, transparent, #38bdf8, transparent, #38bdf8)',
            backgroundSize: '200% 100%',
            animation: 'borderTrace 4s linear infinite',
            padding: '3px', // سمك الخط المتحرك
          }}>
            
            {/* الحاوية الداخلية لضمان ظهور خط الإطار بشكل نظيف وحاد */}
            <div style={{
              backgroundColor: '#0f172a',
              padding: '12px 36px',
              borderRadius: '14px',
            }}>
              {/* العنوان المستقر بجمالية تامة */}
              <h1 style={{ 
                fontSize: '2.6rem', 
                fontWeight: '900', 
                color: '#ffffff', 
                margin: '0', 
                letterSpacing: '1px', 
                textShadow: '0 0 7px #fff, 0 0 15px rgba(56, 189, 248, 0.6)' 
              }}>
                منصة دليلي
              </h1>
            </div>
          </div>
          
          {/* 🧑‍⚕️ سطر إسناد التصميم والإعداد */}
          <p style={{
            fontSize: '0.95rem',
            color: '#38bdf8',
            fontWeight: '600',
            margin: '18px 0 16px 0',
            letterSpacing: '0.5px'
          }}>
            تصميم وإعداد الممرض: سليمان بلال أحمد عوض — مستشفى الجامعة الأردنية
          </p>
          
          {/* النص القانوني */}
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

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          <div style={{ textAlign: 'right' }}>
            <label htmlFor="username" style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px', fontWeight: '600' }}>اسم المستخدم:</label>
            <input
              id="username"
              type="text"
              placeholder="أدخل اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '12px 14px', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px', color: '#ffffff', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#38bdf8'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#1e293b'}
            />
          </div>

          <div style={{ textAlign: 'right' }}>
            <label htmlFor="password" style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px', fontWeight: '600' }}>كلمة المرور:</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '12px 14px', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px', color: '#ffffff', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#38bdf8'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#1e293b'}
            />
          </div>

          <div style={{ textAlign: 'right' }}>
            <label htmlFor="licenseKey" style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px', fontWeight: '600' }}>رمز الترخيص الحصري:</label>
            <input
              id="licenseKey"
              type="text"
              placeholder="أدخل رمز الترخيص المعمد"
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value)}
              style={{ width: '100%', padding: '12px 14px', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px', color: '#ffffff', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#38bdf8'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#1e293b'}
            />
          </div>

          {error && (
            <div style={{ color: '#f87171', fontSize: '0.85rem', fontWeight: 'bold', backgroundColor: '#7f1d1d20', padding: '10px', borderRadius: '10px', border: '1px solid #7f1d1d40', textAlign: 'center' }}>
              {error}
            </div>
          )}

          <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#0284c7', color: '#ffffff', fontSize: '1rem', fontWeight: 'bold', border: 'none', borderRadius: '12px', cursor: 'pointer', transition: 'background-color 0.2s', marginTop: '8px' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0369a1'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0284c7'}>
            التحقق وتفويض الدخول 🔓
          </button>
        </form>

        {/* 📜 حفظ الحقوق القانونية بالإنجليزية */}
        <div style={{ 
          marginTop: '24px', 
          textAlign: 'center', 
          borderTop: '1px solid #1e293b', 
          paddingTop: '16px' 
        }} dir="ltr">
          <p style={{ 
            fontSize: '0.75rem', 
            color: '#64748b', 
            margin: '0', 
            letterSpacing: '0.5px',
            fontWeight: '500'
          }}>
            Copyright © 2026 <span style={{ color: '#38bdf8' }}>R.N. Suliman Bilal Awad</span>. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}