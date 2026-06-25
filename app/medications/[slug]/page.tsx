import AggrastatCalculator from "../../components/AggrastatCalculator";
import { medications } from "../../data/medications";
import Link from "next/link";

export default async function MedicationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const medication = medications.find((item) => item.slug === slug);

  if (!medication || medication.status === "pending") {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-6 flex flex-col items-center justify-center" dir="rtl">
        <h1 className="text-2xl font-bold mb-4">⚠️ عذراً، هذا الدواء غير متوفر حالياً</h1>
        <p className="text-slate-400 mb-6">يتم حالياً تدقيق وتحديث بروتوكول هذا الدواء من قبل قسم التمريض.</p>
        <Link href="/medications" className="bg-slate-900 border border-slate-700 hover:border-sky-500 px-5 py-2 rounded-xl text-sm transition">
          العودة لقائمة الأدوية
        </Link>
      </main>
    );
  }

  return (
    <main dir="rtl" className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        
        {/* أزرار التنقل العلوي */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-800">
          <Link href="/medications" className="text-sm text-sky-400 hover:underline flex items-center gap-1">
            <span>→</span> العودة لقائمة الأدوية
          </Link>
          <span className="text-xs bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-slate-400">
            بروتوكول رسمي معتمد
          </span>
        </div>

        {/* اسم الدواء */}
        <h1 className="text-4xl font-extrabold mb-3 text-white">💊 {medication.name}</h1>
        
        {/* ℹ️ الجزء الجديد: عرض الوصف الطبي والاستخدام المضاف حديثاً */}
        {medication.description && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 mb-6 text-slate-300 text-sm leading-relaxed shadow-inner">
            <span className="text-sky-400 font-bold block mb-1 text-xs">💡 الاستخدام العلاجي والآلية:</span>
            {medication.description}
          </div>
        )}

        {/* ⚠️ قسم التحذير المهم */}
        {medication.warning && (
          <div className="rounded-2xl bg-red-950/40 border border-red-800 p-5 mb-6 shadow-sm">
            <h2 className="text-lg font-bold mb-2 text-red-400 flex items-center gap-2">
              <span>⚠️</span> تحذير وإرشادات السلامة
            </h2>
            <p className="text-slate-200 text-sm leading-relaxed">{medication.warning}</p>
          </div>
        )}

        {/* 📦 تفاصيل الجرعات والتحضير */}
        <div className="space-y-6">
          
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-lg font-bold mb-4 text-sky-400 border-b border-slate-800 pb-2">
              {medication.doubleDose ? "الجرعة العادية (Standard Dose)" : "طريقة التحضير والتخفيف"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-950 p-4 border border-slate-800/60">
                <p className="text-slate-500 text-xs mb-1">تفاصيل التحضير</p>
                <p className="text-xl font-bold text-white leading-normal">{medication.singleDose || medication.info}</p>
              </div>

              <div className="rounded-xl bg-slate-950 p-4 border border-slate-800/60">
                <p className="text-slate-500 text-xs mb-1">المذيب المسموح (Diluent)</p>
                <p className="text-xl font-bold text-emerald-400">{medication.diluent}</p>
              </div>
            </div>

            {medication.finalVolume && (
              <div className="mt-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 p-4 flex justify-between items-center">
                <span className="text-sm text-slate-300">الحجم النهائي في المحقنة/المحلول:</span>
                <span className="text-xl font-black text-emerald-400" dir="ltr">{medication.finalVolume}</span>
              </div>
            )}
          </div>

          {medication.doubleDose && (
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
              <h2 className="text-lg font-bold mb-4 text-amber-400 border-b border-slate-800 pb-2">
                الجرعة المضاعفة (Double Dose)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-950 p-4 border border-slate-800/60">
                  <p className="text-slate-500 text-xs mb-1">تفاصيل التحضير المضاعف</p>
                  <p className="text-xl font-bold text-white">{medication.doubleDose}</p>
                </div>

                <div className="rounded-xl bg-slate-950 p-4 border border-slate-800/60">
                  <p className="text-slate-500 text-xs mb-1">المذيب المسموح (Diluent)</p>
                  <p className="text-xl font-bold text-amber-400">{medication.diluent}</p>
                </div>
              </div>

              {medication.finalVolume && (
                <div className="mt-4 rounded-xl bg-amber-950/20 border border-amber-900/40 p-4 flex justify-between items-center">
                  <span className="text-sm text-slate-300">الحجم النهائي في المحقنة/المحلول:</span>
                  <span className="text-xl font-black text-amber-400" dir="ltr">{medication.finalVolume}</span>
                </div>
              )}
            </div>
          )}

          {medication.notes && (
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
              <h2 className="text-lg font-bold mb-3 text-slate-300">📌 ملاحظات تمريضية وجدول التسريب</h2>
              <ul className="space-y-2">
                {medication.notes.map((note: string, index: number) => (
                  <li key={index} className="bg-slate-950 rounded-xl p-4 border border-slate-800 text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {medication.slug === "aggrastat" && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 text-amber-400 flex items-center gap-2">
              <span>🧮</span> حاسبة معايرة الجرعة بناءً على الوزن
            </h2>
            <AggrastatCalculator />
          </div>
        )}

      </div>
    </main>
  );
}