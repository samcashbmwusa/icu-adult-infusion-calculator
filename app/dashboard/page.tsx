'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Ward = 'ccu' | 'icu' | 'er';

type DashboardCard = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

type WardConfig = {
  title: string;
  code: string;
  subtitle: string;
  accent: string;
  cards: DashboardCard[];
  calculatorTitle: string;
};

const wardConfig: Record<Ward, WardConfig> = {
  ccu: {
    title: 'وحدة العناية القلبية',
    code: 'CCU',
    subtitle:
      'لوحة وصول مخصصة للإجراءات والنماذج والمراجع المتعلقة بالعناية القلبية.',
    accent: '#f59e0b',
    cards: [
      {
        icon: '🫀',
        title: 'إجراءات العناية القلبية',
        description:
          'الإجراءات التمريضية والمهام اليومية الخاصة بوحدة العناية القلبية.',
        href: '/procedures',
      },
      {
        icon: '💊',
        title: 'أدوية القلب والمحاليل',
        description:
          'مراجع الأدوية والتخفيفات والمحاليل المعتمدة داخل وحدة CCU.',
        href: '/medications',
      },
      {
        icon: '📋',
        title: 'سياسات وبروتوكولات CCU',
        description:
          'مكتبة السياسات والبروتوكولات المعتمدة الخاصة بالعناية القلبية.',
        href: '/policies',
      },
      {
        icon: '📄',
        title: 'نماذج وأوراق CCU',
        description:
          'نماذج المراقبة والتسليم والوثائق المستخدمة داخل وحدة CCU.',
        href: '/forms',
      },
    ],
    calculatorTitle: '🧮 حاسبات ومراجع سريعة للعناية القلبية',
  },

  icu: {
    title: 'وحدة العناية الحثيثة',
    code: 'ICU',
    subtitle:
      'لوحة وصول مخصصة لإجراءات العناية الحثيثة والوثائق والمراجع الحرجة.',
    accent: '#38bdf8',
    cards: [
      {
        icon: '🩺',
        title: 'إجراءات العناية الحثيثة',
        description:
          'الإجراءات التمريضية والنماذج التطبيقية الخاصة ببيئة ICU.',
        href: '/procedures',
      },
      {
        icon: '💉',
        title: 'الأدوية والمحاليل الحرجة',
        description:
          'أدلة الأدوية عالية الخطورة، التخفيفات، والمعايرة المستمرة.',
        href: '/medications',
      },
      {
        icon: '📋',
        title: 'بروتوكولات ICU',
        description:
          'بروتوكولات وسياسات العمل المعتمدة داخل العناية الحثيثة.',
        href: '/protocols',
      },
      {
        icon: '📄',
        title: 'نماذج وأوراق ICU',
        description:
          'المراقبة والتوثيق وIntake/Output وأوراق التسليم اليومية.',
        href: '/forms',
      },
    ],
    calculatorTitle: '🧮 الانتقال إلى حاسبة المحاليل الوريدية المتقدمة',
  },

  er: {
    title: 'قسم الطوارئ',
    code: 'ER',
    subtitle:
      'لوحة وصول مخصصة للمراجع السريعة والإجراءات والنماذج الخاصة بالطوارئ.',
    accent: '#ef4444',
    cards: [
      {
        icon: '🚑',
        title: 'إجراءات قسم الطوارئ',
        description:
          'إجراءات وتمريضات العمل السريع داخل قسم الطوارئ.',
        href: '/procedures',
      },
      {
        icon: '💊',
        title: 'أدوية الطوارئ',
        description:
          'مراجع الأدوية والتخفيفات والمعلومات السريعة لحالات الطوارئ.',
        href: '/medications',
      },
      {
        icon: '📋',
        title: 'بروتوكولات الطوارئ',
        description:
          'الوصول إلى البروتوكولات والسياسات المرجعية المعتمدة للقسم.',
        href: '/protocols',
      },
      {
        icon: '📄',
        title: 'نماذج وأوراق ER',
        description:
          'نماذج التمريض والتوثيق والتسليم الأكثر استخداماً في الطوارئ.',
        href: '/forms',
      },
    ],
    calculatorTitle: '🧮 الحاسبات السريعة للطوارئ',
  },
};

function isWard(value: string | undefined): value is Ward {
  return value === 'ccu' || value === 'icu' || value === 'er';
}

