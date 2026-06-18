'use client';

import { useState, useRef, MouseEvent, TouchEvent } from 'react';
import { useRouter } from 'next/navigation';

interface Policy {
  id: number;
  title: string;
  url: string;
}

export default function PoliciesPage() {
  const router = useRouter();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  
  // حالات التحكم بالزووم والسحب الذكي للصورة المكبّرة
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const policies: Policy[] = [
    {
      id: 1,
      title: "Allow Natural Death (AND)",
      // تم استخراج الرابط المباشر للملف الخام الأصلي لتفادي ضغط الجودة والتشويه
      url: "https://i.ibb.co/76YTH5S/Allow-Natural-Death-AND-CLIN-P037.png"
    },
    {
      id: 2,
      title: "إدارة الأدوية الخطرة (High-Alert Medications)",
      url: "https://i.ibb.co/N2N98vh2/Man-wear-light-blue-scrub-202606151052.jpg"
    },
    {
      id: 3,
      title: "سياسة مكافحة العدوى والتعقيم (Infection Control)",
      url: "https://i.ibb.co/N2N98vh2/Man-wear-light-blue-scrub-202606151052.jpg"
    },
    ...Array.from({ length: 37 }, (_, i) => ({
      id: i + 4,
      title: `سياسة بروتوكول العناية الحثيثة رقم ${i + 4}`,
      url: "https://i.ibb.co/N2N98vh2/Man-wear-light-blue-scrub-202606151052.jpg"
    }))
  ];

  const openModal = (url: string) => {
    setSelectedPhoto(url);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsDragging(false);
  };

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    if (scale === 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    });
  };

  const handleTouchStart = (e: TouchEvent) => {
    if (scale === 1 || e.touches.length !== 1) return;
    setIsDragging(true);
    const touch = e.touches[0];
    dragStart.current = { x: touch.clientX - position.x, y: touch.clientY - position.y };
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - dragStart.current.x,
      y: touch.clientY - dragStart.current.y
    });
  };

  const zoomIn = (e: MouseEvent) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 5)); // رفع الحد الأقصى للتكبير الداخلي لـ 5 أضعاف
  };

  const zoomOut = (e: MouseEvent) => {
    e.stopPropagation();
    setScale(prev => {
      const nextScale = Math.max(prev - 0.5, 1);
      if (nextScale === 1) setPosition({ x: 0, y: 0 });
      return nextScale;
    });
  };

  return (
    <div 
      style={{
        backgroundColor: '#020617',
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
      {/* الهيدر العلوي */}
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
            مكتبة السياسات الرقمية المعتمدة - اضغط على المجلد لفتح لوحة الفحص بدقة الـ HD الكاملة
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', width: '100%', height: '2px', backgroundColor: '#1e293b', marginBottom: '32px' }}></div>

      {/* شبكة المجلدات */}
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
            onClick={() => openModal(policy.url)}
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

      {/* لوحة الفحص والتكبير الذكي الفاخرة */}
      {selectedPhoto && (
        <div 
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(2, 6, 23, 0.99)', // تعتيم تام للتركيز
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            overflow: 'hidden',
            boxSizing: 'border-box'
          }}
        >
          {/* لوحة التحكم العلوية المحسّنة للزووم مع زر الدقة الكاملة */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#0f172a',
              border: '1px solid #1e293b',
              padding: '8px 20px',
              borderRadius: '30px',
              display: 'flex',
              gap: '14px',
              alignItems: 'center',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              zIndex: 10000
            }}
          >
            <button 
              onClick={zoomIn} 
              style={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold' }}
            >
              ＋
            </button>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', minWidth: '45px', textAlign: 'center', fontWeight: 'bold' }}>
              {Math.round(scale * 100)}%
            </span>
            <button 
              onClick={zoomOut} 
              style={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold' }}
            >
              －
            </button>
            
            <div style={{ width: '1px', height: '20px', backgroundColor: '#334155' }}></div>
            
            {/* 🎯 الحل السحري للحصول على الجودة الخام الأصلية دون أي تشويش وضغط */}
            <a 
              href={selectedPhoto} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                textDecoration: 'none',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              🔎 فتح بالدقة الكاملة الخام
            </a>

            <div style={{ width: '1px', height: '20px', backgroundColor: '#334155' }}></div>
            
            <button 
              onClick={closeModal} 
              style={{ backgroundColor: '#ef4444', border: 'none', color: '#fff', padding: '6px 16px', borderRadius: '20px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold' }}
            >
              إغلاق ✕
            </button>
          </div>

          {/* حاوية سحب وتحريك الصورة الحر */}
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
          >
            <img 
              src={selectedPhoto} 
              alt="Policy Grid Inspect" 
              style={{
                maxWidth: '90%',
                maxHeight: '80vh',
                borderRadius: '8px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                pointerEvents: 'none',
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transition: isDragging ? 'none' : 'transform 0.15s ease-out'
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <p style={{ fontSize: '11px', color: '#64748b', marginTop: '60px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        © All Rights Reserved. Designed & Developed by Suliman Bilal Awad
      </p>
    </div>
  );
}