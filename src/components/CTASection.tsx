import React from 'react';
import { ExternalLink, Github, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Acceso Inmediato en la Nube</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white text-balance">
              Lleva tu negocio al siguiente nivel con ComercioPro
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto text-balance leading-relaxed">
              Prueba la plataforma operativa directamente desde tu navegador o explora el repositorio de código abierto en GitHub.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://comerciopro-app.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/25 transition-all hover:translate-y-[-1px] active:translate-y-[0px] whitespace-nowrap"
              >
                <span>Abrir Aplicación (comerciopro-app.web.app)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/omanvasquez/comerciopro-web"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors whitespace-nowrap"
              >
                <Github className="w-4 h-4" />
                <span>Ver Proyecto en GitHub</span>
              </a>
            </div>

            <div className="pt-6 flex items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Sin tarjeta de crédito
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Compatible con móviles y PC
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
