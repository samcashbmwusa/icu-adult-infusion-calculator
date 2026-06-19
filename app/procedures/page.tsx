'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Procedure {
  id: number;
  title: string;
  pdfUrl: string;
}

export default function ProceduresPage() {
  const router = useRouter();
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(''); // حالة نص البحث

  const procedures: Procedure[] = [
    {
      id: 1,
      title: "Anti-Embolism Stocking (الإجراء العملي)",
      pdfUrl: "https://drive.google.com/file/d/1wO-PvVfnUIYn9bzq3dPielokQ0mmPCy2/preview"
    },
    {
      id: 2,
      title: "Assist-ETT",
      pdfUrl: "https://drive.google.com/file/d/1SWwyAeOwFa435STj4dSLjNNqd6uhXQYR/preview"
    },
    {
      id: 3,
      title: "Assisting-Extubation",
      pdfUrl: "https://drive.google.com/file/d/10rgNJT9f2xXhp2HlcWHvhj4PAhu6xVR8/preview"
    },
    ...Array.from({ length: 37 }, (_, i) => ({
      id: i + 4,
      title: `إجراء وبروتوكول تمريضي عملي رقم ${i + 4}`,
      pdfUrl: ""
    }))
  ];

  // فلترة الإجراءات بناءً على كلمة البحث 
  const filteredProcedures = procedures.filter(proc => 
    proc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 16px', fontFamily: 'sans-serif', color: '#f8fafc', boxSizing: 'border-box' }} dir="rtl">
      {/* الهيدر العلوي */}
      <div style={{ maxWidth: '1200px', width: '100%', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => router.push('/dashboard')} style={{ backgroundColor: '#1e293b', color: '#f1f5f9', border: '1px solid #334155', padding: '10px 20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.9rem' }}>⬅️ العودة للوحة التحكم</button>
        <div style={{ textAlign: 'right' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', color: '#ffffff', margin: '0' }}>مجلدات الإجراءات التمريضية والعملية</h1>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '4px 0 0 0' }}>مكتبة الخطوات والبروتوكولات التمريضية التطبيقية - مستشفى الجامعة الأردنية</p>
        </div>
      </div>

      {/* 🔍 شريط البحث الذكي التفاعلي */}
      <div style={{ maxWidth: '1200px', width: '100%', marginBottom: '32px', position: 'relative' }}>
        <input 
          type="text"
          placeholder="🔍 ابحث عن إجراء بالاسم أو الرقم (مثال: ETT أو Stocking)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 20px',
            backgroundColor: '#0f172a',
            border: '1px solid #1e293b',
            borderRadius: '14px',
            color: '#ffffff',
            fontSize: '1rem',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border-color 0.2s'
          }}
          onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
          onBlur={(e) => e.target.style.borderColor = '#1e293b'}
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm('')}
            style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '1.1rem' }}
          >
            ✕
          </button>
        )}
      </div>

      {/* شبكة الإجراءات المفلترة */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', maxWidth: '1200px', width: '100%', boxSizing: 'border-box' }}>
        {filteredProcedures.length > 0 ? (
          filteredProcedures.map((proc) => (
            <div key={proc.id} onClick={() => proc.pdfUrl ? setSelectedPdf(proc.pdfUrl) : alert("لم يتم رفع ملف الـ PDF الخاص بهذا الإجراء التمريضي بعد.")} style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', padding: '20px 16px', textAlign: 'center', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '140px', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#3b82f6'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1e293b'}>
              <div style={{ fontSize: '2.8rem', marginBottom: '10px', color: '#3b82f6' }}>📁</div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>إجراء #{proc.id}</span>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#e2e8f0', margin: '0', lineHeight: '1.4' }}>{proc.title}</h3>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#94a3b8' }}>❌ لا يوجد أي إجراء يطابق بحثك الحالي.</div>
        )}
      </div>

      {/* شاشة العرض المدمجة */}
      {selectedPdf && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(2, 6, 23, 0.98)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '24px', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', backgroundColor: '#0f172a', padding: '12px 24px', borderRadius: '16px', border: '1px solid #1e293b' }}>
            <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#ffffff' }}>📄 استعراض دليل الإجراء الطبي بالدقة الكاملة (Vector PDF)</span>
            <button onClick={() => setSelectedPdf(null)} style={{ backgroundColor: '#ef4444', border: 'none', color: '#fff', padding: '8px 20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}>إغلاق العرض ✕</button>
          </div>
          <div style={{ maxWidth: '1200px', width: '100%', height: '80vh', backgroundColor: '#1e293b', borderRadius: '16px', overflow: 'hidden', border: '1px solid #334155' }}>
            <iframe src={selectedPdf} width="100%" height="100%" allow="autoplay" style={{ border: 'none' }} ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}