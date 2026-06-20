'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  // لحل مشاكل تباين الهيدريشن وضمان التوافق الكامل مع السيرفر
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // التحقق من الباسورد المعتمد للمشروع للدخول إلى لوحة التحكم
    if (password === '1234' || password === 'admin' || password === 'ICU2026') {
      setError('');
      router.push('/dashboard');
    } else {
      setError('❌ كلمة المرور غير صحيحة، يرجى المحاولة مرة أخرى.');
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
      padding: '24px 16px', 
      fontFamily: 'sans-serif', 
      color: '#f8fafc' 
    }} dir="rtl">
      
      {/* 🔐 صندوق تسجيل الدخول الرئيسي */}
      <div style={{ 
        maxWidth: '550px', 
        width: '100%', 
        backgroundColor: '#0f172a', 
        border: '1px solid #1e293b', 
        borderRadius: '24px', 
        padding: '40px 32px', 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        textAlign: 'center' 
      }}>
        
        {/* العناوين وتأثير التوهج النيون (Glowing Neon) الملفت للانتباه */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '900', 
            color: '#ffffff', 
            margin: '0 0 16px 0',
            letterSpacing: '1.5px',
            textShadow: '0 0 7px #fff, 0 0 15px rgba(56, 189, 248, 0.9), 0 0 30px rgba(56, 189, 248, 0.7), 0 0 45px rgba(14, 165, 233, 0.5)'
          }}>
            منصة دليلي
          </h1>
          
          {/* النص القانوني والتعريفي الصارم والجديد */}
          <p style={{ 
            fontSize: '0.9rem', 
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

        {/* نموذج إدخال كلمة المرور للتحقق */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ textAlign: 'right' }}>
            <label htmlFor="password" style={{ display: 'inline-block', fontSize: '0.9rem', color: '#94a3b8', marginBottom: '8px', fontWeight: '600' }}>
              أدخل كلمة مرور النظام المشفرة للوصول:
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '14px 16px', 
                backgroundColor: '#020617', 
                border: '2px solid #1e293b', 
                borderRadius: '14px', 
                color: '#ffffff', 
                fontSize: '1.1rem', 
                outline: 'none',
                textAlign: 'center',
                letterSpacing: '4px',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#38bdf8'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#1e293b'}
            />
          </div>

          {/* رسالة الخطأ */}
          {error && (
            <div style={{ color: '#f87171', fontSize: '0.85rem', fontWeight: 'bold', backgroundColor: '#7f1d1d20', padding: '10px', borderRadius: '10px', border: '1px solid #7f1d1d40' }}>
              {error}
            </div>
          )}

          {/* زر الدخول */}
          <button 
            type="submit"
            style={{ 
              width: '100%', 
              padding: '14px', 
              backgroundColor: '#0284c7', 
              color: '#ffffff', 
              fontSize: '1.05rem', 
              fontWeight: 'bold', 
              border: 'none', 
              borderRadius: '14px', 
              cursor: 'pointer', 
              transition: 'background-color 0.2s' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0369a1'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0284c7'}
          >
            تسجيل الدخول الآمن للأقسام 🔓
          </button>
        </form>

      </div>

    </div>
  );
}