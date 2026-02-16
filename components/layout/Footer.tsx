export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* BRAND */}
          <div>
            <h3 className="text-lg font-black text-slate-900">
              Digital Bridge
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Plateforme de collaboration pour trouver des partenaires,
              investisseurs et opportunités réelles.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Navigation</h4>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Opportunités
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Immobilier
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Expériences
                </a>
              </li>
            </ul>
          </div>

          {/* RESSOURCES */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Ressources</h4>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>

            <p className="mt-4 text-sm text-slate-600">
              contact@digitalbridge.ma
            </p>

            <div className="mt-4 flex gap-3">
              {["🌐", "📱", "✉️"].map((icon, i) => (
                <div
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Digital Bridge — Tous droits réservés.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-600 transition">
              Conditions
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
