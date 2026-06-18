'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Policy {
  id: number;
  title: string;
  pdfUrl: string; // رابط الـ PDF الرسمي المتصل بسحاب جوجل
}

export default function PoliciesPage() {
  const router = useRouter();
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  // مصفوفة الـ 40 سياسة - تم ربط السياسة الأولى برابط الـ PDF الأصلي الخاص بك بنجاح
  const policies: Policy[] = [
    {
      id: 1,
      title: "Allow Natural Death (AND)",
      pdfUrl: "https://drive.google.com/file/d/1FH_c3jgFS8dvuMyiGaFo88-1KVUhPJd-/preview" // رابط ملفك الأصلي الصافي
    },
    {
      id: 2,
      title: "إدارة الأدوية الخطرة (High-Alert Medications)",
      pdfUrl: "" // أضف رابط الـ preview الخاص بها لاحقاً بنفس الطريقة
    },
    {
      id: 3,
      title: "سياسة مكافحة العدوى والتعقيم (Infection Control)",
      pdfUrl: ""
    },
    ...Array.from({ length: 37 }, (_, i) => ({
      id: i + 4,
      title: `سياسة بروتوكول العناية الحثيثة رقم ${i + 4}`,
      pdfUrl: ""
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
            مكتبة المستندات الرقمية المعتمدة - اضغط لعرض ملف الـ PDF الأصلي بدقة خارقة حادة
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', width: '100%', height: '2px', backgroundColor: '#1e293b', marginBottom: '32px' }}></div>

      {/* شبكة المجلدات التفاعلية الـ 40 */}
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
            onClick={() => {
              if (policy.pdfUrl) {
                setSelectedPdf(policy.pdfUrl);
              } else {
                alert("لم يتم رفع ملف الـ PDF الخاص بهذه السياسة بعد.");
              }
            }}
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

      {/* شاشة العرض المدمجة لملف الـ PDF الأصلي بملء الشاشة الذكي */}
      {selectedPdf && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(2, 6, 23, 0.98)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '24px',
            boxSizing: 'border-box'
          }}
        >
          {/* بار التحكم العلوي وسياق الوثيقة */}
          <div 
            style={{
              maxWidth: '1200px',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
              backgroundColor: '#0f172a',
              padding: '12px 24px',
              borderRadius: '16px',
              border: '1px solid #1e293b',
              boxSizing: 'border-box'
            }}
          >
            <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#ffffff' }}>📄 استعراض وثيقة السياسة الرسمية بالدقة الكاملة (Vector PDF)</span>
            <button 
              onClick={() => setSelectedPdf(null)} 
              style={{ backgroundColor: '#ef4444', border: 'none', color: '#fff', padding: '8px 20px', borderRadius: '12px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 'bold' }}
            >
              إغلاق العرض ✕
            </button>
          </div>

          {/* نافذة التضمين لملف الـ PDF الأصلي بدون أي ضغط جودة */}
          <div style={{ maxWidth: '1200px', width: '100%', height: '80vh', backgroundColor: '#1e293b', borderRadius: '16px', overflow: 'hidden', border: '1px solid #334155' }}>
            <iframe 
              src={selectedPdf} 
              width="100%" 
              height="100%" 
              allow="autoplay"
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>
      )}

      <p style={{ fontSize: '11px', color: '#64748b', marginTop: '60px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        © All Rights Reserved. Designed & Developed by Suliman Bilal Awad
      </p>
    </div>
  );
}