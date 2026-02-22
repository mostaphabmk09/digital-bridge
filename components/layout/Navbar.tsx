"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Opportunités", href: "/opportunites" },
    { label: "Immobilier", href: "/immobilier" },
    { label: "Expériences", href: "/experiences" },
  ];

  const handleLogout = async () => {
    await logout();
    setDropdown(false);
    router.push("/");
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    }

    if (dropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
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
        </Link>

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

        {/* Right Side */}
        <div className="flex items-center gap-3 relative">

          {/* ===== Publier (Desktop Always Visible) ===== */}
          <div className="hidden md:block">
            <Link href="/publish">
              <button
               className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition cursor-pointer">
                Publier
              </button>
            </Link>
          </div>

          {/* ===== NOT CONNECTED ===== */}
          {!user && (
            <Link href="/login">
              <button className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15 transition cursor-pointer">
                Connexion
              </button>
            </Link>
          )}

          {/* ===== CONNECTED ===== */}
          {user && (
            <>
              {/* Avatar */}
              <button
                onClick={() => setDropdown(!dropdown)}
                className="w-10 h-10 rounded-full bg-white text-indigo-700 font-bold flex items-center justify-center cursor-pointer hover:scale-105 transition"
              >
                {user.email.charAt(0).toUpperCase()}
              </button>

              {dropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 top-16 w-64 bg-white border border-slate-200 rounded-3xl shadow-2xl p-5 space-y-4"
                >
                  <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-slate-200 rotate-45"></div>

                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                      {user.email.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm truncate max-w-[140px]">
                        {user.email}
                      </p>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">
                        {user.role}
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-slate-200" />

                  <Link
                    href="/profile"
                    onClick={() => setDropdown(false)}
                    className="flex w-full items-center gap-3 px-3 py-2 rounded-xl hover:bg-indigo-100 transition text-sm text-slate-700 cursor-pointer"
                  >
                    👤 Mon profil
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 px-3 py-2 rounded-xl hover:bg-red-100 transition text-sm text-red-600 font-medium cursor-pointer"
                  >
                    🚪 Déconnexion
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}