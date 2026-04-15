import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const stats = [
  { label: "Racha actual", value: "5", unit: "días" },
  { label: "Planes completados", value: "12", unit: "total" },
  { label: "Esta semana", value: "4", unit: "días activos" },
];

const history = [
  {
    date: "Hoy",
    priorities: ["Entregar proyecto React", "Estudiar Tailwind", "Revisar apuntes"],
    done: 1,
  },
  {
    date: "Ayer",
    priorities: ["Leer capítulo 5", "Ejercicio 30 min", "Llamar a casa"],
    done: 3,
  },
  {
    date: "Lun 24",
    priorities: ["Entregar tarea", "Estudiar algoritmos"],
    done: 2,
  },
  {
    date: "Dom 23",
    priorities: ["Descanso activo", "Planificar semana"],
    done: 1,
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div
      className="flex min-h-screen"
      style={{ fontFamily: "'Georgia', serif", background: "#0f1721" }}
    >

      <div className="fixed inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 50% at 50% 100%, #1e3046 0%, transparent 60%)",
      }} />

      <Sidebar active="Inicio" />

      <main className="relative z-10 flex-1 p-8 overflow-y-auto">

        <div className="flex items-start justify-between mb-8" style={{ animation: "fadeUp 0.5s ease both" }}>
          <div>
            <h1 className="text-3xl font-bold tracking-wide" style={{ color: "#f4ebd0" }}>
              Bienvenido de vuelta
            </h1>
            <p className="text-sm mt-1 italic" style={{ color: "rgba(244, 235, 208, 0.5)" }}>
              ¿Qué vas a lograr hoy?
            </p>
          </div>
          <button
            onClick={() => navigate("/planner")}
            className="px-5 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 tracking-wide"
            style={{
              background: "linear-gradient(135deg, #4a6fa5, #2b4162)",
              color: "#f4ebd0",
              boxShadow: "0 0 20px rgba(74, 111, 165, 0.25)",
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 32px rgba(74, 111, 165, 0.45)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(74, 111, 165, 0.25)"}
          >
            + Nuevo plan
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8" style={{ animation: "fadeUp 0.5s ease 0.1s both" }}>
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-5"
              style={{
                background: "rgba(15, 23, 33, 0.6)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(74, 111, 165, 0.2)",
              }}
            >
              <div className="text-3xl font-bold" style={{ color: "#8fa8c8" }}>
                {s.value}
                <span className="text-sm italic ml-2" style={{ color: "rgba(244, 235, 208, 0.45)" }}>
                  {s.unit}
                </span>
              </div>
              <div className="text-xs mt-1 tracking-widest uppercase" style={{ color: "rgba(244, 235, 208, 0.6)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>


        <div
          className="rounded-2xl p-6 mb-8 flex items-center justify-between"
          style={{
            background: "rgba(74, 111, 165, 0.1)",
            border: "1px solid rgba(74, 111, 165, 0.3)",
            animation: "fadeUp 0.5s ease 0.2s both",
          }}
        >
          <div>
            <h2 className="text-lg font-bold mb-1 tracking-wide" style={{ color: "#f4ebd0" }}>
              Planificador de hoy
            </h2>
            <p className="text-sm italic" style={{ color: "rgba(244, 235, 208, 0.5)" }}>
              Define tus bloques de tiempo y prioridades del día
            </p>
          </div>
          <button
            onClick={() => navigate("/planner")}
            className="px-6 py-3 rounded-xl font-bold text-sm transition-all active:scale-95 whitespace-nowrap ml-4 tracking-wide"
            style={{
              background: "rgba(74, 111, 165, 0.2)",
              color: "#8fa8c8",
              border: "1px solid rgba(74, 111, 165, 0.4)",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(74, 111, 165, 0.35)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(74, 111, 165, 0.2)"}
          >
            Abrir planificador
          </button>
        </div>

        <div style={{ animation: "fadeUp 0.5s ease 0.3s both" }}>
          <h2 className="text-base font-bold mb-4 tracking-wide" style={{ color: "#f4ebd0" }}>
            Planes recientes
          </h2>
          <div className="flex flex-col gap-3">
            {history.map((plan) => (
              <div
                key={plan.date}
                className="rounded-2xl p-4 flex items-center gap-4"
                style={{
                  background: "rgba(15, 23, 33, 0.55)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(74, 111, 165, 0.15)",
                }}
              >
                <div
                  className="text-xs font-bold px-3 py-1.5 rounded-lg min-w-[52px] text-center uppercase tracking-wider"
                  style={{ background: "rgba(74, 111, 165, 0.2)", color: "#8fa8c8" }}
                >
                  {plan.date}
                </div>

                <div className="flex flex-wrap gap-2 flex-1">
                  {plan.priorities.map((p, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: i < plan.done ? "rgba(74, 111, 165, 0.15)" : "rgba(244, 235, 208, 0.05)",
                        color: i < plan.done ? "#8fa8c8" : "rgba(244, 235, 208, 0.5)",
                        textDecoration: i < plan.done ? "line-through" : "none",
                        border: "1px solid rgba(74, 111, 165, 0.2)",
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <div className="text-sm font-bold ml-2 whitespace-nowrap" style={{ color: "rgba(244, 235, 208, 0.4)" }}>
                  {plan.done}/{plan.priorities.length}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}