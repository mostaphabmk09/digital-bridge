"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";


type Opportunity = {
  id: number;
  title: string;
  description: string;
  type: "Job" | "Partenariat" | "Financement" | "Conseils";
  domaine: string;
  budget?: string;
  location: string;
  author: string;
  date: string;
};

const mockData: Opportunity[] = [
  {
    id: 1,
    title: "Cherche partenaire pour restaurant healthy",
    description:
      "Projet déjà lancé, besoin d’un associé pour développer la marque et ouvrir un deuxième local.",
    type: "Partenariat",
    domaine: "Restauration",
    budget: "50k - 100k MAD",
    location: "Casablanca",
    author: "Yassine",
    date: "Il y a 2 jours",
  },
  {
    id: 2,
    title: "Développeur React pour startup SaaS",
    description:
      "On cherche un développeur frontend pour rejoindre notre projet tech.",
    type: "Job",
    domaine: "IT",
    location: "Remote",
    author: "Salma",
    date: "Il y a 5 jours",
  },
  {
    id: 3,
    title: "Investisseur pour projet immobilier Airbnb",
    description:
      "Opportunité d’achat d’un appartement à Marrakech.",
    type: "Financement",
    domaine: "Immobilier",
    budget: "200k MAD",
    location: "Marrakech",
    author: "Mehdi",
    date: "Il y a 1 semaine",
  },
  {
    id: 4,
    title: "Co-fondateur pour plateforme e-commerce",
    description:
      "Recherche partenaire technique pour lancer marketplace niche.",
    type: "Partenariat",
    domaine: "E-commerce",
    budget: "70k MAD",
    location: "Tanger",
    author: "Amine",
    date: "Il y a 1 jour",
  },
  {
    id: 5,
    title: "Consultant UX pour refonte app mobile",
    description:
      "Startup en croissance cherche expert UX/UI freelance.",
    type: "Conseils",
    domaine: "Design",
    location: "Casablanca",
    author: "Lina",
    date: "Il y a 3 jours",
  },
  {
    id: 6,
    title: "Community manager pour projet crypto",
    description:
      "Besoin d’un CM pour gérer communauté Web3.",
    type: "Job",
    domaine: "Web3",
    location: "Remote",
    author: "Nadia",
    date: "Il y a 6 jours",
  },
];

const filters = [
  { label: "Tous", icon: "🌍" },
  { label: "Job", icon: "💼" },
  { label: "Partenariat", icon: "🤝" },
  { label: "Financement", icon: "💰" },
  { label: "Conseils", icon: "🧠" },
];

export default function OpportunitiesPage() {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("Tous");
  const [favorites, setFavorites] = useState<number[]>([]);
  const { user } = useAuth();
  const router = useRouter();

  const filtered = mockData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      activeType === "Tous" || item.type === activeType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-slate-900">
            Opportunités
          </h1>
          <p className="text-slate-600 mt-3">
            Trouvez la bonne collaboration pour développer votre projet.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Rechercher une opportunité..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-slate-300 pl-12 pr-5 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </span>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.label}
              onClick={() => setActiveType(filter.label)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition ${
                activeType === filter.label
                  ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg"
                  : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-slate-200 p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
            >
              <div>

                {/* Top */}
                <div className="flex items-center justify-between mb-4">

  <div className="flex items-center gap-3">
    <span className="px-3 py-1 text-xs font-bold rounded-full bg-indigo-100 text-indigo-700">
      {item.type}
    </span>

    <span className="text-xs text-slate-400">
      {item.date}
    </span>
  </div>

  {/* Favorite */}
  <button
    onClick={() => {
      if (!user) {
        router.push("/login");
        return;
      }

      setFavorites((prev) =>
        prev.includes(item.id)
          ? prev.filter((id) => id !== item.id)
          : [...prev, item.id]
      );
    }}
    className="text-base opacity-70 hover:opacity-100 transition transform hover:scale-110"
  >
    {favorites.includes(item.id) ? "❤️" : "🤍"}
  </button>
</div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition">
                  {item.title}
                </h2>

                <p className="text-sm text-slate-600 mt-3 line-clamp-3">
                  {item.description}
                </p>

                {/* Meta inline */}
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full text-slate-600">
                    📍 {item.location}
                  </span>

                  <span className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full text-slate-600">
                    🏷 {item.domaine}
                  </span>

                  {item.budget && (
                    <span className="flex items-center gap-1 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                      💰 {item.budget}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">
                    {item.author.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {item.author}
                  </span>
                </div>

                <Link href={`/opportunities/${item.id}`} className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-indigo-600 transition">
  Voir détail
</Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center text-slate-500 mt-12">
            Aucune opportunité trouvée.
          </div>
        )}
      </div>
    </div>
  );
}