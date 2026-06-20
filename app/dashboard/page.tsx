'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ 
      backgroundColor: '#020617', 
      minHeight: '100vh', 
      color: '#f8fafc', 
      fontFamily: 'sans-serif' 
    }} dir="rtl">
      
      {/* 🧩 أنيميشن حركة الفريم الضوئي التتبعي المحترف حول العنوان */}
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

      {/* 📋 شريط التنقل العلوي القديم (Navbar) */}
      <header style={{
        backgroundColor: '#0f172a',
        borderBottom: '1px solid #1e293b',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        
        {/* 🔲 الإطار المضيء التتبعي الجديد حول كلمة "منصة دليلي" فقط */}
        <div style={{ 
          position: 'relative', 
          display: 'inline-block', 
          borderRadius: '10px',
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          overflow: 'hidden',
          padding: '2px'
        }}>
          {/* الخطوط الأربعة المضيئة التتبعّية */}
          <div style={{ position: 'absolute', top: '0', right: '0', height: '2px', backgroundColor: '#38bdf8', boxShadow: '0 0 8px #38bdf8', animation: 'topTrace 4s linear infinite' }} />
          <div style={{ position: 'absolute', left: '0', top: '0', width: '2px', backgroundColor: '#38bdf8', boxShadow: '0 0 8px #38bdf8', animation: 'leftTrace 4s linear infinite' }} />
          <div style={{ position: 'absolute', bottom: '0', left: '0', height: '2px', backgroundColor: '#38bdf8', boxShadow: '0 0 8px #38bdf8', animation: 'bottomTrace 4s linear infinite' }} />
          <div style={{ position: 'absolute', right: '0', bottom: '0', width: '2px', backgroundColor: '#38bdf8', boxShadow: '0 0 8px #38bdf8', animation: 'rightTrace 4s linear infinite' }} />

          <div style={{ backgroundColor: '#0f172a', padding: '6px 20px', borderRadius: '8px' }}>
            <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', textShadow: '0 0 6px rgba(56, 189, 248, 0.6)' }}>
              منصة دليلي
            </span>
          </div>
        </div>

        {/* معلومات المستخدم والمستشفى (القديمة) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ textAlign: 'left' }}>
            <span style={{ display: 'block', fontSize: '0.85rem', color: '#38bdf8', fontWeight: '600' }}>مستشفى الجامعة الأردنية</span>
            <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b' }}>قسم العناية الحثيثة ICU</span>
          </div>
          <button 
            onClick={() => router.push('/')}
            style={{
              backgroundColor: '#7f1d1d30',
              border: '1px solid #ef444440',
              color: '#f87171',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ef4444'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#7f1d1d30'; e.currentTarget.style.color = '#f87171'; }}
          >
            تسجيل الخروج 🚪
          </button>
        </div>
      </header>

      {/* 📊 الواجهة الرئيسية القديمة: شبكة المجلدات والصفحات المعتمدة بدقة */}
      <main style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', marginBottom: '8px' }}>لوحة التحكم الرئيسية</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>مرحباً بك في الأنظمة المعتمدة لقسم العناية الحثيثة. يرجى اختيار المجلد المطلوب:</p>
        </div>

        {/* شبكة عرض المجلدات الأربعة التي تطابق مسارات مشروعك الفعلي */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px' 
        }}>
          
          {/* مجلد 1: إجراءات تمريضية */}
          <div 
            onClick={() => router.push('/procedures')}
            style={{ 
              backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', cursor: 'pointer', transition: 'transform 0.2s, border-color 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#38bdf8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1e293b'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📁</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>إجراءات تمريضية</h3>
            <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.5' }}>النماذج التطبيقية والخطوات المعتمدة للعناية التمريضية المركزة داخل القسم.</p>
          </div>

          {/* مجلد 2: الأدوية */}
          <div 
            onClick={() => router.push('/medications')}
            style={{ 
              backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', cursor: 'pointer', transition: 'transform 0.2s, border-color 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#38bdf8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1e293b'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📁</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>الأدوية</h3>
            <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.5' }}>أدلة حاسبات المحاليل، خلط الأدوية عالية الخطورة، وبروتوكولات المعايرة المستمرة.</p>
          </div>

          {/* مجلد 3: بروتوكولات وسياسات */}
          <div 
            onClick={() => router.push('/policies')}
            style={{ 
              backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', cursor: 'pointer', transition: 'transform 0.2s, border-color 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#38bdf8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1e293b'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📁</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>بروتوكولات وسياسات</h3>
            <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.5' }}>السياسات العامة لمستشفى الجامعة الأردنية والبروتوكولات الطبية المنظمة للعمل العناثي.</p>
          </div>

          {/* مجلد 4: أوراق الأكثر استخدام */}
          <div 
            onClick={() => router.push('/forms')}
            style={{ 
              backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', cursor: 'pointer', transition: 'transform 0.2s, border-color 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#38bdf8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1e293b'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>📁</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>أوراق الأكثر استخدام</h3>
            <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: '1.5' }}>مخططات المراقبة، أوراق الـ Intake/Output ونماذج التسليم اليومية السريعة والجاهزة للطباعة.</p>
          </div>

        </div>

        {/* إضافة زر حاسبة المحاليل المباشر كخيار وصول سريع إضافي بالأسفل لتسهيل عملك */}
        <div style={{ marginTop: '32px' }}>
          <button 
            onClick={() => router.push('/calculators')}
            style={{
              width: '100%', padding: '16px', backgroundColor: '#0284c720', border: '1px solid #0284c750', borderRadius: '14px', color: '#38bdf8', fontSize: '1rem', fontWeight: '700', cursor: 'pointer', transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0284c735'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0284c720'}
          >
            🧮 الانتقال السريع والمباشر لحاسبة المحاليل الوريدية الوريدية المتقدمة
          </button>
        </div>

      </main>

      {/* 📜 التذييل القانوني القديم دون أي تعديل */}
      <footer style={{ borderTop: '1px solid #1e293b', padding: '20px', marginTop: '40px', textAlign: 'center' }} dir="ltr">
        <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0' }}>
          Copyright © 2026 <span style={{ color: '#38bdf8' }}>R.N. Suliman Bilal Awad</span> — JUH Intensive Care Protocols. Secured System.
        </p>
      </footer>

    </div>
  );
}