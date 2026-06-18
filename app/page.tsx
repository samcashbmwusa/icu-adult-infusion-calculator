'use strict';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [licenseKey, setLicenseKey] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // التحقق من البيانات البرمجية ومطابقتها (تم تعديل الباسوورد إلى CCU2026)
    if (username === 'admin' && password === 'CCU2026' && licenseKey === 'JUH-001') {
      // حفظ حالة الدخول في الـ Cookies ليراها نظام الحماية middleware.ts
      document.cookie = "isLoggedIn=true; path=/; max-age=86400"; // صالح لمدة 24 ساعة
      
      // الانتقال إلى صفحة حاسبة الأدوية مباشرة
      router.push('/medications');
    } else {
      setError('خطأ في اسم المستخدم، كلمة المرور أو رمز الترخيص! يرجى التواصل مع المطور لأخذ الإذن.');
      loading && setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 font-sans" dir="rtl">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full border border-slate-100 transition-all duration-300 hover:shadow-blue-100/50">
        
        {/* شاشة عرض المطور والصورة الشخصية */}
        <div className="flex flex-col items-center mb-6" dir="ltr">
          <div className="relative w-28 h-28 mb-3 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl bg-slate-100">
            <Image 
              src="/suliman.jpg" // تأكد من وجود صورتك بهذا الاسم والامتداد في مجلد public
              alt="Suliman Bilal Awad, R.N"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-xl font-bold text-slate-800 tracking-wide text-center">Suliman Bilal Awad, R.N</h2>
          <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mt-1 text-center">
            Jordan University Hospital
          </p>
          <div className="w-16 h-1 bg-blue-600 rounded mt-3"></div>
        </div>

        <h1 className="text-xl font-black text-slate-700 text-center mb-2">
          ICU Adult Infusion Calculator
        </h1>
        <p className="text-xs text-slate-400 text-center mb-6">
          نظام حاسبة أدوية العناية الحثيثة للبالغين - نظام محمي وخاص
        </p>

        {/* رسالة الخطأ في حال إدخال بيانات خاطئة */}
        {error && (
          <div className="bg-red-50 border-r-4 border-red-500 text-red-700 p-3 rounded-lg mb-4 text-sm text-right">
            {error}
          </div>
        )}

        {/* نموذج تسجيل الدخول */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-600 mb-1 text-right">اسم المستخدم (Username)</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
              placeholder="Enter username"
              required
              style={{ direction: 'ltr' }}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-600 mb-1 text-right">كلمة المرور (Password)</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
              placeholder="Enter password"
              required
              style={{ direction: 'ltr' }}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-600 mb-1 text-right">رمز الترخيص الإذن (License Key)</label>
            <input
              type="text"
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
              placeholder="JUH-XXX"
              required
              style={{ direction: 'ltr' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition duration-200 shadow-lg shadow-blue-600/20 disabled:bg-blue-400 mt-2"
          >
            {loading ? 'جاري التحقق والدخول...' : 'تسجيل الدخول'}
          </button>
        </form>

        <p className="text-[10px] text-slate-400 text-center mt-6 uppercase tracking-wider">
          © All Rights Reserved. Designed & Developed by Suliman Bilal Awad
        </p>

      </div>
    </div>
  );
}