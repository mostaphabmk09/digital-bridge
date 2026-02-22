"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ProjectType = {
  id: string;
  title: string;
  icon: string;
};

const types: ProjectType[] = [
  { id: "partenariat", title: "Partenariat", icon: "🤝" },
  { id: "immobilier", title: "Immobilier", icon: "🏡" },
  { id: "financement", title: "Financement", icon: "💰" },
  { id: "job", title: "Collaboration", icon: "💼" },
];

export default function CreateOpportunityPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col items-center justify-start px-6 pt-24 pb-16">

      {/* HEADER */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
          Choisissez le type de projet
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Sélectionnez la catégorie adaptée à votre publication.
        </p>
      </div>

      {/* CIRCLE WRAPPER */}
      <div className="relative w-[340px] h-[340px] flex items-center justify-center">

        {/* Smaller Center circle */}
        <div className="absolute w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-200">
          <img
            src="/logo.png"
            alt="Digital Bridge"
            className="w-7 h-7 object-contain"
          />
        </div>

        {/* Circular items */}
        {types.map((type, index) => {
          const angle = (index / types.length) * 2 * Math.PI;
          const radius = 130;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <button
              key={type.id}
              onClick={() => setSelected(type.id)}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              className={`absolute w-28 h-28 rounded-full flex flex-col items-center justify-center text-center transition-all duration-300 shadow-md
                ${
                  selected === type.id
                    ? "scale-110 ring-4 ring-indigo-400 bg-white"
                    : "bg-white hover:scale-105"
                }
              `}
            >
              <span className="text-3xl">{type.icon}</span>
              <span className="text-xs mt-2 font-medium text-slate-700">
                {type.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* CONTINUE BUTTON */}
      <div className="mt-12">
        <button
          disabled={!selected}
          onClick={() => router.push(`/create/${selected}`)}
          className="px-8 py-3 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continuer →
        </button>
      </div>
    </div>
  );
}