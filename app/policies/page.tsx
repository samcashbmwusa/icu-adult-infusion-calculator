'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Policy {
  id: number;
  title: string;
  pdfUrl: string;
}

export default function PoliciesPage() {
  const router = useRouter();
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const policies: Policy[] = [
    {
      id: 1,
      title: "Allow Natural Death (AND)",
      pdfUrl: "https://drive.google.com/file/d/1FH_c3jgFS8dvuMyiGaFo88-1KVUhPJd-/preview"
    },
    {
      id: 2,
      title: "الخروج رغم النصيحة الطبية (DAMA)",
      pdfUrl: "https://drive.google.com/file/d/1vJUFXvmf8dDb9RKUI7uLRmyiAUE5pGfo/preview"
    },
    {
      id: 3,
      title: "Assisting-Extubation",
      pdfUrl: "https://drive.google.com/file/d/10rgNJT9f2xXhp2HlcWHvhj4PAhu6xVR8/preview"
    },
    ...Array.from({ length: 37 }, (_, i) => ({
      id: i + 4,
      title: `سياسة بروتوكول العناية الحثيثة رقم ${i + 4}`,
      pdfUrl: ""
    }))
  ];

  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 16px', fontFamily: 'sans-serif', color: '#f8fafc', boxSizing: 'border-box' }} dir="rtl">
      <div style={{ maxWidth: '1200px', width: '100%', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => router.push('/dashboard')} style={{ backgroundColor: '#1e293b', color: '#f1f5f9', border: '1px solid #334155', padding: '10px 20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.9rem' }}>⬅️ العودة للوحة التحكم</button>
        <div style={{ textAlign: 'right' }}>
          <h1 style={{ fontSize: '1.75rem', fontWeight: '900', color: '#ffffff', margin: '0' }}>مجلدات السياسات والبروتوكولات (40 سياسة)</h1>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '4px 0 0 0' }}>مكتبة المستندات الرقمية المعتمدة - مستشفى الجامعة الأردنية</p>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', width: '100%', height: '2px', backgroundColor: '#1e293b', marginBottom: '32px' }}></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', maxWidth: '1200px', width: '100%', boxSizing: 'border-box' }}>
        {policies.map((policy) => (
          <div key={policy.id} onClick={() => policy.pdfUrl ? setSelectedPdf(policy.pdfUrl) : alert("لم يتم رفع ملف الـ PDF الخاص بهذه السياسة بعد.")} style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', padding: '20px 16px', textAlign: 'center', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '140px' }}>
            <div style={{ fontSize: '2.8rem', marginBottom: '10px', color: '#eab308' }}>📁</div>
            <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>سياسة #{policy.id}</span>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#e2e8f0', margin: '0', lineHeight: '1.4' }}>{policy.title}</h3>
          </div>
        ))}
      </div>
      {selectedPdf && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(2, 6, 23, 0.98)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '24px', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', backgroundColor: '#0f172a', padding: '12px 24px', borderRadius: '16px', border: '1px solid #1e293b' }}>
            <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#ffffff' }}>📄 استعراض وثيقة السياسة الرسمية بالدقة الكاملة (Vector PDF)</span>
            <button onClick={() => setSelectedPdf(null)} style={{ backgroundColor: '#ef4444', border: 'none', color: '#fff', padding: '8px 20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}>إغلاق العرض ✕</button>
          </div>
          <div style={{ maxWidth: '1200px', width: '100%', height: '80vh', backgroundColor: '#1e293b', borderRadius: '16px', overflow: 'hidden', border: '1px solid #334155' }}>
            <iframe src={selectedPdf} width="100%" height="100%" allow="autoplay" style={{ border: 'none' }}></iframe>
          </div>
        </div>
      )}
    </div>
  );
}