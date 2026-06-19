'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchItem {
  title: string;
  type: 'policy' | 'procedure';
  pdfUrl: string;
  id: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  // 📁 قاعدة البيانات المركزية للبحث الفوري من الصفحة الرئيسية
  const allItems: SearchItem[] = [
    // السياسات
    { id: 1, title: "Allow Natural Death (AND)", type: 'policy', pdfUrl: "https://drive.google.com/file/d/1FH_c3jgFS8dvuMyiGaFo88-1KVUhPJd-/preview" },
    { id: 2, title: "الخروج رغم النصيحة الطبية (DAMA)", type: 'policy', pdfUrl: "https://drive.google.com/file/d/1vJUFXvmf8dDb9RKUI7uLRmyiAUE5pGfo/preview" },
    // الإجراءات
    { id: 1, title: "Anti-Embolism Stocking (الإجراء العملي)", type: 'procedure', pdfUrl: "https://drive.google.com/file/d/1wO-PvVfnUIYn9bzq3dPielokQ0mmPCy2/preview" },
    { id: 2, title: "Assist-ETT", type: 'procedure', pdfUrl: "https://drive.google.com/file/d/1SWwyAeOwFa435STj4dSLjNNqd6uhXQYR/preview" },
    { id: 3, title: "Assisting-Extubation", type: 'procedure', pdfUrl: "https://drive.google.com/file/d/10rgNJT9f2xXhp2HlcWHvhj4PAhu6xVR8/preview" },
  ];

  // تصفية النتائج بناءً على النص المكتوب
  const filteredResults = searchTerm.trim() === '' ? [] : allItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', padding: '40px 16px', fontFamily: 'sans-serif', color: '#f8fafc' }} dir="rtl">
      
      {/* هيدر الصفحة الرئيسية */}
      <div style={{ maxWidth: '800px', margin: '0 auto 40px auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '900', color: '#ffffff', margin: '0 0 8px 0' }}>
          منصة العناية الحثيثة الرقمية
        </h1>
        <p style={{ fontSize: '0.95rem', color: '#94a3b8', margin: '0' }}>
          مستشفى الجامعة الأردنية - وحدة العناية المركزة للبالغين
        </p>
      </div>

      {/* 🔍 شريط البحث المركزي الكبير الذكي */}
      <div style={{ maxWidth: '650px', margin: '0 auto 48px auto', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#0f172a', border: '2px solid #1e293b', borderRadius: '16px', padding: '4px 16px', transition: 'all 0.3s' }}>
          <span style={{ fontSize: '1.3rem', marginLeft: '12px' }}>🔍</span>
          <input
            type="text"
            placeholder="ابحث فوراً عن أي سياسة أو إجراء طبي هنا..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '14px 0', backgroundColor: 'transparent', border: 'none', color: '#ffffff', fontSize: '1.05rem', outline: 'none' }}
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} style={{ backgroundColor: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '1.1rem' }}>✕</button>
          )}
        </div>

        {/* ⚡ قائمة نتائج البحث الفورية المنسدلة */}
        {searchTerm.trim() !== '' && (
          <div style={{ position: 'absolute', top: '105%', left: 0, width: '100%', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '14px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)', zIndex: 100, overflow: 'hidden', padding: '6px 0' }}>
            {filteredResults.length > 0 ? (
              filteredResults.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSearchTerm('');
                    if (item.pdfUrl) setSelectedPdf(item.pdfUrl);
                  }}
                  style={{ padding: '14px 20px', cursor: 'pointer', borderBottom: index !== filteredResults.length - 1 ? '1px solid #1e293b' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e293b'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <span style={{ fontWeight: '600', color: '#e2e8f0', fontSize: '0.95rem' }}>{item.title}</span>
                  <span style={{ fontSize: '0.75rem', padding: '4px 10px', borderRadius: '20px', fontWeight: 'bold', backgroundColor: item.type === 'policy' ? '#10b98120' : '#3b82f620', color: item.type === 'policy' ? '#10b981' : '#3b82f6', border: `1px solid ${item.type === 'policy' ? '#10b98130' : '#3b82f630'}` }}>
                    {item.type === 'policy' ? '📄 سياسة' : '⚙️ إجراء عملي'}
                  </span>
                </div>
              ))
            ) : (
              <div style={{ padding: '16px', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>❌ لم نجد أي نتائج متطابقة للبحث.</div>
            )}
          </div>
        )}
      </div>

      {/* 📁 الأقسام الرئيسية (3 كروت متناسقة ومتوازية بالكامل) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* كرت قسم السياسات */}
        <div
          onClick={() => router.push('/policies')}
          style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#10b981'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1e293b'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>📁</div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#ffffff', margin: '0 0 8px 0' }}>قسم السياسات والبروتوكولات</h2>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0', lineHeight: '1.5' }}>تصفح واستعرض الـ 40 سياسة التنظيمية المعتمدة لوحدة العناية الحثيثة.</p>
        </div>

        {/* 💉 كرت قسم حاسبة الأدوية - تحديث النص ليوضح الجاهزية الكاملة للقسم */}
        <div
          onClick={() => router.push('/calculators')} 
          style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ec4899'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1e293b'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>💉</div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#ffffff', margin: '0 0 8px 0' }}>حاسبة الأدوية والتسريب</h2>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0', lineHeight: '1.5' }}>النظام جاهز ومفعّل بالكامل للحساب الفوري الدقيق لجرعات أدوية القسم ومعدلات التدفق الوريدي.</p>
        </div>

        {/* كرت قسم الإجراءات */}
        <div
          onClick={() => router.push('/procedures')}
          style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1e293b'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>⚙️</div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#ffffff', margin: '0 0 8px 0' }}>قسم الإجراءات التمريضية</h2>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0', lineHeight: '1.5' }}>تصفح واستعرض دليلك الشامل لخطوات العمل والبروتوكولات التطبيقية الميدانية.</p>
        </div>

      </div>

      {/* 🖥️ شاشة العرض المدمجة المنبثقة للـ PDF */}
      {selectedPdf && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(2, 6, 23, 0.98)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '24px', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', backgroundColor: '#0f172a', padding: '12px 24px', borderRadius: '16px', border: '1px solid #1e293b', boxSizing: 'border-box' }}>
            <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#ffffff' }}>📄 محرك البحث المركزي - استعراض المستند بالدقة الكاملة</span>
            <button onClick={() => setSelectedPdf(null)} style={{ backgroundColor: '#ef4444', border: 'none', color: '#fff', padding: '8px 20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}>إغلاق العرض ✕</button>
          </div>
          <div style={{ maxWidth: '1200px', width: '100%', height: '80vh', backgroundColor: '#1e293b', borderRadius: '16px', overflow: 'hidden', border: '1px solid #334155' }}>
            <iframe src={selectedPdf} width="100%" height="100%" allow="autoplay" style={{ border: 'none' }}></iframe>
          </div>
        </div>
      )}

      {/* الفوتر */}
      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <p style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          © All Rights Reserved. Designed & Developed by Suliman Bilal Awad
        </p>
      </div>
    </div>
  );
}