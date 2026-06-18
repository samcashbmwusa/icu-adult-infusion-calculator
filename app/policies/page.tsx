'use client';

import { useRouter } from 'next/navigation';

export default function PoliciesPage() {
  const router = useRouter();

  // مصفوفة السياسات وصور الإنفوجرافيك المربوطة بالسحاب
  const infographics = [
    {
      title: "Allow Natural Death (AND)",
      description: "السياسات والبروتوكولات المعتمدة والمتعلقة بـ Allow Natural Death (CLIN-P037) داخل وحدة العناية الحثيثة.",
      url: "https://i.ibb.co/76YTH5S/Allow-Natural-Death-AND-CLIN-P037.png" // رابط صورتك الأولى المباشر
    },
    {
      title: "إنفوجرافيك إدارة الأدوية الخطرة (High-Alert Medications)",
      description: "السياسات المعتمدة للتحقق المزدوج والتخزين الآمن للمحاليل الوريدية الحرجة وقواعد البيانات.",
      url: "https://i.ibb.co/N2N98vh2/Man-wear-light-blue-scrub-202606151052.jpg" // يمكنك استبداله لاحقاً برابط الصورة الثانية
    },
    {
      title: "إنفوجرافيك مكافحة العدوى (Infection Control)",
      description: "المعايير المعتمدة للتعقيم المتقدم والعزل الوقائي داخل وحدة العناية المركزية للبالغين.",
      url: "https://i.ibb.co/N2N98vh2/Man-wear-light-blue-scrub-202606151052.jpg" // يمكنك استبداله لاحقاً برابط الصورة الثالثة
    }
  ];

  return (
    <div 
      style={{
        backgroundColor: '#020617', // الخلفية السوداء المريحة جداً للعين أثناء المناوبات والعمل الليلي
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
      {/* الهيدر العلوي وزر العودة التفاعلي */}
      <div style={{ maxWidth: '900px', width: '100%', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
            قسم السياسات والبروتوكولات
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '4px 0 0 0' }}>
            السياسات التمريضية والطبية المعتمدة - مستشفى الجامعة الأردنية
          </p>
        </div>
      </div>

      {/* خط فاصل أنيق */}
      <div style={{ maxWidth: '900px', width: '100%', height: '2px', backgroundColor: '#1e293b', marginBottom: '32px' }}></div>

      {/* قائمة عرض الكروت والإنفوجرافيكس */}
      <div style={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {infographics.map((info, index) => (
          <div 
            key={index}
            style={{
              backgroundColor: '#0f172a',
              border: '1px solid #1e293b',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* تفاصيل وعنوان السياسة */}
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#10b981', marginBottom: '8px', marginTop: '0' }}>
              {index + 1}. {info.title}
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '20px', lineHeight: '1.6' }}>
              {info.description}
            </p>

            {/* حاوية الإنفوجرافيك المعروض بدقة عالية */}
            <div 
              style={{
                width: '100%',
                backgroundColor: '#1e293b',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #334155',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '12px',
                boxSizing: 'border-box'
              }}
            >
              <img 
                src={info.url} 
                alt={info.title}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)'
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* التذييل الخاص بحقوق التصميم والبرمجة */}
      <p style={{ fontSize: '11px', color: '#64748b', marginTop: '60px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        © All Rights Reserved. Designed & Developed by Suliman Bilal Awad
      </p>
    </div>
  );
}