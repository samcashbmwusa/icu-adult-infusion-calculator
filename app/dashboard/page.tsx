import Link from "next/link";

export default function DashboardPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-2">
        نظام حساب الجرعات الوريدية
      </h1>

      <p className="text-slate-400 mb-8">
        لوحة التحكم الرئيسية
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Link href="/medications" className="rounded-2xl bg-slate-800 p-6 border border-slate-700 hover:bg-slate-700">
          <h2 className="text-xl font-bold mb-2">💊 الأدوية</h2>
          <p className="text-slate-300">عرض وحساب جرعات الأدوية الوريدية</p>
        </Link>

        <Link href="/calculators" className="rounded-2xl bg-slate-800 p-6 border border-slate-700 hover:bg-slate-700">
          <h2 className="text-xl font-bold mb-2">🧮 الحاسبات</h2>
          <p className="text-slate-300">حاسبات الجرعات والمحاليل</p>
        </Link>

        <Link href="/protocols" className="rounded-2xl bg-slate-800 p-6 border border-slate-700 hover:bg-slate-700">
          <h2 className="text-xl font-bold mb-2">📋 البروتوكولات</h2>
          <p className="text-slate-300">بروتوكولات العناية الحثيثة</p>
        </Link>

        <Link href="/admin" className="rounded-2xl bg-slate-800 p-6 border border-slate-700 hover:bg-slate-700">
          <h2 className="text-xl font-bold mb-2">👤 الإدارة</h2>
          <p className="text-slate-300">إدارة المستخدمين والأدوية</p>
        </Link>
      </div>
    </main>
  );
}