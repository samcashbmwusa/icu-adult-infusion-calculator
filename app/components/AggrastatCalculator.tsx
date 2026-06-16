"use client";

import { useState } from "react";

const doseTable = [
  { min: 30, max: 37, mostLoading: 16, mostMaintenance: 4, renalLoading: 8, renalMaintenance: 2 },
  { min: 38, max: 45, mostLoading: 20, mostMaintenance: 5, renalLoading: 10, renalMaintenance: 3 },
  { min: 46, max: 54, mostLoading: 24, mostMaintenance: 6, renalLoading: 12, renalMaintenance: 3 },
  { min: 55, max: 62, mostLoading: 28, mostMaintenance: 7, renalLoading: 14, renalMaintenance: 4 },
  { min: 63, max: 70, mostLoading: 32, mostMaintenance: 8, renalLoading: 16, renalMaintenance: 4 },
  { min: 71, max: 79, mostLoading: 36, mostMaintenance: 9, renalLoading: 18, renalMaintenance: 5 },
  { min: 80, max: 87, mostLoading: 40, mostMaintenance: 10, renalLoading: 20, renalMaintenance: 5 },
  { min: 88, max: 95, mostLoading: 44, mostMaintenance: 11, renalLoading: 22, renalMaintenance: 6 },
  { min: 96, max: 104, mostLoading: 48, mostMaintenance: 12, renalLoading: 24, renalMaintenance: 6 },
  { min: 105, max: 112, mostLoading: 52, mostMaintenance: 13, renalLoading: 26, renalMaintenance: 7 },
  { min: 113, max: 120, mostLoading: 56, mostMaintenance: 14, renalLoading: 28, renalMaintenance: 7 },
  { min: 121, max: 128, mostLoading: 60, mostMaintenance: 15, renalLoading: 30, renalMaintenance: 8 },
  { min: 129, max: 137, mostLoading: 64, mostMaintenance: 16, renalLoading: 32, renalMaintenance: 8 },
  { min: 138, max: 145, mostLoading: 68, mostMaintenance: 17, renalLoading: 34, renalMaintenance: 9 },
  { min: 146, max: 153, mostLoading: 72, mostMaintenance: 18, renalLoading: 36, renalMaintenance: 9 },
];

export default function AggrastatCalculator() {
  const [weight, setWeight] = useState("");
  const [patientType, setPatientType] = useState("normal");

  const weightNumber = Number(weight);

  const dose = doseTable.find(
    (row) => weightNumber >= row.min && weightNumber <= row.max
  );

  const loadingRate =
    dose && patientType === "normal"
      ? dose.mostLoading
      : dose
      ? dose.renalLoading
      : null;

  const maintenanceRate =
    dose && patientType === "normal"
      ? dose.mostMaintenance
      : dose
      ? dose.renalMaintenance
      : null;

  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6">حاسبة أغراستات</h2>

      <div className="mb-4">
        <label className="block mb-2">وزن المريض (كغ)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3"
          placeholder="أدخل الوزن"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-3">نوع المريض</label>

        <div className="space-y-2">
          <label className="flex gap-2">
            <input
              type="radio"
              checked={patientType === "normal"}
              onChange={() => setPatientType("normal")}
            />
            مريض عادي
          </label>

          <label className="flex gap-2">
            <input
              type="radio"
              checked={patientType === "renal"}
              onChange={() => setPatientType("renal")}
            />
            فشل كلوي شديد
          </label>
        </div>
      </div>

      {weight && !dose && (
        <div className="bg-yellow-900/40 border border-yellow-600 rounded-lg p-4">
          الوزن خارج الجدول المتوفر. الجدول يدعم من 30 إلى 153 كغ.
        </div>
      )}

      {dose && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-900/40 border border-green-600 rounded-xl p-5">
            <p className="text-slate-300 mb-2">جرعة البداية لمدة 30 دقيقة</p>
            <p className="text-3xl font-bold">{loadingRate} مل/ساعة</p>
          </div>

          <div className="bg-blue-900/40 border border-blue-600 rounded-xl p-5">
            <p className="text-slate-300 mb-2">جرعة الاستمرار</p>
            <p className="text-3xl font-bold">{maintenanceRate} مل/ساعة</p>
          </div>
        </div>
      )}
    </div>
  );
}