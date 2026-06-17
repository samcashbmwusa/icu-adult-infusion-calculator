import Link from "next/link";

export default function DashboardPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">نظام حساب الجرعات الوريدية</h1>
        <p className="text-slate-400 mb-8">اختر القسم المطلوب</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link href="/medications" className="rounded-2xl bg-slate-800 p-6 border border-slate-700 hover:bg-slate-700 transition">
            <h2 className="text-2xl font-bold mb-3">💊 الأدوية</h2>
            <p className="text-slate-300">تحضير وتخفيف أدوية العناية الحثيثة</p>
          </Link>

          <Link href="/policies" className="rounded-2xl bg-slate-800 p-6 border border-slate-700 hover:bg-slate-700 transition">
            <h2 className="text-2xl font-bold mb-3">📘 سياسات مستشفى الجامعة</h2>
            <p className="text-slate-300">سياسات وتعليمات مستشفى الجامعة الأردنية</p>
          </Link>

          <Link href="/procedures" className="rounded-2xl bg-slate-800 p-6 border border-slate-700 hover:bg-slate-700 transition">
            <h2 className="text-2xl font-bold mb-3">🩺 الإجراءات الطبية</h2>
            <p className="text-slate-300">إجراءات تمريضية وطبية للعناية الحثيثة</p>
          </Link>
        </div>
      </div>
    </main>
  );
}