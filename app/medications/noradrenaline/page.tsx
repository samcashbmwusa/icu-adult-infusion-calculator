export default function NoradrenalinePage() {
  return (
    <main dir="rtl" className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-2">💊 نورأدرينالين</h1>
      <p className="text-slate-400 mb-6">طريقة التحضير والتخفيف</p>

      <div className="max-w-2xl space-y-5">
        <div className="rounded-2xl bg-red-900/40 border border-red-700 p-5">
          <h2 className="text-xl font-bold mb-3">⚠️ تحذير مهم</h2>
          <p>لا يعطى هذا الدواء بشكل دفع مباشر.</p>
          <p className="mt-2">يعطى بواسطة مضخة تسريب وريدي فقط.</p>
        </div>

        <div className="rounded-2xl bg-slate-800 border border-slate-700 p-5">
          <h2 className="text-xl font-bold mb-4">الجرعة العادية</h2>

          <div className="rounded-xl bg-slate-900 p-4 mb-3">
            <p className="text-slate-400 mb-1">كمية الدواء</p>
            <p className="text-2xl font-bold" dir="ltr">3 mg</p>
          </div>

          <div className="rounded-xl bg-slate-900 p-4 mb-3">
            <p className="text-slate-400 mb-1">كمية المذيب</p>
            <p className="text-2xl font-bold" dir="ltr">47 mL</p>
          </div>

          <div className="rounded-xl bg-slate-900 p-4 mb-3">
            <p className="text-slate-400 mb-1">المذيب المسموح</p>
            <p className="text-xl" dir="ltr">N/S 0.9% أو D5W</p>
          </div>

          <div className="rounded-xl bg-green-900/30 border border-green-700 p-4">
            <p className="text-slate-300 mb-1">الحجم النهائي</p>
            <p className="text-2xl font-bold" dir="ltr">50 mL</p>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-800 border border-slate-700 p-5">
          <h2 className="text-xl font-bold mb-4">الجرعة المضاعفة</h2>

          <div className="rounded-xl bg-slate-900 p-4 mb-3">
            <p className="text-slate-400 mb-1">كمية الدواء</p>
            <p className="text-2xl font-bold" dir="ltr">6 mg</p>
          </div>

          <div className="rounded-xl bg-slate-900 p-4 mb-3">
            <p className="text-slate-400 mb-1">كمية المذيب</p>
            <p className="text-2xl font-bold" dir="ltr">44 mL</p>
          </div>

          <div className="rounded-xl bg-slate-900 p-4 mb-3">
            <p className="text-slate-400 mb-1">المذيب المسموح</p>
            <p className="text-xl" dir="ltr">N/S 0.9% أو D5W</p>
          </div>

          <div className="rounded-xl bg-green-900/30 border border-green-700 p-4">
            <p className="text-slate-300 mb-1">الحجم النهائي</p>
            <p className="text-2xl font-bold" dir="ltr">50 mL</p>
          </div>
        </div>
      </div>
    </main>
  );
}