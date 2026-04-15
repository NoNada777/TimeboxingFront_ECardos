import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Inicio", action: "dashboard" },
  { label: "Planificador", action: "planner" },
  { label: "Ajustes", action: null },
];

export default function Sidebar({ active }) {
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString("es-MX", {
    weekday: "long", day: "numeric", month: "long",
  });

  return (
    <aside
      className="relative z-10 flex flex-col w-56 min-h-screen py-8 px-4"
      style={{
        background: "rgba(10, 15, 22, 0.85)",
        backdropFilter: "blur(12px)",
        borderRight: "1px solid rgba(74, 111, 165, 0.15)",
        fontFamily: "'Georgia', serif"
      }}
    >
      <div className="mb-10 px-2">
        <p className="font-bold text-base tracking-wide" style={{ color: "#f4ebd0" }}>
          Daily Timeboxing
        </p>
        <p className="text-xs mt-1 capitalize italic" style={{ color: "rgba(244, 235, 208, 0.45)" }}>
          {today}
        </p>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              if (item.action) navigate("/" + item.action);
            }}
            className="flex items-center px-3 py-2.5 rounded-xl text-sm transition-all duration-200 text-left tracking-wide"
            style={{
              background: active === item.label ? "rgba(74, 111, 165, 0.2)" : "transparent",
              color: active === item.label ? "#8fa8c8" : "rgba(244, 235, 208, 0.6)",
              borderLeft: active === item.label ? "2px solid #4a6fa5" : "2px solid transparent",
              fontWeight: active === item.label ? "bold" : "normal"
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t" style={{ borderColor: "rgba(74, 111, 165, 0.2)" }}>
        <div className="flex items-center gap-3 px-2 mb-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #4a6fa5, #2b4162)", color: "#f4ebd0" }}
          >
            U
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold truncate" style={{ color: "#f4ebd0" }}>Estudiante</p>
            <p className="text-xs truncate italic" style={{ color: "rgba(244, 235, 208, 0.45)" }}>usuario@utc.edu.mx</p>
          </div>
        </div>
        <button
          onClick={() => navigate("/")}
          className="w-full text-xs py-2 rounded-xl font-semibold transition-all tracking-wide"
          style={{ background: "rgba(74, 111, 165, 0.1)", color: "rgba(143, 168, 200, 0.9)" }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(74, 111, 165, 0.25)"}
          onMouseLeave={e => e.currentTarget.style.background = "rgba(74, 111, 165, 0.1)"}
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}