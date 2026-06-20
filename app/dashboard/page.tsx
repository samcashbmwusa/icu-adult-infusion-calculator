'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    router.push('/');
  };

  if (!mounted) return null;

  return (
    <div style={{ 
      backgroundColor: '#020617', 
      minHeight: '100vh', 
      color: '#f8fafc', 
      fontFamily: 'sans-serif' 
    }} dir="rtl">
      
      {/* 🧩 حاقن أنيميشن تتبع الزوايا الهندسية للفريم (نفس تأثير صفحة الدخول تماماً) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes topTrace {
          0% { left: 100%; width: 0%; }
          25% { left: 0%; width: 100%; }
          50%, 100% { left: 0%; width: 0%; }
        }
        @keyframes leftTrace {
          0%, 25% { top: 0%; height: 0%; }
          50% { top: 0%; height: 100%; }
          75%, 100% { top: 100%; height: 0%; }
        }
        @keyframes bottomTrace {
          0%, 50% { left: 0%; width: 0%; }
          75% { left: 0%; width: 100%; }
          100% { left: 100%; width: 0%; }
        }
        @keyframes rightTrace {
          0%, 75% { top: 100%; height: 0%; }
          100% { top: 0%; height: 100%; }
        }
      `}} />

      {/* 📋 شريط التنقل العلوي (Navbar) */}
      <header style={{
        backgroundColor: '#0f172a',
        borderBottom: '1px solid #1e293b',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'between',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* 🔲 حاوية العنوان الذكية الملتفة بالفريم الضوئي التتبعي في الداشبورد */}
          <div style={{ 
            position: 'relative', 
            display: 'inline-block', 
            borderRadius: '10px',
            backgroundColor: '#0f172a',
            border: '1px solid #1e293b',
            overflow: 'hidden',
            padding: '2px'
          }}>
            
            {/* 1. الخط العلوي (يمشي من اليمين إلى اليسار) */}
            <div style={{
              position: 'absolute',
              top: '0',
              right: '0',
              height: '2px',
              backgroundColor: '#38bdf8',
              boxShadow: '0 0 8px #38bdf8',
              animation: 'topTrace 4s linear infinite'
            }} />

            {/* 2. الخط الأيسر (ينزل من الأعلى إلى الأسفل) */}
            <div style={{
              position: 'absolute',
              left: '0',
              top: '0',
              width: '2px',
              backgroundColor: '#38bdf8',
              boxShadow: '0 0 8px #38bdf8',
              animation: 'leftTrace 4s linear infinite'
            }} />

            {/* 3. الخط السفلي (يمشي من اليسار إلى اليمين) */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              height: '2px',
              backgroundColor: '#38bdf8',
              boxShadow: '0 0 8px #38bdf8',
              animation: 'bottomTrace 4s linear infinite'
            }} />

            {/* 4. الخط الأيمن (يصعد من الأسفل إلى الأعلى) */}
            <div style={{
              position: 'absolute',
              right: '0',
              bottom: '0',
              width: '2px',
              backgroundColor: '#38bdf8',
              boxShadow: '0 0 8px #38bdf8',
              animation: 'rightTrace 4s linear infinite'
            }} />

            {/* الحاوية الداخلية لعرض اسم المنصة بحجم متناسق مع شريط الداشبورد العلوي */}
            <div style={{
              backgroundColor: '#0f172a',
              padding: '6px 20px',
              borderRadius: '8px',
            }}>
              <span style={{ 
                fontSize: '1.4rem', 
                fontWeight: '800', 
                color: '#ffffff',
                letterSpacing: '0.5px',
                textShadow: '0 0 6px rgba(56, 189, 248, 0.6)'
              }}>
                منصة دليلي
              </span>
            </div>
          </div>

          {/* زر تسجيل الخروج وعبارة الترحيب */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: '500' }}>
              مرحباً بك في النظام الآمن للرعاية والبروتوكولات التمريضية
            </span>
            <button 
              onClick={handleLogout}
              style={{
                backgroundColor: '#7f1d1d40',
                border: '1px solid #ef444440',
                color: '#f87171',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ef4444';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7f1d1d40';
                e.currentTarget.style.color = '#f87171';
              }}
            >
              تسجيل الخروج 🚪
            </button>
          </div>

        </div>
      </header>

      {/* 📊 محتوى لوحة التحكم الرئيسي (Main Dashboard Space) */}
      <main style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ 
          backgroundColor: '#0f172a', 
          border: '1px solid #1e293b', 
          borderRadius: '16px', 
          padding: '24px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>
            لوحة الإجراءات والخدمات المعتمدة
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
            مرحباً بك في الواجهة الرئيسية لمنصة دليلي التمريضية الرقمية. يمكنك الآن استعراض كافة حواسب المحاليل الوريدية (Infusion Calculators)، حسابات أدوية العناية الحثيثة (ICU Central Drugs)، والبروتوكولات الطبية المحمية قانونياً.
          </p>
        </div>
      </main>

    </div>
  );
}