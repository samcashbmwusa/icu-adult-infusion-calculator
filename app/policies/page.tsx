'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Policy {
  id: number;
  title: string;
  url: string;
}

export default function PoliciesPage() {
  const router = useRouter();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // مصفوفة الـ 40 سياسة - يمكنك تعديل العناوين والروابط من هنا مباشرة بكل سهولة
  const policies: Policy[] = [
    {
      id: 1,
      title: "Allow Natural Death (AND)",
      url: "https://i.ibb.co/76YTH5S/Allow-Natural-Death-AND-CLIN-P037.png" // صورتك الأولى الجاهزة
    },
    {
      id: 2,
      title: "إدارة الأدوية الخطرة (High-Alert Medications)",
      url: "https://i.ibb.co/N2N98vh2/Man-wear-light-blue-scrub-202606151052.jpg" // رابط تجريبي
    },
    {
      id: 3,
      title: "سياسة مكافحة العدوى والتعقيم (Infection Control)",
      url: "https://i.ibb.co/N2N98vh2/Man-wear-light-blue-scrub-202606151052.jpg"
    },
    // إنشاء بقية المجلدات الـ 40 تلقائياً لتسهيل الكود وتوفير المساحة
    ...Array.from({ length: 37 }, (_, i) => ({
      id: i + 4,
      title: `سياسة بروتوكول العناية الحثيثة رقم ${i + 4}`,
      url: "https://i.ibb.co/N2N98vh2/Man-wear-light-blue-scrub-202606151052.jpg" // رابط تجريبي حتى ترفع صورها
    }))
  ];

  return (
    <div 
      style={{
        backgroundColor: '#020617', // الخلفية السوداء المريحة جداً للعين
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
      {/* الهيدر العلوي وزر العودة */}
      <div style={{ maxWidth: '1200px', width: '100%', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button 
          onClick={() => router.push('/dashboard')}
          style={{
            backgroundColor: '#1e293b',
            color: '#f1f5f9',
            border: '1px solid #334155',
            padding: '10px 20px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#334155'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1e293b'}
        >
          ⬅️ العودة للوحة التحكم
        </button>
        
        <div style={{ textAlign: 'right' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', color: '#ffffff', margin: '0' }}>
            مجلدات السياسات والبروتوكولات (40 سياسة)
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '4px 0 0 0' }}>
            مكتبة السياسات الرقمية المعتمدة - اضغط على المجلد لعرض الإنفوجرافيك
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', width: '100%', height: '2px', backgroundColor: '#1e293b', marginBottom: '32px' }}></div>

      {/* شبكة المجلدات التفاعلية (Folders Grid) */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {policies.map((policy) => (
          <div 
            key={policy.id}
            onClick={() => setSelectedPhoto(policy.url)} // فتح الصورة المكبّرة عند الضغط
            style={{
              backgroundColor: '#0f172a',
              border: '1px solid #1e293b',
              borderRadius: '14px',
              padding: '20px 16px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '140px'
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
            {/* أيقونة مجلد تفاعلية بلون أصفر فخم للمجلدات الطبية */}
            <div style={{ fontSize: '2.8rem', marginBottom: '10px', color: '#eab308' }}>📁</div>
            <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>
              سياسة #{policy.id}
            </span>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#e2e8f0', margin: '0', lineHeight: '1.4' }}>
              {policy.title}
            </h3>
          </div>
        ))}
      </div>

      {/* شاشة العرض المكبّرة التلقائية (Lightbox Modal) */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)} // إغلاق شاشة التكبير عند الضغط في أي مكان فارغ بالخلفية
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(2, 6, 23, 0.95)', // خلفية معتمة جداً للتركيز على الصورة
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
            boxSizing: 'border-box',
            cursor: 'zoom-out'
          }}
        >
          {/* زر الإغلاق العلوي */}
          <button 
            onClick={() => setSelectedPhoto(null)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: '#ef4444',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
            }}
          >
            ✕
          </button>

          {/* الإنفوجرافيك المكبّر بحجم الشاشة الذكي */}
          <img 
            src={selectedPhoto} 
            alt="Expanded Infographic" 
            style={{
              maxWidth: '95%',
              maxHeight: '90vh',
              borderRadius: '12px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
              border: '2px solid #334155',
              cursor: 'default'
            }}
            onClick={(e) => e.stopPropagation()} // منع الإغلاق عند الضغط على الصورة نفسها
          />
        </div>
      )}

      <p style={{ fontSize: '11px', color: '#64748b', marginTop: '60px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        © All Rights Reserved. Designed & Developed by Suliman Bilal Awad
      </p>
    </div>
  );
}