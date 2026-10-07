import React, { useState, useId } from 'react';
import { RefreshCw, Calculator, ArrowRight, DollarSign, ExternalLink, ShieldCheck } from 'lucide-react';

export default function CurrencySimulator() {
  const [usdAmount, setUsdAmount] = useState<number>(35.00);
  const [bcvRate, setBcvRate] = useState<number>(54.20);
  const [paymentMethod, setPaymentMethod] = useState<'pagomovil' | 'efectivo_usd' | 'mixto'>('pagomovil');
  const [applyIgtf, setApplyIgtf] = useState<boolean>(true);

  const usdInputId = useId();
  const bcvInputId = useId();

  // Calculations
  const baseBs = usdAmount * bcvRate;
  const igtfRate = 0.03; // 3% IGTF in Venezuela
  const igtfUsd = paymentMethod === 'efectivo_usd' && applyIgtf ? usdAmount * igtfRate : 0;
  const igtfBs = igtfUsd * bcvRate;

  const totalUsd = usdAmount + igtfUsd;
  const totalBs = baseBs + igtfBs;

  return (
    <section id="simulador" className="py-20 bg-slate-900/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Simulador Interactivo de Cobro
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            La dualidad cambiaria venezolana resuelta en segundos
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-balance">
            Experimenta cómo ComercioPro calcula automáticamente las conversiones entre Dólares y Bolívares usando la tasa oficial del BCV, con soporte para IGTF y múltiples formas de pago.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Input Controls */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-emerald-400" />
                <span>Parámetros de la Venta</span>
              </h3>

              {/* Amount in USD */}
              <div>
                <label htmlFor={usdInputId} className="block text-xs font-medium text-slate-400 mb-2">
                  Monto de la Venta en Divisas (USD $)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 font-mono">
                    $
                  </span>
                  <input
                    id={usdInputId}
                    type="number"
                    step="0.5"
                    min="1"
                    value={usdAmount}
                    onChange={(e) => setUsdAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full pl-8 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white font-mono text-base focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              {/* BCV Exchange Rate */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={bcvInputId} className="text-xs font-medium text-slate-400">
                    Tasa Oficial BCV de Referencia (Bs/USD)
                  </label>
                  <button
                    type="button"
                    onClick={() => setBcvRate(54.20)}
                    className="text-[11px] text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                    title="Restablecer tasa estimada"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Tasa BCV del Día</span>
                  </button>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 font-mono text-xs">
                    Bs.
                  </span>
                  <input
                    id={bcvInputId}
                    type="number"
                    step="0.1"
                    min="1"
                    value={bcvRate}
                    onChange={(e) => setBcvRate(Math.max(0.01, parseFloat(e.target.value) || 1))}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white font-mono text-base focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">
                  Método de Pago Predominante
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pagomovil')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center ${
                      paymentMethod === 'pagomovil'
                        ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Pago Móvil / TDD
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('efectivo_usd')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center ${
                      paymentMethod === 'efectivo_usd'
                        ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Efectivo USD (Divisa)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('mixto')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center ${
                      paymentMethod === 'mixto'
                        ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Pago Mixto
                  </button>
                </div>
              </div>

              {/* IGTF Toggle for Cash USD */}
              {paymentMethod === 'efectivo_usd' && (
                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <p className="font-medium text-slate-200">Impuesto IGTF (3%)</p>
                    <p className="text-slate-400 text-[11px]">Aplica a pagos percibidos en divisa en efectivo</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={applyIgtf}
                      onChange={(e) => setApplyIgtf(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>
              )}
            </div>

            {/* Generated Dual Ticket Output */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-medium text-slate-400">Resumen de Ticket POS</span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/30">
                  ComercioPro POS Engine
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Subtotal en Divisas:</span>
                  <span className="tabular-nums font-semibold">${usdAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Equivalente Base en Bs:</span>
                  <span className="tabular-nums">
                    Bs. {baseBs.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>

                {igtfUsd > 0 && (
                  <div className="flex justify-between text-amber-400 pt-1 border-t border-slate-800/80">
                    <span>IGTF Percibido (3%):</span>
                    <span className="tabular-nums">+ ${igtfUsd.toFixed(2)} (Bs. {igtfBs.toFixed(2)})</span>
                  </div>
                )}

                <div className="pt-3 border-t border-slate-700/80 space-y-2">
                  <div className="flex justify-between items-baseline text-sm font-bold text-white">
                    <span>TOTAL A PAGAR (USD):</span>
                    <span className="text-emerald-400 text-lg tabular-nums">${totalUsd.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-sm font-bold text-slate-200">
                    <span>TOTAL A PAGAR (Bs):</span>
                    <span className="text-emerald-400 text-lg tabular-nums">
                      Bs. {totalBs.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <a
                  href="https://comerciopro-app.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Realizar esta venta en el Sistema Real</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  Abre directamente en <code className="text-slate-300">comerciopro-app.web.app</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
