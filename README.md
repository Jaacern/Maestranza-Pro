# 🏭 MaestranzaPro - Sistema de Gestión de Inventario

<div align="center">

![MaestranzaPro Logo](https://img.shields.io/badge/MaestranzaPro-2.1.1-blue?style=for-the-badge&logo=astro)
![Astro](https://img.shields.io/badge/Astro-2.0.4-purple?style=for-the-badge&logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0.24-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Sistema integral de gestión de inventario para Maestranzas Unidos S.A.**

[�� Demo en Vivo](#) • [📖 Documentación](#) • [�� Reportar Bug](#) • [💡 Solicitar Feature](#)

</div>

---

## 📋 Tabla de Contenidos

- [🎯 Descripción del Proyecto](#-descripción-del-proyecto)
- [✨ Características Principales](#-características-principales)
- [🏗️ Arquitectura del Sistema](#️-arquitectura-del-sistema)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [📦 Instalación y Configuración](#-instalación-y-configuración)
- [�� Guía de Inicio Rápido](#-guía-de-inicio-rápido)
- [👥 Roles y Permisos](#-roles-y-permisos)
- [📱 Funcionalidades por Módulo](#-funcionalidades-por-módulo)
- [🔧 Configuración Avanzada](#-configuración-avanzada)
- [🧪 Testing y Desarrollo](#-testing-y-desarrollo)
- [�� Estructura del Proyecto](#-estructura-del-proyecto)
- [�� Seguridad y Autenticación](#-seguridad-y-autenticación)
- [📈 Monitoreo y Logs](#-monitoreo-y-logs)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)
- [👨‍💻 Equipo de Desarrollo](#-equipo-de-desarrollo)

---

## 🎯 Descripción del Proyecto

**MaestranzaPro** es un sistema de gestión de inventario completo desarrollado específicamente para **Maestranzas Unidos S.A.**, una empresa dedicada a la fabricación y mantenimiento industrial. El sistema proporciona una solución integral para el control de inventario, gestión de proveedores, control de lotes, y generación de reportes en tiempo real.

### 🎯 Objetivos del Sistema

- ✅ **Control Total del Inventario**: Gestión completa de productos, lotes y movimientos
- ✅ **Gestión de Proveedores**: Control de proveedores y historial de compras
- ✅ **Alertas Inteligentes**: Sistema de notificaciones para stock bajo y vencimientos
- ✅ **Reportes Ejecutivos**: Generación de reportes detallados y análisis
- ✅ **Control de Acceso**: Sistema de roles y permisos granular
- ✅ **Interfaz Moderna**: Diseño responsive y experiencia de usuario optimizada

---

## ✨ Características Principales

### 🔐 Sistema de Autenticación Avanzado
- **8 Roles Diferenciados**: Administrador, Gestor, Comprador, Logística, Auditor, Producción, Proyectos, Usuario Final
- **Control de Acceso Granular**: Permisos específicos por página y funcionalidad
- **Sesiones Persistentes**: Mantenimiento de sesión con localStorage
- **Redirección Automática**: Navegación inteligente según rol

### 📊 Dashboards Especializados
- **Dashboard por Rol**: Interfaz personalizada según responsabilidades
- **Widgets Dinámicos**: Información relevante en tiempo real
- **Gráficos Interactivos**: Visualización de datos con ApexCharts
- **Métricas Clave**: KPIs específicos por departamento

### 🏭 Gestión de Inventario
- **Registro de Productos**: Formularios completos con validaciones
- **Movimientos de Stock**: Entradas, salidas y transferencias
- **Control de Lotes**: Trazabilidad completa con fechas de vencimiento
- **Categorización**: Organización jerárquica de productos
- **Búsqueda Avanzada**: Filtros múltiples y búsqueda semántica

### �� Sistema de Alertas
- **Stock Bajo**: Notificaciones automáticas de productos críticos
- **Vencimientos**: Alertas de lotes próximos a vencer
- **Kits Incompletos**: Notificaciones de kits faltantes
- **Configuración Flexible**: Umbrales personalizables por producto

### 📈 Reportes y Analytics
- **Reportes en Tiempo Real**: Datos actualizados automáticamente
- **Exportación Múltiple**: PDF, Excel, CSV
- **Gráficos Interactivos**: Visualizaciones dinámicas
- **Filtros Avanzados**: Por fecha, categoría, proveedor, etc.

---

## 🏗️ Arquitectura del Sistema

### 📁 Estructura de Carpetas
  Maestranza/
├── 📁 src/
│ ├── 📁 app/ # Configuración de la aplicación
│ ├── 📁 assets/ # Recursos estáticos
│ ├── 📁 components/ # Componentes reutilizables
│ │ └── �� dashboards/ # Dashboards específicos por rol
│ ├── 📁 docs/ # Documentación del proyecto
│ ├── 📁 layouts/ # Plantillas de página
│ ├── 📁 lib/ # Utilidades y helpers
│ ├── 📁 modules/ # Módulos de funcionalidad
│ ├── 📁 pages/ # Páginas y rutas
│ │ └── �� api/ # Endpoints de API
│ ├── 📁 services/ # Lógica de negocio
│ └── 📁 types/ # Definiciones TypeScript
├── 📁 data/ # Datos mock y estáticos
└── 📄 Archivos de configuración

### 🔄 Flujo de Datos

```
Usuario → Autenticación → Autorización → Dashboard → Módulos → Servicios → Datos
```

###  Patrón de Diseño
- **Component-Based Architecture**: Componentes reutilizables
- **Service Layer Pattern**: Separación de lógica de negocio
- **Repository Pattern**: Abstracción de acceso a datos
- **Observer Pattern**: Sistema de notificaciones

---

## 🛠️ Tecnologías Utilizadas

### 🎯 Frontend
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| ![Astro](https://img.shields.io/badge/Astro-2.0.4-purple?style=flat&logo=astro) | 2.0.4 | Framework principal |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0.24-38B2AC?style=flat&logo=tailwind-css) | 3.0.24 | Framework CSS |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript) | 5.0 | Tipado estático |
| ![MaestranzaPro](https://img.shields.io/badge/MaestranzaPro-2.1.1-blue?style=flat) | 2.1.1 | Componentes UI |

###  Visualización y Gráficos
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| ![ApexCharts](https://img.shields.io/badge/ApexCharts-3.37.2-green?style=flat) | 3.37.2 | Gráficos interactivos |
| ![Faker.js](https://img.shields.io/badge/Faker.js-7.6.0-orange?style=flat) | 7.6.0 | Datos de prueba |

### 🔧 Herramientas de Desarrollo
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| ![ESLint](https://img.shields.io/badge/ESLint-8.35.0-red?style=flat&logo=eslint) | 8.35.0 | Linting de código |
| ![Prettier](https://img.shields.io/badge/Prettier-2.8.8-pink?style=flat&logo=prettier) | 2.8.8 | Formateo de código |
| ![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat&logo=node.js) | 18+ | Runtime de JavaScript |

---

## 📦 Instalación y Configuración

### ⚡ Requisitos Previos

```bash
# Verificar versiones mínimas
node --version    # >= 18.0.0
npm --version     # >= 8.0.0
# o
pnpm --version    # >= 7.0.0
```

###  Instalación Rápida

#### Opción 1: Clonación y Instalación Manual

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/MaestranzaPro.git
cd MaestranzaPro

# 2. Instalar dependencias
npm install
# o
pnpm install

# 3. Configurar variables de entorno
cp .env.example .env

# 4. Iniciar servidor de desarrollo
npm run dev
# o
pnpm dev
```

#### Opción 2: Instalación con Script Automatizado

```bash
# Script de instalación completa
curl -fsSL https://raw.githubusercontent.com/tu-usuario/MaestranzaPro/main/install.sh | bash
```

### 🔧 Configuración del Entorno

#### Variables de Entorno (.env)

```env
# Configuración del Servidor
DEV_PORT=2121
NODE_ENV=development

# Configuración de Base de Datos (Futuro)
DATABASE_URL=postgresql://user:password@localhost:5432/maestranza

# Configuración de Autenticación
JWT_SECRET=tu_jwt_secret_super_seguro
SESSION_SECRET=tu_session_secret

# Configuración de Email (Futuro)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu_email@gmail.com
SMTP_PASS=tu_password

# Configuración de API Externa (Futuro)
API_BASE_URL=https://api.maestranza.com
API_KEY=tu_api_key
```

### 🐳 Instalación con Docker (Opcional)

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 2121
CMD ["npm", "start"]
```

```bash
# Construir y ejecutar con Docker
docker build -t maestranzapro .
docker run -p 2121:2121 maestranzapro
```

---

##  Guía de Inicio Rápido

### 1️⃣ Primeros Pasos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### 2️⃣ Acceso al Sistema

1. **Abrir navegador**: `http://localhost:2121`
2. **Ir a login**: `http://localhost:2121/login`
3. **Seleccionar rol** y usar credenciales de prueba

### 3️⃣ Credenciales de Prueba

| Rol | Usuario | Contraseña | Dashboard |
|-----|---------|------------|-----------|
| 👑 **Administrador** | `admin` | `admin123` | `/dashboard-administrador` |
| 📦 **Gestor Inventario** | `gestor` | `gestor123` | `/dashboard-gestor-inventario` |
| 🛒 **Comprador** | `comprador` | `comprador123` | `/dashboard-comprador` |
| 🚚 **Logística** | `logistica` | `logistica123` | `/dashboard-encargado-logistica` |
|  **Auditor** | `auditor` | `auditor123` | `/dashboard-auditor-inventario` |
| ⚙️ **Producción** | `produccion` | `produccion123` | `/dashboard-jefe-produccion` |
| 📋 **Proyectos** | `proyectos` | `proyectos123` | `/dashboard-gerente-proyectos` |
| 👤 **Usuario Final** | `usuario` | `usuario123` | `/dashboard-usuario-final` |

### 4️⃣ Exploración del Sistema

1. **Dashboard Principal**: Información general y métricas
2. **Menú Lateral**: Navegación por módulos
3. **Funcionalidades**: Explorar módulos según rol
4. **Configuración**: Ajustes del sistema

---

##  Roles y Permisos

###  Matriz de Permisos

| Módulo | Admin | Gestor | Comprador | Logística | Auditor | Producción | Proyectos | Usuario |
|--------|-------|--------|-----------|-----------|---------|------------|-----------|---------|
| **Dashboard** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Registro Inventario** | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ |
| **Movimientos** | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Alertas Stock** | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Proveedores** | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| **Historial Compras** | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| **Control Lotes** | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **Gestión Kits** | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ |
| **Reportes** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Suministro Energía** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Rastreo Inventario** | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Categorización** | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Integración Compras** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |

### 🔐 Detalles de Seguridad

- **Autenticación**: Sistema de login con validación de credenciales
- **Autorización**: Control de acceso basado en roles (RBAC)
- **Sesiones**: Persistencia con localStorage
- **Validaciones**: Client-side y server-side (futuro)
- **Logs**: Registro de actividades de usuario

---

## 📱 Funcionalidades por Módulo

### 🏠 Dashboard Principal
- **Métricas en Tiempo Real**: Stock total, productos críticos, movimientos del día
- **Gráficos Interactivos**: Tendencias de inventario, distribución por categoría
- **Alertas Activas**: Notificaciones de stock bajo y vencimientos
- **Acceso Rápido**: Enlaces directos a funciones principales

### 📦 Gestión de Inventario
- **Registro de Productos**: Formulario completo con validaciones
- **Edición Masiva**: Modificación de múltiples productos
- **Importación/Exportación**: CSV, Excel, JSON
- **Búsqueda Avanzada**: Filtros múltiples y búsqueda semántica
- **Categorización**: Organización jerárquica de productos

### 🔄 Movimientos de Inventario
- **Entradas**: Registro de productos nuevos
- **Salidas**: Control de productos utilizados
- **Transferencias**: Movimientos entre ubicaciones
- **Ajustes**: Correcciones de inventario
- **Historial**: Trazabilidad completa de movimientos

###  Alertas de Stock
- **Configuración de Umbrales**: Límites personalizables por producto
- **Notificaciones Automáticas**: Alertas en tiempo real
- **Escalación**: Notificaciones a múltiples roles
- **Reportes de Alertas**: Análisis de productos críticos

###  Gestión de Proveedores
- **Registro Completo**: Información de contacto, productos, evaluación
- **Categorización**: Clasificación por tipo y rendimiento
- **Historial de Compras**: Trazabilidad de transacciones
- **Evaluación**: Sistema de calificación de proveedores

### 📊 Reportes y Analytics
- **Reportes en Tiempo Real**: Datos actualizados automáticamente
- **Exportación Múltiple**: PDF, Excel, CSV, JSON
- **Gráficos Interactivos**: Visualizaciones dinámicas con ApexCharts
- **Filtros Avanzados**: Por fecha, categoría, proveedor, ubicación

###  Control de Lotes
- **Registro de Lotes**: Trazabilidad completa
- **Fechas de Vencimiento**: Control de caducidad
- **Alertas de Vencimiento**: Notificaciones automáticas
- **Trazabilidad**: Seguimiento de origen y destino

### ️ Gestión de Kits
- **Creación de Kits**: Definición de componentes
- **Control de Stock**: Disponibilidad de kits completos
- **Alertas de Kits**: Notificaciones de kits incompletos
- **Reportes de Kits**: Análisis de utilización

---

## 🔧 Configuración Avanzada

### ⚙️ Configuración de Astro

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://maestranza.com',
  base: '/',
  server: {
    port: 2121,
    host: '0.0.0.0'
  },
  integrations: [
    sitemap(),
    tailwind()
  ],
  build: {
    assets: 'assets'
  }
});
```

### 🎨 Configuración de Tailwind CSS

```javascript
// tailwind.config.cjs
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          // ... más colores
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
};
```

### 🔍 Configuración de ESLint

```javascript
// .eslintrc.cjs
module.exports = {
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'astro/recommended'
  ],
  rules: {
    'max-len': ['error', { 'code': 120 }],
    'no-console': 'warn'
  }
};
```

### 📱 Configuración Responsive

```css
/* Breakpoints personalizados */
@media (max-width: 640px) { /* Mobile */ }
@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 1024px) { /* Desktop */ }
@media (max-width: 1280px) { /* Large Desktop */ }
```

---

## 🧪 Testing y Desarrollo

###  Scripts de Testing

```bash
# Linting del código
npm run lint

# Verificación de tipos TypeScript
npm run type-check

# Testing unitario (futuro)
npm run test

# Testing de integración (futuro)
npm run test:integration

# Coverage de código (futuro)
npm run test:coverage
```

### 🔧 Herramientas de Desarrollo

```bash
# Servidor de desarrollo con hot reload
npm run dev

# Build de producción
npm run build

# Preview de producción
npm run preview

# Análisis de bundle
npm run analyze
```

### 🐛 Debugging

```javascript
// Configuración de debugging
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Astro",
      "program": "${workspaceFolder}/node_modules/astro/astro.js",
      "args": ["dev"],
      "env": {
        "NODE_ENV": "development"
      }
    }
  ]
}
```

---

##  Estructura del Proyecto

### 📁 Organización de Archivos

```
Maestranza/
├── 📁 src/
│   ├── 📁 app/                    # Configuración de la aplicación
│   │   ├──  auth.js            # Configuración de autenticación
│   │   ├──  constants.ts       # Constantes globales
│   │   ├── 📄 LayoutSidebar.astro # Layout principal con sidebar
│   │   ├── 📄 LayoutStacked.astro # Layout alternativo
│   │   ├── 📄 NavBarSidebar.astro # Barra de navegación
│   │   └──  SideBar.astro      # Menú lateral
│   │
│   ├── 📁 components/            # Componentes reutilizables
│   │   ├──  dashboards/        # Dashboards específicos por rol
│   │   │   ├──  AdminDashboard.jsx
│   │   │   ├──  GestorDashboard.jsx
│   │   │   ├──  CompradorDashboard.jsx
│   │   │   ├──  LogisticaDashboard.jsx
│   │   │   ├── 📄 AuditorDashboard.jsx
│   │   │   ├── 📄 ProduccionDashboard.jsx
│   │   │   ├──  ProyectosDashboard.jsx
│   │   │   └── 📄 UsuarioDashboard.jsx
│   │   ├── 📄 BreadcrumbComponent.astro
│   │   ├── 📄 CardComponent.astro
│   │   ├──  FormFieldComponent.astro
│   │   ├── 📄 NavBarComponent.astro
│   │   ├──  SearchInput.astro
│   │   ├── 📄 TableComponent.astro
│   │   └──  ToggleSwitch.astro
│   │
│   ├── 📁 docs/                  # Documentación del proyecto
│   │   ├──  BACKLOG.md         # Backlog de funcionalidades
│   │   ├──  DEMO_PLAN.md       # Plan de demostración
│   │   ├──  MVP.md             # Producto mínimo viable
│   │   └──  ROLES.md           # Definición de roles
│   │
│   ├── 📁 layouts/               # Plantillas de página
│   │   ├── 📄 DashboardLayout.astro
│   │   └──  LoginLayout.astro
│   │
│   ├── 📁 lib/                   # Utilidades y helpers
│   │   └──  data.ts            # Funciones de acceso a datos
│   │
│   ├── 📁 modules/               # Módulos de funcionalidad
│   │   ├── 📄 CrudEntities.client.ts
│   │   ├──  CrudProducts.astro
│   │   ├── 📄 CrudUsers.astro
│   │   ├── 📄 DashBoard.astro
│   │   ├── 📄 DashBoard.client.ts
│   │   ├── 📄 ErrorMaintenance.astro
│   │   ├── 📄 ErrorNotFound.astro
│   │   ├──  ErrorServer.astro
│   │   ├──  FormForgotPassword.astro
│   │   ├── 📄 FormProfileLock.astro
│   │   ├──  FormResetPassword.astro
│   │   ├──  FormSignIn.astro
│   │   ├──  FormSignUp.astro
│   │   ├── 📄 LandingReadme.astro
│   │   ├──  PricingPlan.astro
│   │   └──  UserSettings.astro
│   │
│   ├── 📁 pages/                 # Páginas y rutas
│   │   ├──  api/               # Endpoints de API
│   │   │   ├──  [...entity].ts
│   │   │   └── 📄 logout.ts
│   │   ├──  authentication/    # Páginas de autenticación
│   │   │   ├── 📄 forgot-password.astro
│   │   │   ├──  profile-lock.astro
│   │   │   ├── 📄 reset-password.astro
│   │   │   ├── 📄 sign-in.astro
│   │   │   └── 📄 sign-up.astro
│   │   ├──  inventory/         # Módulo de inventario
│   │   │   ├──  alerts.astro
│   │   │   ├── 📄 batch-control.astro
│   │   │   ├──  movement.astro
│   │   │   ├──  register.astro
│   │   │   ├── 📄 reports.astro
│   │   │   └──  tracking.astro
│   │   ├──  crud/              # Operaciones CRUD
│   │   │   ├──  products.astro
│   │   │   └── 📄 users.astro
│   │   ├── 📄 404.astro
│   │   ├──  BatchControl.astro
│   │   ├── 📄 dashboard.astro
│   │   ├──  dashboard-administrador.astro
│   │   ├── 📄 dashboard-auditor-inventario.astro
│   │   ├── 📄 dashboard-gerente-proyectos.astro
│   │   ├── 📄 dashboard-usuario-final.astro
│   │   ├── 📄 EnergySupplyControl.astro
│   │   ├── 📄 index.astro
│   │   ├── 📄 InventoryCategorization.astro
│   │   ├──  InventoryMovement.astro
│   │   ├── 📄 InventoryRegistration.astro
│   │   ├── 📄 InventoryReports.astro
│   │   ├──  InventoryThresholdNotifications.astro
│   │   ├──  InventoryTracking.astro
│   │   ├── 📄 KitsManagement.astro
│   │   ├── 📄 login.astro
│   │   ├── 📄 LowStockAlerts.astro
│   │   ├── 📄 PurchaseHistory.astro
│   │   ├── 📄 PurchaseIntegration.astro
│   │   ├──  settings.astro
│   │   ├── 📄 SuppliersManagement.astro
│   │   └──  system-logs.astro
│   │
│   ├── 📁 services/              # Lógica de negocio
│   │   ├──  alerts.ts          # Servicio de alertas
│   │   ├──  auth.js            # Servicio de autenticación
│   │   ├──  batches.ts         # Servicio de lotes
│   │   ├──  index.ts           # Exportaciones principales
│   │   ├──  movements.ts       # Servicio de movimientos
│   │   ├──  products.ts        # Servicio de productos
│   │   ├──  reports.ts         # Servicio de reportes
│   │   ├──  suppliers.ts       # Servicio de proveedores
│   │   └──  users.ts           # Servicio de usuarios
│   │
│   └── 📁 types/                 # Definiciones TypeScript
│       ├──  entities.ts        # Tipos de entidades
│       ├──  movement.d.ts      # Tipos de movimientos
│       ├──  product.d.ts       # Tipos de productos
│       └──  supplier.d.ts      # Tipos de proveedores
│
├── 📁 data/                      # Datos mock y estáticos
│   ├── 📄 alerts.json            # Datos de alertas
│   ├── 📄 batches.json           # Datos de lotes
│   ├── 📄 movements.json         # Datos de movimientos
│   ├── 📄 products.json          # Datos de productos
│   ├── 📄 suppliers.json         # Datos de proveedores
│   └── 📄 users.json             # Datos de usuarios
│
├── 📄 astro.config.mjs           # Configuración de Astro
├── 📄 package.json               # Dependencias y scripts
├── 📄 tailwind.config.cjs        # Configuración de Tailwind
├── 📄 tsconfig.json              # Configuración de TypeScript
├── 📄 PROJECT_AUDIT.md           # Auditoría del proyecto
└── 📄 README.md                  # Este archivo
```

### 🔄 Flujo de Datos

```
Usuario → Página → Componente → Servicio → Datos (Mock/API)
   ↓
Autenticación → Autorización → Dashboard → Módulos
   ↓
Logs → Monitoreo → Reportes → Analytics
```

---

##  Seguridad y Autenticación

### 🛡️ Medidas de Seguridad Implementadas

#### Autenticación
- ✅ **Validación de Credenciales**: Verificación de usuario y contraseña
- ✅ **Control de Sesiones**: Persistencia con localStorage
- ✅ **Redirección Segura**: Navegación controlada por rol
- ✅ **Logout Automático**: Limpieza de sesión al cerrar

#### Autorización
- ✅ **Control de Acceso por Rol**: Permisos específicos por página
- ✅ **Validación de Rutas**: Verificación de acceso antes de renderizar
- ✅ **Protección de Recursos**: Control de acceso a datos sensibles

#### Validaciones
- ✅ **Client-Side**: Validaciones en formularios
- ⏳ **Server-Side**: Validaciones en backend (futuro)
- ✅ **Sanitización**: Limpieza de datos de entrada
- ✅ **Escape de HTML**: Prevención de XSS

### 🔐 Configuración de Seguridad

```javascript
// Configuración de autenticación
const authConfig = {
  sessionTimeout: 30 * 60 * 1000, // 30 minutos
  maxLoginAttempts: 5,
  lockoutDuration: 15 * 60 * 1000, // 15 minutos
  passwordPolicy: {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true
  }
};
```

### 🚨 Logs de Seguridad

```javascript
// Estructura de logs de seguridad
const securityLog = {
  timestamp: new Date().toISOString(),
  userId: 'user123',
  action: 'LOGIN_ATTEMPT',
  ipAddress: '192.168.1.1',
  userAgent: 'Mozilla/5.0...',
  success: true,
  details: {
    role: 'Administrador',
    permissions: ['all']
  }
};
```

---

##  Monitoreo y Logs

### 📊 Métricas de Rendimiento

#### Métricas del Sistema
- **Tiempo de Carga**: < 2 segundos
- **Tiempo de Respuesta**: < 500ms
- **Disponibilidad**: 99.9%
- **Uptime**: Monitoreo continuo

#### Métricas de Usuario
- **Usuarios Activos**: Conteo en tiempo real
- **Sesiones Activas**: Duración y frecuencia
- **Páginas Visitadas**: Análisis de navegación
- **Errores**: Tasa de errores por página

### 📝 Sistema de Logs

```javascript
// Configuración de logs
const logConfig = {
  levels: ['error', 'warn', 'info', 'debug'],
  format: 'json',
  timestamp: true,
  rotation: {
    maxSize: '10MB',
    maxFiles: 5
  }
};
```

### 🔍 Monitoreo en Tiempo Real

```javascript
// Métricas en tiempo real
const metrics = {
  system: {
    cpu: 45.2,
    memory: 67.8,
    disk: 23.1
  },
  application: {
    requestsPerMinute: 150,
    averageResponseTime: 245,
    errorRate: 0.02
  },
  users: {
    active: 23,
    total: 156,
    newToday: 5
  }
};
```

---

## 🤝 Contribución

###  Cómo Contribuir

1. **Fork del Repositorio**
   ```bash
   git clone https://github.com/tu-usuario/MaestranzaPro.git
   cd MaestranzaPro
   ```

2. **Crear Rama de Desarrollo**
   ```bash
   git checkout -b feature/nueva-funcionalidad
   # o
   git checkout -b fix/correccion-bug
   ```

3. **Desarrollo**
   ```bash
   npm install
   npm run dev
   ```

4. **Testing**
   ```bash
   npm run lint
   npm run test
   ```

5. **Commit y Push**
   ```bash
   git add .
   git commit -m "feat: agregar nueva funcionalidad"
   git push origin feature/nueva-funcionalidad
   ```

6. **Pull Request**
   - Crear PR en GitHub
   - Describir cambios detalladamente
   - Incluir screenshots si aplica

### 📋 Guías de Contribución

#### Estándares de Código
- **ESLint**: Configuración estricta
- **Prettier**: Formateo automático
- **TypeScript**: Tipado estricto
- **Conventional Commits**: Formato de commits

#### Estructura de Commits
```bash
feat: nueva funcionalidad
fix: corrección de bug
docs: actualización de documentación
style: cambios de formato
refactor: refactorización de código
test: agregar o modificar tests
chore: tareas de mantenimiento
```

#### Revisión de Código
- **Code Review**: Obligatorio para todos los PRs
- **Testing**: Tests deben pasar
- **Documentación**: Actualizar docs si es necesario
- **Performance**: Verificar impacto en rendimiento

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

###  Términos de la Licencia MIT

```
MIT License

Copyright (c) 2024 Maestranzas Unidos S.A.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Equipo de Desarrollo

###  Maestranzas Unidos S.A.

**Desarrollado con ❤️ por el equipo de desarrollo de Maestranzas Unidos S.A.**

### 👥 Contribuidores

| Rol | Nombre | Especialidad | Contacto |
|-----|--------|--------------|----------|
| 🎯 **Project Manager** | [Tu Nombre] | Gestión de Proyectos | [email@maestranza.com] |
| 💻 **Frontend Lead** | [Tu Nombre] | Astro, React, TypeScript | [email@maestranza.com] |
|  **UI/UX Designer** | [Tu Nombre] | Diseño, UX, Prototipado | [email@maestranza.com] |
| 🔧 **Backend Developer** | [Tu Nombre] | Node.js, APIs, Base de Datos | [email@maestranza.com] |
| 🧪 **QA Engineer** | [Tu Nombre] | Testing, Automatización | [email@maestranza.com] |

### 📞 Contacto

- **Email**: [contacto@maestranza.com]
- **Teléfono**: [+56 2 2345 6789]
- **Dirección**: [Dirección de la empresa]
- **Sitio Web**: [https://maestranza.com]

### 🌐 Redes Sociales

- **LinkedIn**: [https://linkedin.com/company/maestranzas-unidos]
- **Twitter**: [https://twitter.com/maestranzas]
- **GitHub**: [https://github.com/maestranzas-unidos]

---

## 🎉 Agradecimientos

### 🛠️ Tecnologías y Librerías

- **[Astro](https://astro.build)** - Framework web moderno
- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utility-first
- **[MaestranzaPro](https://flowbite.com)** - Componentes UI
- **[ApexCharts](https://apexcharts.com)** - Gráficos interactivos
- **[Faker.js](https://fakerjs.dev)** - Generación de datos de prueba

###  Recursos de Diseño

- **[Heroicons](https://heroicons.com)** - Iconos SVG
- **[Inter Font](https://rsms.me/inter)** - Tipografía
- **[Unsplash](https://unsplash.com)** - Imágenes de stock

### 📚 Documentación y Recursos

- **[Astro Docs](https://docs.astro.build)** - Documentación oficial
- **[Tailwind CSS Docs](https://tailwindcss.com/docs)** - Guías de Tailwind
- **[TypeScript Handbook](https://www.typescriptlang.org/docs)** - Guía de TypeScript

---

<div align="center">

**¡Gracias por usar MaestranzaPro! 🚀**

Si este proyecto te ha sido útil, considera darle una ⭐ en GitHub!!!!

[⬆️ Volver al Inicio](#-maestranzapro---sistema-de-gestión-de-inventario)

</div>

