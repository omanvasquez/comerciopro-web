import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ExternalLink } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  linkText?: string;
  linkUrl?: string;
}

const FAQS: FAQItem[] = [
  {
    question: '¿Dónde puedo probar y usar el sistema ComercioPro?',
    answer: 'Puedes acceder a la plataforma completa y probar todas sus funcionalidades directamente en el enlace oficial de la aplicación: comerciopro-app.web.app. No requiere instalaciones pesadas en tu ordenador.',
    linkText: 'Abrir aplicación en comerciopro-app.web.app',
    linkUrl: 'https://comerciopro-app.web.app'
  },
  {
    question: '¿Qué es este sitio web (comerciopro-venezuela.web.app)?',
    answer: 'Este es el sitio web oficial de presentación e información de ComercioPro. Aquí los dueños de negocios, comerciantes y desarrolladores pueden conocer los módulos del software, entender la solución multimoneda, calcular ejemplos de tasas y dirigirse a la aplicación operativa o al repositorio de código.',
  },
  {
    question: '¿Dónde está alojado el código fuente del proyecto?',
    answer: 'El proyecto es de código abierto y su desarrollo está documentado en GitHub por Oman Vásquez en el repositorio oficial.',
    linkText: 'Visitar github.com/omanvasquez/ComercioPro',
    linkUrl: 'https://github.com/omanvasquez/ComercioPro'
  },
  {
    question: '¿Cómo funciona la sincronización con la tasa oficial BCV?',
    answer: 'El sistema permite fijar y sincronizar la tasa del Banco Central de Venezuela (BCV). Al actualizar la tasa, todos los precios calculados en Bolívares se ajustan de inmediato sin que tengas que modificar producto por producto en tu inventario.'
  },
  {
    question: '¿Puedo usar lectores de código de barras e impresoras de tickets?',
    answer: 'Sí. ComercioPro es compatible con cualquier lector de códigos de barra USB o inalámbrico que funcione como emulador de teclado, así como con impresoras térmicas de tickets (58mm y 80mm) estándar.'
  },
  {
    question: '¿Qué sucede si hay una falla eléctrica en mi comercio?',
    answer: 'Tus datos no se pierden porque están respaldados en la nube en tiempo real. Si la computadora principal se apaga por una fluctuación eléctrica, puedes ingresar desde cualquier tablet o teléfono inteligente con conexión a datos móviles y continuar atendiendo a tus clientes.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-14 text-center">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Preguntas Frecuentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Todo lo que necesitas saber sobre ComercioPro
          </h2>
          <p className="text-slate-300 text-base text-balance">
            Respuestas a las dudas más comunes sobre la plataforma, su implementación y enlaces de acceso.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 space-y-3">
                    <p>{faq.answer}</p>
                    {faq.linkUrl && faq.linkText && (
                      <div>
                        <a
                          href={faq.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          <span>{faq.linkText}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
