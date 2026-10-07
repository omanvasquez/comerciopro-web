import React from 'react';
import { Check, X, ShieldCheck } from 'lucide-react';

interface ComparisonRow {
  aspect: string;
  traditional: string;
  comercioPro: string;
}

const COMPARISONS: ComparisonRow[] = [
  {
    aspect: 'Actualización de Tasas Cambiarias',
    traditional: 'Remarcar a mano cientos de precios cada vez que sube la tasa o calcular en calculadora.',
    comercioPro: 'Actualización en tiempo real con tasa BCV. Los precios en bolívares cambian automáticamente.'
  },
  {
    aspect: 'Control Multimoneda Nativo',
    traditional: 'Sistemas extranjeros que solo operan en una moneda o confunden cobros en divisas.',
    comercioPro: 'Dualidad total en USD y Bolívares. Cobro mixto y vuelto en la moneda disponible.'
  },
  {
    aspect: 'Créditos a Clientes (Fiado)',
    traditional: 'Anotado en libreta en bolívares, perdiendo el 30% del valor cuando pagan semanas después.',
    comercioPro: 'Saldos resguardados en divisa. El cliente abona en bolívares a la tasa exacta del día de pago.'
  },
  {
    aspect: 'Infraestructura y Riesgo Eléctrico',
    traditional: 'Instalado en una PC local vieja. Si se apaga por corte eléctrico o se daña el disco, se pierde la data.',
    comercioPro: 'En la nube 24/7. Puedes continuar vendiendo desde un teléfono móvil con datos móviles o tablet.'
  },
  {
    aspect: 'Métodos Locales (Pago Móvil & IGTF)',
    traditional: 'Sin conciliación de Pago Móvil ni cálculo de impuesto a grandes transacciones.',
    comercioPro: 'Campos nativos para referencia de Pago Móvil, banco emisor y cálculo opcional de IGTF (3%).'
  },
  {
    aspect: 'Cierre y Arqueo de Caja',
    traditional: 'Horas sumando papelitos, bauches de punto de venta y capturas de WhatsApp al final del día.',
    comercioPro: 'Arqueo automático separado por moneda y método de cobro con 1 solo clic.'
  }
];

export default function ComparisonSection() {
  return (
    <section id="comparativa" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-4 mb-14 text-left">
        <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
          Comparativa de Valor
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance max-w-2xl">
          ¿Por qué migrar a ComercioPro?
        </h2>
        <p className="text-slate-300 text-base max-w-2xl text-balance">
          Compara la gestión habitual con cuadernos u hojas de cálculo frente a una plataforma profesional diseñada para Venezuela.
        </p>
      </div>

      <div className="overflow-x-auto border border-slate-800 rounded-2xl bg-slate-900 shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/70">
              <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/3">
                Aspecto Operativo
              </th>
              <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/3">
                Gestión Tradicional / Excel / PC Local
              </th>
              <th className="py-4 px-6 text-xs font-semibold text-emerald-400 uppercase tracking-wider w-1/3 bg-emerald-950/20 border-l border-slate-800">
                Con ComercioPro
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80 text-sm">
            {COMPARISONS.map((row, i) => (
              <tr key={i} className="hover:bg-slate-850/40 transition-colors">
                <td className="py-5 px-6 font-medium text-white align-top">
                  {row.aspect}
                </td>
                <td className="py-5 px-6 text-slate-400 align-top leading-relaxed">
                  <div className="flex items-start gap-2.5">
                    <span className="p-0.5 rounded bg-rose-500/10 text-rose-400 mt-1 shrink-0">
                      <X className="w-3.5 h-3.5" />
                    </span>
                    <span>{row.traditional}</span>
                  </div>
                </td>
                <td className="py-5 px-6 text-slate-200 align-top leading-relaxed bg-emerald-950/10 border-l border-slate-800">
                  <div className="flex items-start gap-2.5">
                    <span className="p-0.5 rounded bg-emerald-500/10 text-emerald-400 mt-1 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{row.comercioPro}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
