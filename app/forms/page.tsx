'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormItem {
  id: number;
  title: string;
  description: string;
  pdfUrl: string;
}

export default function FormsPage() {
  const router = useRouter();
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  // 📝 هنا يمكنك إضافة أو تعديل أو حذف أي أوراق بكل سهولة مستقبلاً
  const myForms: FormItem[] = [
    {
      id: 1,
      title: "ورقة طلب وتوصيل المعقمات (CSSD Form)",
      description: "النموذج المعتمد لطلب الأدوات والمستلزمات المعقمة من قسم التعقيم المركزي.",
      pdfUrl: "https://drive.google.com/file/d/1FH_c3jgFS8dvuMyiGaFo88-1KVUhPJd-/preview"
    },
    {
      id: 2,
      title: "نموذج الرعاية قبل وبعد قسطرة القلب (Pre/Post Cath Sheet)",
      description: "شيت المتابعة والتحضير الشامل لمرضى قسطرة القلب الشريانية.",
      pdfUrl: "https://drive.google.com/file/d/1vJUFXvmf8dDb9RKUI7uLRmyiAUE5pGfo/preview"
    },
    {
      id: 3,
      title: "ورقة توزيع المهام والأسرة (Assignment Sheet)",
      description: "الجدول اليومي لتوزيع ورديات التمريض، الأسرة، والمهام داخل القسم.",
      pdfUrl: "https://drive.google.com/file/d/1wO-PvVfnUIYn9bzq3dPielokQ0mmPCy2/preview"
    }
  ];

  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', padding: '40px 16px', fontFamily: 'sans-serif', color: '#f8fafc' }} dir="rtl">
      
      {/* الهيدر وزر العودة */}
      <div style={{ maxWidth: '1000px', margin: '0 auto 32px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffffff', margin: '0 0 4px 0' }}>🖨️ ملف الأوراق الأكثر استخداماً</h1>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>نماذج واستمارات وحدة العناية الحثيثة جاهزة للمعاينة والطباعة الفورية</p>
        </div>
        <button 
          onClick={() => router.push('/dashboard')}
          style={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#ffffff', padding: '10px 20px', borderRadius: '12px', cursor: 'pointer', fontWeight: '600' }}
        >
          العودة للرئيسية ↩️
        </button>
      </div>

      {/* شبكة عرض الأوراق */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        {myForms.map((form) => (
          <div 
            key={form.id}
            onClick={() => setSelectedPdf(form.pdfUrl)}
            style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', flexDirection: 'column', justifyContent: 'between' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#eab308'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1e293b'}
          >
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📄</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 'bold', color: '#ffffff', margin: '0 0 8px 0' }}>{form.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: '1.5' }}>{form.description}</p>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid #1e293b', color: '#eab308', fontSize: '0.85rem', fontWeight: 'bold', textAlign: 'left' }}>
              اضغط للطباعة 🖨️
            </div>
          </div>
        ))}
      </div>

      {/* شاشة العرض المدمجة المنبثقة للاستعراض والطباعة */}
      {selectedPdf && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(2, 6, 23, 0.98)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '24px', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', backgroundColor: '#0f172a', padding: '12px 24px', borderRadius: '16px', border: '1px solid #1e293b', boxSizing: 'border-box' }}>
            <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#ffffff' }}>📄 استعراض المستند - اضغط على أيقونة الطابعة داخل الملف</span>
            <button onClick={() => setSelectedPdf(null)} style={{ backgroundColor: '#ef4444', border: 'none', color: '#fff', padding: '8px 20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}>إغلاق ✕</button>
          </div>
          <div style={{ maxWidth: '1200px', width: '100%', height: '80vh', backgroundColor: '#1e293b', borderRadius: '16px', overflow: 'hidden', border: '1px solid #334155' }}>
            <iframe src={selectedPdf} width="100%" height="100%" allow="autoplay" style={{ border: 'none' }}></iframe>
          </div>
        </div>
      )}

    </div>
  );
}