function getCookie(name: string): string | undefined {
  const prefix = `${name}=`;

  return document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(prefix))
    ?.slice(prefix.length);
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; Path=/; Max-Age=0; SameSite=Lax`;
}

export default function DashboardPage() {
  const router = useRouter();
  const [ward, setWard] = useState<Ward | null>(null);

  useEffect(() => {
    const isLoggedIn = getCookie('icu_auth') === 'true';
    const selectedWard = getCookie('icu_ward');

    if (!isLoggedIn || !isWard(selectedWard)) {
      window.location.replace('/');
      return;
    }

    setWard(selectedWard);
  }, []);

  if (!ward) {
    return null;
  }

  const config = wardConfig[ward];

  const logout = () => {
    deleteCookie('icu_auth');
    deleteCookie('icu_ward');
    window.location.replace('/');
  };

  return (
    <div
      dir="rtl"
      style={{
        backgroundColor: '#020617',
        minHeight: '100vh',
        color: '#f8fafc',
        fontFamily: 'sans-serif',
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
          `,
        }}
      />

      <header
        style={{
          backgroundColor: '#0f172a',
          borderBottom: '1px solid #1e293b',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            borderRadius: '10px',
            backgroundColor: '#0f172a',
            border: '1px solid #1e293b',
            overflow: 'hidden',
            padding: '2px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              height: '2px',
              backgroundColor: config.accent,
              boxShadow: `0 0 8px ${config.accent}`,
              animation: 'topTrace 4s linear infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '2px',
              backgroundColor: config.accent,
              boxShadow: `0 0 8px ${config.accent}`,
              animation: 'leftTrace 4s linear infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: '2px',
              backgroundColor: config.accent,
              boxShadow: `0 0 8px ${config.accent}`,
              animation: 'bottomTrace 4s linear infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '2px',
              backgroundColor: config.accent,
              boxShadow: `0 0 8px ${config.accent}`,
              animation: 'rightTrace 4s linear infinite',
            }}
          />

          <div
            style={{
              backgroundColor: '#0f172a',
              padding: '6px 20px',
              borderRadius: '8px',
            }}
          >
            <span
              style={{
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#ffffff',
                textShadow: `0 0 6px ${config.accent}`,
              }}
            >
              منصة دليلي
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ textAlign: 'left' }}>
            <span
              style={{
                display: 'block',
                fontSize: '0.85rem',
                color: config.accent,
                fontWeight: 700,
              }}
            >
              {config.title} — {config.code}
            </span>

            <span
              style={{
                display: 'block',
                fontSize: '0.75rem',
                color: '#64748b',
              }}
            >
              مستشفى الجامعة الأردنية · دائرة التمريض
            </span>
          </div>

          <button
            type="button"
            onClick={logout}
            style={{
              backgroundColor: '#7f1d1d30',
              border: '1px solid #ef444440',
              color: '#f87171',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            تسجيل الخروج 🚪
          </button>
        </div>
      </header>

      <main
        style={{
          padding: '40px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            marginBottom: '32px',
            border: `1px solid ${config.accent}55`,
            borderRadius: '18px',
            padding: '24px',
            background: `linear-gradient(135deg, ${config.accent}20, transparent 58%)`,
          }}
        >
          <span
            style={{
              color: config.accent,
              fontWeight: 800,
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
            }}
          >
            ACCESS PROFILE · {config.code}
          </span>

          <h1
            style={{
              fontSize: '1.9rem',
              fontWeight: 800,
              color: '#ffffff',
              margin: '10px 0 8px',
            }}
          >
            {config.title}
          </h1>

          <p
            style={{
              color: '#cbd5e1',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {config.subtitle}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {config.cards.map((card) => (
            <button
              type="button"
              key={card.title}
              onClick={() => router.push(card.href)}
              style={{
                textAlign: 'right',
                backgroundColor: '#0f172a',
                border: '1px solid #1e293b',
                borderRadius: '16px',
                padding: '24px',
                cursor: 'pointer',
                color: '#f8fafc',
                transition: 'transform 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.borderColor = config.accent;
                event.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.borderColor = '#1e293b';
                event.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
                {card.icon}
              </div>

              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: '0 0 8px',
                }}
              >
                {card.title}
              </h2>

              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '0.85rem',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {card.description}
              </p>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => router.push('/calculators')}
          style={{
            width: '100%',
            marginTop: '32px',
            padding: '18px',
            backgroundColor: `${config.accent}20`,
            border: `1px solid ${config.accent}70`,
            borderRadius: '14px',
            color: config.accent,
            fontSize: '1rem',
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          {config.calculatorTitle}
        </button>
      </main>

      <footer
        style={{
          borderTop: '1px solid #1e293b',
          padding: '20px',
          marginTop: '40px',
          textAlign: 'center',
        }}
        dir="ltr"
      >
        <p
          style={{
            fontSize: '0.75rem',
            color: '#64748b',
            margin: 0,
          }}
        >
          Copyright © 2026{' '}
          <span style={{ color: config.accent }}>
            R.N. Suliman Bilal Awad
          </span>
          . JUH {config.code} Access Profile.
        </p>
      </footer>
    </div>
  );
}