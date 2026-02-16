"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Opportunités", href: "#" },
    { label: "Immobilier", href: "#" },
    { label: "Expériences", href: "#" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Digital Bridge"
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="font-black">Digital Bridge</p>
              <p className="text-xs text-white/70 hidden sm:block">
                Trouvez un partenaire
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white/15 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <button className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15 transition">
                Connexion
              </button>
            </Link>
            <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition">
              Publier
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden h-11 w-11 flex items-center justify-center rounded-xl bg-white/10 border border-white/20"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-indigo-950 text-white">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl hover:bg-white/10 transition"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button className="rounded-xl bg-white text-indigo-700 py-2 font-semibold">
                Connexion
              </button>
              <button className="rounded-xl bg-indigo-600 py-2 font-semibold">
                Publier
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
