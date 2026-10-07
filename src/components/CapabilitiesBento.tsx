import React from 'react';
import { ShoppingBag, Package, BarChart3, Receipt, ArrowRight } from 'lucide-react';

export default function CapabilitiesBento() {
  return (
    <section id="multimoneda" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-4 mb-14 text-left">
        <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
          Módulos y Capacidades del Sistema
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance max-w-2xl">
          Construido desde cero para simplificar el comercio diario
        </h2>
        <p className="text-slate-300 text-base max-w-2xl text-balance">
          Olvídate de cuadernos con tachaduras, hojas de Excel desactualizadas y cálculos manuales de tasas. ComercioPro sincroniza todo tu flujo en una sola interfaz ágil.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: POS & Multicurrency (Span 8) */}
        <div className="md:col-span-7 lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between group">
          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold">01. Ventas & Mostrador</span>
              <span aria-hidden="true">·</span>
              <span>Punto de Venta Dual</span>
              <span aria-hidden="true">·</span>
              <span>Lector de Barras</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Punto de Venta (POS) con cobro multimoneda instantáneo
            </h3>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
              Cobra en segundos escaneando productos o seleccionando desde el catálogo táctil. Acepta pagos combinados (por ejemplo: $10 en efectivo y el restante en Pago Móvil a tasa oficial) con cálculo automático de vuelto en la moneda deseada.
            </p>
          </div>

          <div className="px-6 pb-6 sm:px-8 sm:pb-8">
            <div className="relative rounded-xl overflow-hidden border border-slate-800/80 aspect-[16/9] bg-slate-950">
              <img
                src="/src/assets/images/feature_pos_multicurrency_1791402415310.jpg"
                alt="Terminal POS ComercioPro multimoneda con escáner de códigos"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-300 flex items-center justify-between">
                <span>Impresión de tickets térmicos 58mm / 80mm</span>
                <span className="font-mono text-emerald-400">USD & Bs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Inventory & Stock Control (Span 4) */}
        <div className="md:col-span-5 lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between group">
          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold">02. Almacén</span>
              <span aria-hidden="true">·</span>
              <span>Stock en Tiempo Real</span>
            </div>
            
            <h3 className="text-xl font-bold text-white tracking-tight">
              Control de Inventario Inteligente
            </h3>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              Fija los costos y precios de venta base en Dólares; el sistema actualiza automáticamente los precios en Bolívares con cada cambio de tasa. Alertas de bajo stock y registro de mermas.
            </p>
          </div>

          <div className="px-6 pb-6 sm:px-8 sm:pb-8">
            <div className="relative rounded-xl overflow-hidden border border-slate-800/80 aspect-[4/3] bg-slate-950">
              <img
                src="/src/assets/images/feature_inventory_stock_1791402426884.jpg"
                alt="Gestión de inventario y stock de almacén con tablet digital"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-xs text-slate-300">
                <span>Alertas preventivas de reposición</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Financial Analytics & Daily Closure (Span 5) */}
        <div className="md:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between group">
          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold">03. Tesorería</span>
              <span aria-hidden="true">·</span>
              <span>Cierre Diario</span>
            </div>
            
            <h3 className="text-xl font-bold text-white tracking-tight">
              Arqueo de Caja y Ganancias
            </h3>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              Cuadre exacto por método de pago: cuánto ingresó por Pago Móvil, cuánto por efectivo en divisas, transferencias bancarias y punto de venta. Visualiza tu margen de utilidad real.
            </p>
          </div>

          <div className="px-6 pb-6 sm:px-8 sm:pb-8">
            <div className="relative rounded-xl overflow-hidden border border-slate-800/80 aspect-[4/3] bg-slate-950">
              <img
                src="/src/assets/images/feature_analytics_finance_1791402435912.jpg"
                alt="Métricas financieras y arqueo de caja diario en monitor y tablet"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-xs text-slate-300">
                <span>Desglose por moneda y método de pago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Local Venezuelan Methods & Legal Ready (Span 7) */}
        <div className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold">04. Localización</span>
              <span aria-hidden="true">·</span>
              <span>Venezuela Nativo</span>
              <span aria-hidden="true">·</span>
              <span>SENIAT / IGTF</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Hecho para las condiciones reales del negocio venezolano
            </h3>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              A diferencia de softwares internacionales que no entienden el IGTF, las notas de entrega, el Pago Móvil o los créditos informales en divisas con abonos en bolívares, ComercioPro incluye todo de forma nativa.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1">
                <p className="font-semibold text-white">Cuentas por Cobrar (Crédito)</p>
                <p className="text-slate-400">Lleva el saldo de tus clientes en dólares con conversión exacta en bolívares al momento del abono.</p>
              </div>

              <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1">
                <p className="font-semibold text-white">Percepción IGTF (3%)</p>
                <p className="text-slate-400">Calcula y desglosa automáticamente el impuesto cuando el cliente paga en dólares en efectivo.</p>
              </div>

              <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1">
                <p className="font-semibold text-white">Notas de Entrega y Presupuestos</p>
                <p className="text-slate-400">Genera comprobantes y cotizaciones descargables en PDF en ambas monedas con vigencia configurable.</p>
              </div>

              <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1">
                <p className="font-semibold text-white">Acceso en la Nube</p>
                <p className="text-slate-400">Sin servidores locales costosos ni riesgo de perder tus datos ante fallas eléctricas o de equipo.</p>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-xs text-slate-400">¿Quieres comprobarlo ahora mismo?</span>
            <a
              href="https://comerciopro-app.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Abrir Sistema ComercioPro</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
