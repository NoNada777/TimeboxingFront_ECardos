import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const HOURS = [5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11];

export default function Planner() {
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString("es-MX", {
    day: "2-digit", month: "2-digit", year: "numeric",
  });

  const [priorities, setPriorities] = useState(["", "", ""]);
  const [brainDump, setBrainDump] = useState("");
  const [timeboxes, setTimeboxes] = useState(
    HOURS.reduce((acc, _, i) => {
      acc[i] = { zero: "", thirty: "" };
      return acc;
    }, {})
  );

  const updatePriority = (i, val) => {
    const updated = [...priorities];
    updated[i] = val;
    setPriorities(updated);
  };

  const updateTimebox = (i, col, val) => {
    setTimeboxes((prev) => ({
      ...prev,
      [i]: { ...prev[i], [col]: val },
    }));
  };

  return (
    <div
      className="flex min-h-screen"
      style={{ fontFamily: "'Georgia', serif", background: "#0f1721" }}
    >
      {/* Fondo Vintage */}
      <div className="fixed inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 50% at 50% 100%, #1e3046 0%, transparent 60%)",
      }} />

      <Sidebar active="Planificador" />

      <main className="relative z-10 flex-1 px-6 py-8 overflow-y-auto">

        {/* Título + fecha */}
        <div className="flex items-end justify-between mb-6" style={{ animation: "fadeUp 0.5s ease both" }}>
          <div>
            <h1 className="text-4xl font-bold leading-none tracking-wide" style={{ color: "#f4ebd0" }}>
              Daily Timeboxing
            </h1>
            <h2 className="text-3xl font-normal italic leading-none mt-2" style={{ color: "rgba(244, 235, 208, 0.7)" }}>
              Planner
            </h2>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(244, 235, 208, 0.5)" }}>
              Fecha
            </p>
            <p className="text-base font-bold" style={{ color: "#8fa8c8" }}>
              {today}
            </p>
          </div>
        </div>

        {/* Body: dos columnas */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(15, 23, 33, 0.7)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(74, 111, 165, 0.2)",
            animation: "fadeUp 0.5s ease 0.1s both",
          }}
        >
          <div className="flex">

            {/* Columna izquierda */}
            <div
              className="w-[42%] p-6 flex flex-col gap-6"
              style={{ borderRight: "1px solid rgba(74, 111, 165, 0.2)" }}
            >
              {/* Top Priorities */}
              <div>
                <h3 className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: "rgba(244, 235, 208, 0.6)" }}>
                  Top Priorities
                </h3>
                <div className="flex flex-col gap-2">
                  {priorities.map((p, i) => (
                    <input
                      key={i}
                      value={p}
                      onChange={(e) => updatePriority(i, e.target.value)}
                      placeholder={`Prioridad ${i + 1}`}
                      className="w-full px-3 py-2.5 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: "rgba(244, 235, 208, 0.05)",
                        border: "1px solid rgba(74, 111, 165, 0.3)",
                        color: "#f4ebd0",
                        caretColor: "#4a6fa5",
                      }}
                      onFocus={e => e.target.style.border = "1px solid rgba(74, 111, 165, 0.7)"}
                      onBlur={e => e.target.style.border = "1px solid rgba(74, 111, 165, 0.3)"}
                    />
                  ))}
                </div>
              </div>

              {/* Brain Dump */}
              <div className="flex-1">
                <h3 className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: "rgba(244, 235, 208, 0.6)" }}>
                  Brain Dump
                </h3>
                <textarea
                  value={brainDump}
                  onChange={(e) => setBrainDump(e.target.value)}
                  placeholder="Escribe todo lo que tengas en mente..."
                  className="w-full h-64 px-3 py-3 rounded-xl text-sm outline-none resize-none transition-all leading-7"
                  style={{
                    background: "rgba(244, 235, 208, 0.03)",
                    border: "1px solid rgba(74, 111, 165, 0.3)",
                    color: "#f4ebd0",
                    caretColor: "#4a6fa5",
                    backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, rgba(74, 111, 165, 0.15) 27px, rgba(74, 111, 165, 0.15) 28px)",
                  }}
                  onFocus={e => e.target.style.border = "1px solid rgba(74, 111, 165, 0.7)"}
                  onBlur={e => e.target.style.border = "1px solid rgba(74, 111, 165, 0.3)"}
                />
              </div>
            </div>

            {/* Columna derecha — Timebox grid */}
            <div className="flex-1 flex flex-col">

              {/* Header de columnas */}
              <div
                className="grid grid-cols-[48px_1fr_1fr] text-xs font-bold uppercase tracking-widest"
                style={{
                  borderBottom: "1px solid rgba(74, 111, 165, 0.25)",
                  color: "rgba(244, 235, 208, 0.5)",
                }}
              >
                <div className="py-3" style={{ borderRight: "1px solid rgba(74, 111, 165, 0.2)" }} />
                <div className="py-3 text-center" style={{ borderRight: "1px solid rgba(74, 111, 165, 0.2)" }}>:00</div>
                <div className="py-3 text-center">:30</div>
              </div>

              {/* Filas de horas */}
              <div className="overflow-y-auto" style={{ maxHeight: "480px" }}>
                {HOURS.map((hour, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[48px_1fr_1fr] transition-colors"
                    style={{ borderBottom: "1px solid rgba(244, 235, 208, 0.05)" }}
                    onMouseEnter={e => e.currentTarget.style.background = "rgba(74, 111, 165, 0.1)"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    <div
                      className="flex items-center justify-center py-2"
                      style={{
                        borderRight: "1px solid rgba(74, 111, 165, 0.2)",
                        color: "#8fa8c8",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      {hour}
                    </div>
                    <div style={{ borderRight: "1px solid rgba(244, 235, 208, 0.05)" }}>
                      <input
                        value={timeboxes[i]?.zero || ""}
                        onChange={(e) => updateTimebox(i, "zero", e.target.value)}
                        className="w-full h-full px-3 py-2 text-sm outline-none bg-transparent"
                        style={{ color: "#f4ebd0", caretColor: "#4a6fa5" }}
                      />
                    </div>
                    <div>
                      <input
                        value={timeboxes[i]?.thirty || ""}
                        onChange={(e) => updateTimebox(i, "thirty", e.target.value)}
                        className="w-full h-full px-3 py-2 text-sm outline-none bg-transparent"
                        style={{ color: "#f4ebd0", caretColor: "#4a6fa5" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Botón guardar */}
        <div className="flex justify-end mt-4" style={{ animation: "fadeUp 0.5s ease 0.2s both" }}>
          <button
            onClick={() => { alert("Plan guardado (demo)"); navigate("/dashboard"); }}
            className="px-8 py-3 rounded-xl font-bold text-sm tracking-wide transition-all active:scale-95"
            style={{
              background: "linear-gradient(135deg, #4a6fa5, #2b4162)",
              color: "#f4ebd0",
              boxShadow: "0 0 20px rgba(74, 111, 165, 0.25)",
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 32px rgba(74, 111, 165, 0.45)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(74, 111, 165, 0.25)"}
          >
            Guardar plan del día
          </button>
        </div>
      </main>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(244, 235, 208, 0.3);
          font-style: italic;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px rgba(15, 23, 33, 0.95) inset !important;
          -webkit-text-fill-color: #f4ebd0 !important;
          caret-color: #4a6fa5 !important;
        }
      `}</style>
    </div>
  );
}