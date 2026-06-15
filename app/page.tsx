export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-4">
      <div className="w-full max-w-md rounded-2xl bg-slate-800 p-8 shadow-2xl border border-slate-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">
            نظام حساب الجرعات الوريدية
          </h1>
          <p className="text-slate-300 text-sm">
            أداة سريرية خاصة للعناية الحثيثة
          </p>
          <p className="text-slate-400 text-sm mt-2">
            تطوير: Suliman Bilal Awad, R.N
          </p>
          <p className="text-slate-400 text-sm">
            Jordan University Hospital
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              اسم المستخدم
            </label>
            <input
              type="text"
              placeholder="أدخل اسم المستخدم"
              className="w-full rounded-lg bg-slate-900 border border-slate-600 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              كلمة المرور
            </label>
            <input
              type="password"
              placeholder="أدخل كلمة المرور"
              className="w-full rounded-lg bg-slate-900 border border-slate-600 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              رمز الترخيص
            </label>
            <input
              type="text"
              placeholder="مثال: JUH-2026-001"
              className="w-full rounded-lg bg-slate-900 border border-slate-600 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold hover:bg-blue-700"
          >
            تسجيل الدخول
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          الدخول مقيّد. يمنع الاستخدام بدون تصريح.
        </p>
      </div>
    </main>
  );
}