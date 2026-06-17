"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [license, setLicense] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (
      username === "admin" &&
      password === "ICU2026" &&
      license === "JUH-001"
    ) {
      document.cookie = "icu_auth=true; path=/; max-age=86400";
      router.push("/dashboard");
    } else {
      setError("بيانات الدخول غير صحيحة");
    }
  }

  return (
    <main dir="rtl" className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-4">
      <div className="w-full max-w-md rounded-2xl bg-slate-800 p-8 shadow-2xl border border-slate-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3">نظام حساب الجرعات الوريدية</h1>
          <p className="text-slate-300 text-sm">أداة سريرية خاصة للعناية الحثيثة</p>
          <p className="text-slate-400 text-sm mt-2">تطوير: Suliman Bilal Awad, R.N</p>
          <p className="text-slate-400 text-sm">Jordan University Hospital</p>
        </div>

        <div className="space-y-5">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="اسم المستخدم"
            className="w-full rounded-lg bg-slate-900 border border-slate-600 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="كلمة المرور"
            className="w-full rounded-lg bg-slate-900 border border-slate-600 px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
            placeholder="رمز الترخيص"
            className="w-full rounded-lg bg-slate-900 border border-slate-600 px-4 py-3 outline-none focus:border-blue-500"
          />

          {error && (
            <p className="rounded-lg bg-red-900/50 border border-red-600 p-3 text-sm">
              {error}
            </p>
          )}

          <button
            type="button"
            onClick={handleLogin}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold hover:bg-blue-700"
          >
            تسجيل الدخول
          </button>
        </div>
      </div>
    </main>
  );
}