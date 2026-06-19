'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchItem {
  id: number;
  title: string;
  type: 'policy' | 'procedure' | 'medication' | 'form';
  pdfUrl?: string;
  slug?: string;
  keywords: string[];
}

export default function DashboardPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  // 🔍 قاعدة البيانات المركزية
  const allItems: SearchItem[] = [
    // 📄 قسم السياسات
    { 
      id: 1, 
      title: "Allow Natural Death (AND)", 
      type: 'policy', 
      pdfUrl: "https://drive.google.com/file/d/1FH_c3jgFS8dvuMyiGaFo88-1KVUhPJd-/view",
      keywords: ["and", "allow natural death", "الموت الطبيعي", "سياسة الموت"]
    },
    { 
      id: 2, 
      title: "الخروج رغم النصيحة الطبية (DAMA)", 
      type: 'policy', 
      pdfUrl: "https://drive.google.com/file/d/1vJUFXvmf8dDb9RKUI7uLRmyiAUE5pGfo/view",
      keywords: ["dama", "الخروج رغم النصيحة", "خروج", "توقيع خروج"]
    },
    
    // ⚙️ قسم الإجراءات العمليّة
    { 
      id: 3, 
      title: "Anti-Embolism Stocking (الإجراء العملي)", 
      type: 'procedure', 
      pdfUrl: "https://drive.google.com/file/d/1wO-PvVfnUIYn9bzq3dPielokQ0mmPCy2/view",
      keywords: ["anti-embolism", "stocking", "الجوارب", "جوارب الجلطة", "الجلطات"]
    },
    { 
      id: 4, 
      title: "Assist-ETT", 
      type: 'procedure', 
      pdfUrl: "https://drive.google.com/file/d/1SWwyAeOwFa435STj4dSLjNNqd6uhXQYR/view",
      keywords: ["ett", "assist-ett", "أنبوب رغامي", "تنبيب", "intubation"]
    },
    { 
      id: 5, 
      title: "Assisting-Extubation", 
      type: 'procedure', 
      pdfUrl: "https://drive.google.com/file/d/10rgNJT9f2xXhp2HlcWHvhj4PAhu6xVR8/view",
      keywords: ["extubation", "assisting-extubation", "سحب الأنبوب", "فصل جهاز التنفس"]
    },
    
    // 💉 قسم الأدوية والمحاليل
    { 
      id: 6, 
      title: "Noradrenaline (Norepinephrine) - حاسبة الجرعات والمحاليل", 
      type: 'medication', 
      slug: "noradrenaline",
      keywords: ["noradrenaline", "norepinephrine", "adrenaline", "نورأدرينالين", "نورادرينالين", "ادرينالين", "أدرينالين", "داعم", "مقبض"]
    },
    { 
      id: 7, 
      title: "Dopamine - حاسبة الجرعات والمحاليل", 
      type: 'medication', 
      slug: "dopamine",
      keywords: ["dopamine", "دوبامين", "داعم قلب"]
    },
    { 
      id: 8, 
      title: "Dobutamine - حاسبة الجرعات والمحاليل", 
      type: 'medication', 
      slug: "dobutamine",
      keywords: ["dobutamine", "دوبوتامين", "منشط قلب"]
    },
    { 
      id: 9, 
      title: "Nitroglycerin (Tridil) - حاسبة الجرعات والمحاليل", 
      type: 'medication', 
      slug: "nitroglycerin",
      keywords: ["nitroglycerin", "tridil", "تريديل", "نيتروجليسرين", "موسع الشرايين", "ضغط"]
    },
    { 
      id: 10, 
      title: "Amiodarone (Cordarone) - حاسبة الجرعات والمحاليل", 
      type: 'medication', 
      slug: "amiodarone",
      keywords: ["amiodarone", "cordarone", "أميودارون", "اميودارون", "كوردارون", "تنظيم ضربات", "اضطراب القلب"]
    },
    { 
      id: 11, 
      title: "Aggrastat (Tirofiban) - حاسبة الجرعات والمحاليل", 
      type: 'medication', 
      slug: "aggrastat",
      keywords: ["aggrastat", "tirofiban", "أغراستات", "اغراستات", "تيروفيبان", "مسيل", "جلطة محتشمة"]
    }
  ];

  const normalizeText = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[أإآا]/g, 'ا')
      .replace(/[ةه]/g, 'ه')
      .trim();
  };

  const getFilteredResults = () => {
    const query = normalizeText(searchTerm);
    if (!query) return [];

    const searchWords = query.split(/\s+/);

    return allItems.filter(item => {
      const normalizedTitle = normalizeText(item.title);
      const normalizedKeywords = item.keywords.map(kw => normalizeText(kw));
      const normalizedType = normalizeText(item.type);

      return searchWords.every(word => {
        return (
          normalizedTitle.includes(word) ||
          normalizedType.includes(word) ||
          normalizedKeywords.some(keyword => keyword.includes(word))
        );
      });
    });
  };

  const filteredResults = getFilteredResults();

  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh', padding: '40px 16px', fontFamily: 'sans-serif', color: '#f8fafc' }} dir="rtl">
      
      {/* هيدر المنصة الرئيسي المحدث */}
      <div style={{ maxWidth: '800px', margin: '0 auto 40px auto', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '900', 
          color: '#ffffff', 
          margin: '0 0 12px 0',
          letterSpacing: '1px',
          textShadow: '0 0 10px rgba(56, 189, 248, 0.6), 0 0 20px rgba(56, 189, 248, 0.3), 0 0 30px rgba(14, 165, 233, 0.2)'
        }}>
          منصة دليلي
        </h1>
        <p style={{ fontSize: '1rem', color: '#94a3b8', margin: '0', fontWeight: '500' }}>
          أهلاً وسهلاً بكم - مستشفى الجامعة الأردنية
        </p>
      </div>

      {/* 🔍 شريط البحث المتقدم الشامل والذكي */}
      <div style={{ maxWidth: '650px', margin: '0 auto 48px auto', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#0f172a', border: '2px solid #1e293b', borderRadius: '16px', padding: '4px 16px', transition: 'all 0.3s' }}>
          <span style={{ fontSize: '1.3rem', marginLeft: '12px' }}>🔍</span>
          <input
            type="text"
            placeholder="ابحث عن أوراق، أدوية، سياسات..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '14px 0', backgroundColor: 'transparent', border: 'none', color: '#ffffff', fontSize: '1.05rem', outline: 'none' }}
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} style={{ backgroundColor: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '1.1rem' }}>✕</button>
          )}
        </div>

        {/* قائمة نتائج البحث السريع */}
        {searchTerm.trim() !== '' && (
          <div style={{ position: 'absolute', top: '105%', left: 0, width: '100%', backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '14px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)', zIndex: 100, overflow: 'hidden', padding: '6px 0' }}>
            {filteredResults.length > 0 ? (
              filteredResults.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSearchTerm('');
                    if (item.type === 'medication' && item.slug) {
                      router.push(`/medications/${item.slug}`);
                    } else if (item.pdfUrl) {
                      setSelectedPdf(item.pdfUrl);
                    }
                  }}
                  style={{ padding: '14px 20px', cursor: 'pointer', borderBottom: index !== filteredResults.length - 1 ? '1px solid #1e293b' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'background 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e293b'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <span style={{ fontWeight: '600', color: '#e2e8f0', fontSize: '0.95rem' }}>{item.title}</span>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    padding: '4px 10px', 
                    borderRadius: '20px', 
                    fontWeight: 'bold', 
                    backgroundColor: item.type === 'policy' ? '#10b98120' : item.type === 'procedure' ? '#3b82f620' : item.type === 'medication' ? '#ec489920' : '#eab30820', 
                    color: item.type === 'policy' ? '#10b981' : item.type === 'procedure' ? '#3b82f6' : item.type === 'medication' ? '#ec4899' : '#eab308', 
                    border: `1px solid ${item.type === 'policy' ? '#10b98130' : item.type === 'procedure' ? '#3b82f630' : item.type === 'medication' ? '#ec489930' : '#eab30830'}` 
                  }}>
                    {item.type === 'policy' ? '📄 سياسة' : item.type === 'procedure' ? '⚙️ إجراء' : item.type === 'medication' ? '💉 دواء' : '🖨️ نموذج'}
                  </span>
                </div>
              ))
            ) : (
              <div style={{ padding: '16px', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>❌ لم نجد نتائج متطابقة.</div>
            )}
          </div>
        )}
      </div>

      {/* 📁 شبكة الأقسام الأربعة المتناسقة */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* كرت السياسات */}
        <div
          onClick={() => router.push('/policies')}
          style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '20px', padding: '32px 24px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#10b