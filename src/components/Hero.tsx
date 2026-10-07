import React from 'react';
import { ExternalLink, Github, ArrowRight, CheckCircle2, Shield, Zap, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background radial gradient subtle highlight */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Unboxed clean metadata line */}
            <div className="flex items-center flex-wrap gap-2 text-xs font-medium text-emerald-400">
              <span>Sitio Web Oficial</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Software Comercial para Venezuela</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Open Source</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.1]">
              Control total de tu negocio con facturación y tasa <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">BCV en tiempo real</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl text-balance leading-relaxed">
              ComercioPro es el sistema de gestión y punto de venta (POS) en la nube desarrollado específicamente para la realidad económica venezolana: soporte multimoneda nativo (USD y Bolívares), inventario en tiempo real, arqueo de caja y reportes financieros sin complicaciones.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://comerciopro-app.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:translate-y-[-1px] active:translate-y-[0px] whitespace-nowrap"
              >
                <span>Probar ComercioPro en Vivo</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/omanvasquez/comerciopro-web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-xl transition-colors whitespace-nowrap"
              >
                <Github className="w-4 h-4" />
                <span>Explorar Repositorio GitHub</span>
              </a>
            </div>

            {/* Adjacent Proof Trust Markers */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-2xl font-bold font-mono tabular-nums text-white">100%</p>
                <p className="text-xs text-slate-400 mt-0.5">Multimoneda (USD / Bs)</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono tabular-nums text-white">0s</p>
                <p className="text-xs text-slate-400 mt-0.5">Cálculo de Tasa BCV</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-mono tabular-nums text-white">Cloud</p>
                <p className="text-xs text-slate-400 mt-0.5">Acceso desde Cualquier Dispositivo</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-black/80 group">
              <img
                src="/src/assets/images/hero_comerciopro_pos_1791402405339.jpg"
                alt="Terminal Punto de Venta ComercioPro en funcionamiento"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

              {/* Bottom Visual Card Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Sistema en Línea
                  </span>
                  <span className="font-mono tabular-nums text-slate-400">
                    comerciopro-app.web.app
                  </span>
                </div>

                <div className="mt-2.5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400">Venta POS Simultánea</p>
                    <p className="text-sm font-semibold text-white font-mono tabular-nums">
                      $45.00 <span className="text-xs text-slate-400 font-normal">/ Bs. 2,358.00</span>
                    </p>
                  </div>
                  <a
                    href="https://comerciopro-app.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-medium inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Entrar</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
