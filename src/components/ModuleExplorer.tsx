import React, { useState } from 'react';
import { ShoppingCart, PackageSearch, Users, Truck, Wallet, TrendingUp, Check, ExternalLink } from 'lucide-react';

interface ModuleData {
  id: string;
  name: string;
  icon: React.ReactNode;
  subtitle: string;
  description: string;
  features: string[];
  sampleMetric: { label: string; value: string };
  workflowStep: string;
}

const MODULES: ModuleData[] = [
  {
    id: 'pos',
    name: 'Punto de Venta (POS)',
    icon: <ShoppingCart className="w-4 h-4" />,
    subtitle: 'Venta ágil y cobro en mostrador',
    description: 'Diseñado para atender colas de clientes a gran velocidad. Compatible con lectores de código de barra USB/Bluetooth e impresoras de tickets térmicos.',
    features: [
      'Cobro multimoneda en segundos (Bs, USD, Pago Móvil, Zelle)',
      'Cálculo de vuelto automático en la moneda disponible',
      'Descuentos por ítem o sobre el total de la venta',
      'Impresión o envío digital de comprobantes'
    ],
    sampleMetric: { label: 'Tiempo Promedio por Venta', value: '< 20 segundos' },
    workflowStep: 'Escanear producto -> Seleccionar tasa BCV -> Recibir Pago Móvil/USD -> Imprimir Ticket'
  },
  {
    id: 'inventario',
    name: 'Inventario & Stock',
    icon: <PackageSearch className="w-4 h-4" />,
    subtitle: 'Control total de mercancía',
    description: 'Gestión por categorías, códigos de barra y marcas. Maneja precios en dólares con ajuste dinámico de bolívares según la tasa del día.',
    features: [
      'Precios base en divisas con cálculo automático en Bs',
      'Alertas de stock mínimo para evitar roturas de inventario',
      'Historial de entradas y salidas de mercancía (Kardex)',
      'Importación masiva de productos desde Excel'
    ],
    sampleMetric: { label: 'Exactitud de Existencias', value: '100% en Nube' },
    workflowStep: 'Ingreso de factura de proveedor -> Carga de costo USD -> Precio de venta fijado automáticamente'
  },
  {
    id: 'cxc',
    name: 'Clientes & Créditos (CxC)',
    icon: <Users className="w-4 h-4" />,
    subtitle: 'Fiados y cuentas por cobrar',
    description: 'El crédito a clientes es común en Venezuela. Registra créditos en divisas para proteger tu capital de la devaluación y recibe abonos en bolívares a la tasa acordada.',
    features: [
      'Saldos respaldados en dólares con cálculo de abonos en Bs',
      'Límites de crédito personalizados por cliente',
      'Historial de compras y pagos por cliente',
      'Recordatorios de pago de saldos vencidos'
    ],
    sampleMetric: { label: 'Protección de Capital', value: 'Sin Pérdida Cambiaria' },
    workflowStep: 'Seleccionar cliente -> Registrar venta a crédito -> Registrar abono en Pago Móvil con tasa del día'
  },
  {
    id: 'cxp',
    name: 'Proveedores & Compras',
    icon: <Truck className="w-4 h-4" />,
    subtitle: 'Gestión de compras y proveedores',
    description: 'Registra tus órdenes de compra a distribuidores, controla facturas a crédito de proveedores y actualiza el costo de reposición de tus productos de inmediato.',
    features: [
      'Registro de facturas de compra y notas de entrega',
      'Cálculo del costo promedio ponderado de productos',
      'Cuentas por pagar con fechas de vencimiento',
      'Directorio de proveedores con teléfonos y RIF'
    ],
    sampleMetric: { label: 'Control de Costos', value: 'Margen Protegido' },
    workflowStep: 'Recepción de mercancía -> Verificación contra orden -> Actualización inmediata de inventario'
  },
  {
    id: 'caja',
    name: 'Caja & Arqueo Diario',
    icon: <Wallet className="w-4 h-4" />,
    subtitle: 'Control de flujo de dinero y métodos',
    description: 'Cada turno y día laboral finaliza con un arqueo transparente. Separa el efectivo en bolívares, efectivo en divisas, lotes de punto de venta y transferencias bancarias.',
    features: [
      'Apertura y cierre de caja por turnos de cajero',
      'Desglose detallado por banco y método de recepción',
      'Detección automática de sobrantes o faltantes',
      'Registro de egresos menores (gastos de caja chica)'
    ],
    sampleMetric: { label: 'Cierre Diario', value: 'Cuadre Exacto' },
    workflowStep: 'Conteo de gaveta -> Comparación contra sistema -> Generación de reporte de cierre Z'
  },
  {
    id: 'reportes',
    name: 'Reportes & Estadísticas',
    icon: <TrendingUp className="w-4 h-4" />,
    subtitle: 'Métricas de rentabilidad en tiempo real',
    description: 'Toma decisiones con números reales: productos más vendidos, horas pico de compra, margen bruto y utilidad neta calculada en moneda dura.',
    features: [
      'Top 20 productos de mayor rotación y margen',
      'Reporte de ventas diario, semanal y mensual',
      'Ganancia bruta real descontando costos de reposición',
      'Exportación rápida a hojas de cálculo y PDF'
    ],
    sampleMetric: { label: 'Visibilidad de Ganancia', value: 'Tiempo Real' },
    workflowStep: 'Filtrar período -> Visualizar gráficas comparativas -> Exportar informe gerencial'
  }
];

export default function ModuleExplorer() {
  const [activeModuleId, setActiveModuleId] = useState<string>('pos');

  const activeModule = MODULES.find((m) => m.id === activeModuleId) || MODULES[0];

  return (
    <section id="modulos" className="py-24 bg-slate-950/70 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-14 text-left">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Arquitectura del Software
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance max-w-2xl">
            Explora cada módulo de ComercioPro
          </h2>
          <p className="text-slate-300 text-base max-w-2xl text-balance">
            Cada sección del sistema está diseñada para interactuar armónicamente, eliminando duplicidad de trabajo y errores de cálculo.
          </p>
        </div>

        {/* Module Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {MODULES.map((m) => {
            const isActive = m.id === activeModuleId;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveModuleId(m.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-emerald-400 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/10'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border-slate-800 hover:bg-slate-850'
                }`}
              >
                {m.icon}
                <span>{m.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Module Detail Panel */}
        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left detail info */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-xs font-medium text-emerald-400 mb-1">{activeModule.subtitle}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {activeModule.name}
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeModule.description}
              </p>

              {/* Feature bullets */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Funcionalidades Clave
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModule.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <div className="p-1 rounded bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow snippet */}
              <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-1.5">
                <p className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                  Flujo de Trabajo Operativo
                </p>
                <p className="text-xs text-slate-300 font-mono leading-relaxed">
                  {activeModule.workflowStep}
                </p>
              </div>
            </div>

            {/* Right module preview card & direct link */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs text-slate-400">Indicador del Módulo</span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/30">
                  Activo en Sistema
                </span>
              </div>

              <div className="space-y-1 text-center py-4 bg-slate-900/40 rounded-xl border border-slate-850">
                <p className="text-xs text-slate-400">{activeModule.sampleMetric.label}</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums text-emerald-400">
                  {activeModule.sampleMetric.value}
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="https://comerciopro-app.web.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/10"
                >
                  <span>Probar {activeModule.name} en Vivo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                  Accede de inmediato a la aplicación web en{' '}
                  <span className="text-slate-300 font-mono">comerciopro-app.web.app</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
