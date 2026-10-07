# ComercioPro – Sitio Web Oficial

<p align="center">
  <img src="src/assets/images/hero_comerciopro_pos_1791402405339.jpg" alt="ComercioPro Terminal POS" width="750" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);" />
</p>

<p align="center">
  <strong>Portal oficial y presentación de la plataforma de gestión comercial y punto de venta (POS) para comercios en Venezuela.</strong>
</p>

<p align="center">
  <a href="https://comerciopro-venezuela.web.app/"><img src="https://img.shields.io/badge/Sitio%20Web%20Oficial-comerciopro--venezuela.web.app-10b981?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Sitio Web"></a>
  <a href="https://comerciopro-app.web.app"><img src="https://img.shields.io/badge/Probar%20Sistema-comerciopro--app.web.app-3b82f6?style=for-the-badge&logo=firebase&logoColor=white" alt="App en Vivo"></a>
  <a href="https://github.com/omanvasquez/ComercioPro"><img src="https://img.shields.io/badge/Repositorio%20del%20Sistema-ComercioPro-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo"></a>
</p>

---

## 📌 Acerca de este Repositorio

Este repositorio contiene el código fuente del **sitio web oficial y landing page interactiva de ComercioPro**. 

Mientras que el sistema operativo de ventas y administración se ejecuta en [comerciopro-app.web.app](https://comerciopro-app.web.app) (cuyo código base reside en [omanvasquez/ComercioPro](https://github.com/omanvasquez/ComercioPro)), este portal sirve como vitrina comercial para explicar sus características, simular cobros con tasa oficial del BCV y guiar a nuevos usuarios a probar el sistema en vivo.

---

## 🚀 Enlaces Principales

| Recurso | Enlace | Descripción |
| :--- | :--- | :--- |
| 🌐 **Sitio Web Oficial** | [comerciopro-venezuela.web.app](https://comerciopro-venezuela.web.app/) | Portal de presentación, simulador y documentación comercial |
| ⚡ **Aplicación en Vivo (POS)** | [comerciopro-app.web.app](https://comerciopro-app.web.app) | Software de facturación, punto de venta e inventario |
| 💻 **Código del Sistema** | [github.com/omanvasquez/ComercioPro](https://github.com/omanvasquez/ComercioPro) | Repositorio principal del software ComercioPro |
| 📁 **Código de este Sitio** | [github.com/omanvasquez/comerciopro-web](https://github.com/omanvasquez/comerciopro-web) | Repositorio del sitio web institucional |

---

## ✨ Características del Sitio Web

- 🖥️ **Hero & Propuesta de Valor:** Presentación directa enfocada en el comerciante venezolano, con CTAs claros a la app y al repositorio.
- 🧮 **Simulador Interactivo de Cobro:** Calculadora en vivo donde los visitantes pueden ingresar montos en divisas ($ USD), ajustar la tasa oficial del Banco Central de Venezuela (BCV), activar el desglose del impuesto IGTF (3%) y visualizar tickets bimonetarios con vuelto en tiempo real.
- 🍱 **Bento Grid de Capacidades:**
  - `01. Ventas & Mostrador:` Punto de venta rápido compatible con lectores de código de barra y tickets de 58/80mm.
  - `02. Almacén & Stock:` Costos fijados en moneda dura con ajuste dinámico a bolívares y alertas de reposición.
  - `03. Tesorería & Arqueo:` Cuadre de caja diario separado por método de pago (Pago Móvil, Zelle, Efectivo USD/Bs, Transferencias).
  - `04. Localización Venezuela:` Cuentas por cobrar protegidas de la devaluación, notas de entrega y presupuestos.
- 🧭 **Explorador Interactivo de Módulos:** Navegación por pestañas interactivas para detallar cada módulo funcional del software (POS, Inventario, Clientes CxC, Proveedores CxP, Caja y Reportes).
- ⚖️ **Comparativa de Valor:** Tabla comparativa entre el método tradicional (cuadernos, hojas de Excel desactualizadas o PCs locales con riesgo de pérdida de datos) vs. ComercioPro Cloud.
- ❓ **Sección de Preguntas Frecuentes (FAQ):** Respuestas a dudas operativas, compatibilidad de hardware y uso en la nube.
- 📱 **Diseño Responsivo & Rendimiento:** Experiencia fluida en dispositivos móviles, tablets y ordenadores con paleta moderna y tipografía legible.

---

## 🛠️ Stack Tecnológico

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Empaquetador:** [Vite 8](https://vite.dev/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Animaciones:** [Motion](https://motion.dev/)
- **Backend & Cloud:** [Firebase](https://firebase.google.com/) (Firestore DB & Hosting)
- **Tipografías:** Plus Jakarta Sans & Space Grotesk

---

## 💻 Instalación y Desarrollo Local

Para correr este sitio web en tu entorno local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/omanvasquez/comerciopro-web.git
cd comerciopro-web
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre tu navegador en `http://localhost:3000`.

### 4. Compilar para producción
```bash
npm run build
```
Los archivos optimizados quedarán generados en la carpeta `dist/`.

---

## ☁️ Despliegue en Firebase Hosting

Para publicar las actualizaciones en el dominio oficial `comerciopro-venezuela.web.app`:

```bash
# 1. Iniciar sesión en Firebase (si no lo has hecho)
npx firebase login

# 2. Generar el bundle de producción
npm run build

# 3. Desplegar al proyecto de Firebase Hosting
npx firebase deploy --only hosting --project comerciopro-venezuela
```

---

## 👤 Autor

Desarrollado y mantenido por **Oman Vásquez**:
- 🌐 GitHub: [@omanvasquez](https://github.com/omanvasquez)
- 📧 Contacto: `omanjrvasquez@gmail.com`

---

## 📄 Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE). Siéntete libre de utilizarlo, colaborar y compartirlo.
