import AggrastatCalculator from "../../components/AggrastatCalculator";
import { medications } from "../../data/medications";

export default async function MedicationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const medication = medications.find(
    (item) => item.slug === slug
  );

  if (!medication) {
    return (
      <main className="min-h-screen bg-slate-900 text-white p-6">
        <h1 className="text-3xl font-bold">
          الدواء غير موجود
        </h1>
      </main>
    );
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-slate-900 text-white p-6"
    >
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">
          💊 {medication.name}
        </h1>

        <div className="bg-red-900 border border-red-500 rounded-xl p-4 mb-6">
          ⚠️ {medication.warning}
        </div>

        <div className="bg-slate-800 rounded-xl p-6 mb-6 space-y-4">

          <div>
            <p className="text-slate-400 mb-1">
              الجرعة / التحضير
            </p>
            <p className="text-2xl font-bold">
              {medication.singleDose || medication.info}
            </p>
          </div>

          {medication.doubleDose && (
            <div>
              <p className="text-slate-400 mb-1">
                الجرعة المضاعفة
              </p>
              <p className="text-2xl font-bold">
                {medication.doubleDose}
              </p>
            </div>
          )}

          <div>
            <p className="text-slate-400 mb-1">
              المذيب
            </p>
            <p className="text-xl">
              {medication.diluent}
            </p>
          </div>

          {medication.finalVolume && (
            <div>
              <p className="text-slate-400 mb-1">
                الحجم النهائي
              </p>
              <p className="text-xl font-bold">
                {medication.finalVolume}
              </p>
            </div>
          )}

          {medication.notes && (
            <div>
              <p className="text-slate-400 mb-2">
                ملاحظات
              </p>

              <ul className="space-y-2">
                {medication.notes.map((note: string) => (
                  <li
                    key={note}
                    className="bg-slate-900 rounded-lg p-3"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {medication.slug === "aggrastat" && (
          <AggrastatCalculator />
        )}

      </div>
    </main>
  );
}