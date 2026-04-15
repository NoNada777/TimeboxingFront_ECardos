import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
    
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ fontFamily: "'Georgia', serif" }}>
      <div className="absolute inset-0 bg-[#0f1721]" />
      <div className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, #1e3046 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 50% 85%, #2b4162 0%, transparent 45%), radial-gradient(ellipse 100% 100% at 50% 100%, #0a1118 20%, #0f1721 80%)",
        }}
      />

      {/* Partículas vintage */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              backgroundColor: "#f4ebd0",
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `drift ${6 + Math.random() * 8}s linear ${Math.random() * 5}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Brillo central vintage */}
      <div
        className="absolute bottom-[80%] left-1/2 w-28 h-28 rounded-full pointer-events-none"
        style={{
            bottom: "30%",
            transform: "translateX(-50%)",
            background: "radial-gradient(circle, #8fa8c8 0%, #4a6fa5 40%, transparent 75%)",
            filter: "blur(18px)",
            opacity: 0.5,
            animation: "pulse 3s ease-in-out infinite",
        }}
        />

      {/* ── Card ── */}
      <div
        className="relative z-10 w-full max-w-sm mx-4 rounded-2xl p-8"
        style={{
          background: "rgba(15, 23, 33, 0.75)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(74, 111, 165, 0.25)",
          boxShadow: "0 0 40px rgba(74, 111, 165, 0.15), 0 8px 32px rgba(0,0,0,0.6)",
          animation: "fadeUp 0.7s ease both",
        }}
      >

        {/* Título */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-wide" style={{ color: "#f4ebd0", letterSpacing: "0.08em" }}>
            Daily Timeboxing
          </h1>
          <p className="text-sm mt-1 italic" style={{ color: "rgba(244, 235, 208, 0.6)" }}>
            Inicia sesión para continuar
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Correo o nombre */}
          <div>
            <label className="block text-xs font-semibold mb-1.5 tracking-widest uppercase"
              style={{ color: "rgba(244, 235, 208, 0.7)" }}>
              Correo o usuario
            </label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="tu@correo.com"
              required
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
              style={{
                background: "rgba(244, 235, 208, 0.05)",
                border: "1px solid rgba(74, 111, 165, 0.3)",
                color: "#f4ebd0",
                caretColor: "#4a6fa5",
              }}
              onFocus={e => e.target.style.border = "1px solid rgba(74, 111, 165, 0.8)"}
              onBlur={e => e.target.style.border = "1px solid rgba(74, 111, 165, 0.3)"}
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-xs font-semibold mb-1.5 tracking-widest uppercase"
              style={{ color: "rgba(244, 235, 208, 0.7)" }}>
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
              style={{
                background: "rgba(244, 235, 208, 0.05)",
                border: "1px solid rgba(74, 111, 165, 0.3)",
                color: "#f4ebd0",
                caretColor: "#4a6fa5",
              }}
              onFocus={e => e.target.style.border = "1px solid rgba(74, 111, 165, 0.8)"}
              onBlur={e => e.target.style.border = "1px solid rgba(74, 111, 165, 0.3)"}
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-sm tracking-widest uppercase transition-all duration-200 active:scale-95 mt-2"
            style={{
              background: "linear-gradient(135deg, #4a6fa5, #2b4162)",
              color: "#f4ebd0",
              boxShadow: "0 0 20px rgba(74, 111, 165, 0.3)",
              letterSpacing: "0.12em",
            }}
            onMouseEnter={e => e.target.style.boxShadow = "0 0 32px rgba(74, 111, 165, 0.5)"}
            onMouseLeave={e => e.target.style.boxShadow = "0 0 20px rgba(74, 111, 165, 0.3)"}
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-xs mt-6 italic" style={{ color: "rgba(244, 235, 208, 0.4)" }}>
          ¿Sin cuenta? Habla con tu profesor
        </p>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: translateX(-50%) scale(1); }
          50%       { opacity: 0.7; transform: translateX(-50%) scale(1.15); }
        }
        @keyframes drift {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          10%  { opacity: 0.4; }
          90%  { opacity: 0.2; }
          100% { transform: translateY(100vh) translateX(20px); opacity: 0; }
        }
        input::placeholder { color: rgba(244, 235, 208, 0.3); }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0px 1000px rgba(15, 23, 33, 0.9) inset !important;
            -webkit-text-fill-color: #f4ebd0 !important;
            caret-color: #4a6fa5 !important;
            }
      `}</style>
    </div>
  );
}