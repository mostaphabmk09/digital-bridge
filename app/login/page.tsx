"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center bg-slate-50 px-6 pt-24 pb-16">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-2xl font-black text-slate-900">Connexion</h1>
            <p className="mt-2 text-sm text-slate-500">
              Connectez-vous à votre compte Digital Bridge
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="exemple@email.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="••••••••"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white hover:bg-indigo-700 transition"
            >
              Se connecter
            </button>
          </form>

          {/* Footer links */}
          <div className="mt-6 text-center text-sm text-slate-600">
            Pas encore de compte ?{" "}
            <Link
              href="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Créer un compte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
