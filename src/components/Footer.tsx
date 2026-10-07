import React from 'react';
import { Github, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-850 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-850">
          {/* Brand & summary */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block"></span>
              <span className="text-base font-bold text-white tracking-tight">ComercioPro</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Plataforma oficial de presentación de ComercioPro. Sistema de gestión comercial, facturación y punto de venta adaptado a la economía y multimoneda de Venezuela.
            </p>
            <div className="pt-1 text-[11px] text-slate-400">
              Desarrollado por{' '}
              <a
                href="https://github.com/omanvasquez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline font-medium"
              >
                Oman Vásquez
              </a>
            </div>
          </div>

          {/* Links: Platform */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Plataforma</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://comerciopro-app.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Abrir Sistema en Vivo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/omanvasquez/comerciopro-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Repositorio Web (GitHub)</span>
                  <Github className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/omanvasquez/ComercioPro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Repositorio Sistema (GitHub)</span>
                  <Github className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">
                  Simulador de Tasas BCV
                </a>
              </li>
              <li>
                <a href="#modulos" className="hover:text-white transition-colors">
                  Módulos y Capacidades
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Legal & Resources */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Dominio y Despliegue</p>
            <div className="space-y-2 text-slate-400">
              <p>
                <span className="text-slate-300 font-medium">Sitio Web Oficial:</span>{' '}
                <a
                  href="https://comerciopro-venezuela.web.app/"
                  className="text-emerald-400 hover:underline font-mono"
                >
                  comerciopro-venezuela.web.app
                </a>
              </p>
              <p>
                <span className="text-slate-300 font-medium">Aplicación Operativa:</span>{' '}
                <a
                  href="https://comerciopro-app.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-mono"
                >
                  comerciopro-app.web.app
                </a>
              </p>
              <p className="text-[11px] text-slate-400 pt-1">
                Alojado en infraestructura Google Cloud y Firebase para alta disponibilidad.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>© {currentYear} ComercioPro. Código abierto bajo licencia MIT.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/omanvasquez/ComercioPro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
            >
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://comerciopro-app.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
            >
              ComercioPro App
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://comerciopro-venezuela.web.app/"
              className="hover:text-slate-200 transition-colors"
            >
              ComercioPro Venezuela
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
