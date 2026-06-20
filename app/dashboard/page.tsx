'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('calculators');

  // حاسبة المحاليل الوريدية (ICU Infusion Calculator)
  const [weight, setWeight] = useState('');
  const [dose, setDose] = useState('');
  const [vialMg, setVialMg] = useState('');
  const [fluidMl, setFluidMl] = useState('');
  const [infusionRate, setInfusionRate] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    router.push('/');
  };

  const calculateInfusion = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const d = parseFloat(dose);
    const mg = parseFloat(vialMg);
    const ml = parseFloat(fluidMl);

    if (w && d && mg && ml) {
      const concentrationMcgMl = (mg * 1000) / ml;
      const rate = (d * w * 60) / concentrationMcgMl;
      setInfusionRate(parseFloat(rate.toFixed(2)));
    }
  };

  if (!mounted) return null;

  return (
    <div style={{ 
      backgroundColor: '#020617', 
      minHeight: '100vh', 
      color: '#f8fafc', 
      fontFamily: 'sans-serif' 
    }} dir="rtl">
      
      {/* 🧩 حاقن أنيميشن تتبع الزوايا الهندسية للفريم المضيء حول العنوان */}
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
        justifyContent: 'space-between',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        
        {/* 🔲 حاوية العنوان المزودة بالفريم الضوئي التتبعي المحترف */}
        <div style={{ 
          position: 'relative', 
          display: 'inline-block', 
          borderRadius: '10px',
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          overflow: 'hidden',
          padding: '2px'
        }}>
          {/* الخطوط الأربعة التتبعية الذكية */}
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

        {/* معلومات القسم والمستشفى */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ textAlign: 'left' }}>
            <span style={{ display: 'block', fontSize: '0.85rem', color: '#38bdf8', fontWeight: '600' }}>مستشفى الجامعة الأردنية</span>
            <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b' }}>قسم العناية الحثيثة ICU</span>
          </div>
          <button 
            onClick={handleLogout}
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

      {/* 🗂️ شريط التبويب والمجلدات المطلوبة تماماً */}
      <div style={{ backgroundColor: '#0f172a', borderBottom: '1px solid #1e293b', padding: '0 24px' }}>
        <div style={{ display: 'flex', gap: '8px', maxWidth: '1200px', margin: '0 auto', overflowX: 'auto' }}>
          <button 
            onClick={() => setActiveTab('calculators')}
            style={{ padding: '16px', fontSize: '0.95rem', fontWeight: '600', color: activeTab === 'calculators' ? '#38bdf8' : '#94a3b8', borderBottom: activeTab === 'calculators' ? '2px solid #38bdf8' : '2px solid transparent', backgroundColor: 'transparent', borderTop: 'none', borderLeft: 'none', borderRight: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            🧮 حاسبات المحاليل (الرئيسية)
          </button>
          <button 
            onClick={() => setActiveTab('protocols')}
            style={{ padding: '16px', fontSize: '0.95rem', fontWeight: '600', color: activeTab === 'protocols' ? '#38bdf8' : '#94a3b8', borderBottom: activeTab === 'protocols' ? '2px solid #38bdf8' : '2px solid transparent', backgroundColor: 'transparent', borderTop: 'none', borderLeft: 'none', borderRight: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            📁 إجراءات تمريضية
          </button>
          <button 
            onClick={() => setActiveTab('drugs')}
            style={{ padding: '16px', fontSize: '0.95rem', fontWeight: '600', color: activeTab === 'drugs' ? '#38bdf8' : '#94a3b8', borderBottom: activeTab === 'drugs' ? '2px solid #38bdf8' : '2px solid transparent', backgroundColor: 'transparent', borderTop: 'none', borderLeft: 'none', borderRight: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            📁 الأدوية
          </button>
          <button 
            onClick={() => setActiveTab('policies')}
            style={{ padding: '16px', fontSize: '0.95rem', fontWeight: '600', color: activeTab === 'policies' ? '#38bdf8' : '#94a3b8', borderBottom: activeTab === 'policies' ? '2px solid #38bdf8' : '2px solid transparent', backgroundColor: 'transparent', borderTop: 'none', borderLeft: 'none', borderRight: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            📁 بروتوكولات وسياسات
          </button>
          <button 
            onClick={() => setActiveTab('mostUsed')}
            style={{ padding: '16px', fontSize: '0.95rem', fontWeight: '600', color: activeTab === 'mostUsed' ? '#38bdf8' : '#94a3b8', borderBottom: activeTab === 'mostUsed' ? '2px solid #38bdf8' : '2px solid transparent', backgroundColor: 'transparent', borderTop: 'none', borderLeft: 'none', borderRight: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            📁 أوراق الأكثر استخدام
          </button>
        </div>
      </div>

      {/* 📊 المحتوى التفصيلي المبني على المجلدات النشطة */}
      <main style={{ padding: '32px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* المجلد الرئيسي: حاسبة المحاليل */}
        {activeTab === 'calculators' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
            <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>حاسبة الجرعات المستمرة لعلاجات العناية الحثيثة (Mcg/Kg/Min)</h2>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '20px' }}>قم بإدخل المعايير الحيوية للمريض لحساب معدل التدفق الدقيق عبر المضخة بالملي/ساعة (ml/hr).</p>
              
              <form onSubmit={calculateInfusion} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>وزن المريض (Kg):</label>
                    <input type="number" placeholder="مثال: 70" value={weight} onChange={(e) => setWeight(e.target.value)} style={{ width: '100%', padding: '10px 12px', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '10px', color: '#fff', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>الجرعة المطلوبة (Mcg/Kg/Min):</label>
                    <input type="number" step="0.01" placeholder="مثال: 5" value={dose} onChange={(e) => setDose(e.target.value)} style={{ width: '100%', padding: '10px 12px', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '10px', color: '#fff', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>كمية الدواء الإجمالية في الفتيل (Mg):</label>
                    <input type="number" placeholder="مثال: 250" value={vialMg} onChange={(e) => setVialMg(e.target.value)} style={{ width: '100%', padding: '10px 12px', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '10px', color: '#fff', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '6px' }}>حجم المحلول الكلي المتشكل (Ml):</label>
                    <input type="number" placeholder="مثال: 50" value={fluidMl} onChange={(e) => setFluidMl(e.target.value)} style={{ width: '100%', padding: '10px 12px', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '10px', color: '#fff', outline: 'none' }} />
                  </div>
                </div>

                <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#0284c7', color: '#fff', fontSize: '0.95rem', fontWeight: '700', border: 'none', borderRadius: '10px', cursor: 'pointer', marginTop: '8px' }}>حساب معدل التدفق 📊</button>
              </form>

              {infusionRate !== null && (
                <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#0284c715', border: '1px solid #0284c740', borderRadius: '12px', textAlign: 'center' }}>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: '#94a3b8' }}>معدل ضخ المحلول المطلوب (Infusion Rate):</span>
                  <span style={{ fontSize: '2rem', fontWeight: '900', color: '#38bdf8' }}>{infusionRate} ml/hr</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* مجلد: إجراءات تمريضية */}
        {activeTab === 'protocols' && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>مجلد الإجراءات التمريضية المعتمدة (Nursing Procedures)</h3>
            <ul style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.8', paddingRight: '20px' }}>
              <li>يجب غسل وتطهير منافذ القساطر باستخدام الكلورهكسيدين (Chlorhexidine 2%) لمدة 15 ثانية وتجفيفها كلياً قبل الاستخدام.</li>
              <li>تغيير الضمادات الشفافة (Tegaderm) كل 7 أيام أو فوراً في حال تلوثها أو رطوبتها.</li>
              <li>استبدال قساطر الفولي (Foleys Catheter) والتعامل مع الغيارات الجراحية وفق شروط التعقيم الكامل الصارمة لتفادي الـ CAUTI.</li>
            </ul>
          </div>
        )}

        {/* مجلد: الأدوية */}
        {activeTab === 'drugs' && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff', marginBottom: '16px' }}>مجلد أدلة تحضير ومعايرة أدوية الخطورة العالية (High-Alert Medications)</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #1e293b', color: '#38bdf8' }}>
                    <th style={{ padding: '12px' }}>اسم العلاج</th>
                    <th style={{ padding: '12px' }}>التركيز المعياري</th>
                    <th style={{ padding: '12px' }}>سائل التمديد</th>
                    <th style={{ padding: '12px' }}>الجرعة المبدئية</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #1e293b' }}>
                    <td style={{ padding: '12px', fontWeight: '600' }}>Norepinephrine</td>
                    <td style={{ padding: '12px' }}>4 mg / 50 ml</td>
                    <td style={{ padding: '12px' }}>D5W / Normal Saline</td>
                    <td style={{ padding: '12px' }}>0.05 - 0.1 mcg/kg/min</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #1e293b' }}>
                    <td style={{ padding: '12px', fontWeight: '600' }}>Amiodarone</td>
                    <td style={{ padding: '12px' }}>450 mg / 50 ml</td>
                    <td style={{ padding: '12px' }}>D5W الحصري</td>
                    <td style={{ padding: '12px' }}>1 mg/min for 6 hrs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* مجلد: بروتوكولات وسياسات */}
        {activeTab === 'policies' && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>مجلد السياسات الإدارية والبروتوكولات الطبية المحمية</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
              يحتوي هذا القسم على السياسات المحدثة الخاصة بمستشفى الجامعة الأردنية لقسم العناية الحثيثة (ICU Protocols). يرجى الالتزام بالمعايير المؤسسية أثناء تقديم الرعاية الطبية.
            </p>
          </div>
        )}

        {/* مجلد: أوراق الأكثر استخدام */}
        {activeTab === 'mostUsed' && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>مجلد النماذج والأوراق الأكثر استخداماً (Most Used Forms)</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
              مخططات المراقبة الحيوية اليومية، أوراق تتبع السوائل (Intake/Output Charts)، ونماذج استلام وتسليم الشفتات التمريضية الجاهزة للطباعة والرجوع السريع.
            </p>
          </div>
        )}

      </main>

      {/* 📜 تذييل الحقوق القانونية */}
      <footer style={{ borderTop: '1px solid #1e293b', padding: '20px', marginTop: '40px', textAlign: 'center' }} dir="ltr">
        <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0' }}>
          Copyright © 2026 <span style={{ color: '#38bdf8' }}>R.N. Suliman Bilal Awad</span> — JUH Intensive Care Protocols. Secured System.
        </p>
      </footer>

    </div>
  );
}