import Link from "next/link";

const medications = [
  { name: "نورأدرينالين", info: "Single / Double Dose", href: "/medications/noradrenaline" },
  { name: "أدرينالين", info: "3 mg + 47 mL N/S", href: "#" },
  { name: "دوبامين", info: "Single / Double Dose", href: "#" },
  { name: "دوبيوتامين", info: "250 mg + 45 mL N/S", href: "#" },
  { name: "أغراستات", info: "25 mL + 100 mL N/S", href: "#" },
  { name: "أميودارون", info: "300 mg + 150 mL D5W", href: "#" },
  { name: "إنسولين", info: "50 Units + 50 mL N/S", href: "#" },
  { name: "هيبارين", info: "50 Units + 50 mL N/S", href: "#" },
  { name: "فازوبرسين", info: "جاهز للإضافة لاحقاً", href: "#" },
  { name: "نتروغليسرين", info: "جاهز للإضافة لاحقاً", href: "#" },
];

export default function MedicationsPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-2">الأدوية الوريدية</h1>

      <p className="text-slate-400 mb-8">
        اختر الدواء لعرض طريقة التحضير والتخفيف
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {medications.map((medication) => (
          <Link
            key={medication.name}
            href={medication.href}
            className="rounded-2xl bg-slate-800 p-5 border border-slate-700 hover:bg-slate-700 transition"
          >
            <h2 className="text-xl font-bold mb-2">💊 {medication.name}</h2>
            <p className="text-slate-300">{medication.info}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}