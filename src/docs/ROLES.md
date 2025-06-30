# Roles y Permisos - Sistema de Gestión de Inventario

## 📋 Descripción General
Este documento define los roles de usuario, sus responsabilidades y permisos dentro del sistema de gestión de inventario de Maestranzas Unidos S.A.

## 👥 Roles del Sistema

### 1. Administrador del Sistema
**Descripción**: Acceso completo al sistema con capacidades de configuración y supervisión.

**Responsabilidades**:
- Configuración general del sistema
- Gestión de usuarios y permisos
- Supervisión de todas las operaciones
- Configuración de parámetros del sistema
- Generación de reportes ejecutivos

**Páginas Permitidas**:
- `/dashboard-administrador` - Dashboard principal
- `/inventory-registration` - Registro de inventario
- `/inventory-movement` - Movimientos de inventario
- `/low-stock-alerts` - Alertas de stock bajo
- `/suppliers-management` - Gestión de proveedores
- `/purchase-history` - Historial de compras
- `/batch-control` - Control de lotes
- `/kits-management` - Gestión de kits
- `/inventory-reports` - Reportes de inventario
- `/energy-supply-control` - Control de suministro de energía
- `/inventory-tracking` - Rastreo de inventario
- `/inventory-threshold-notifications` - Notificaciones de umbral
- `/inventory-categorization` - Categorización de inventario
- `/purchase-integration` - Integración de compras
- `/crud/users` - Gestión de usuarios
- `/crud/products` - Gestión de productos
- `/settings` - Configuraciones
- `/system-logs` - Logs del sistema
- `/ventas` - Gestión de ventas
- `/inbox` - Bandeja de entrada
- `/precios` - Gestión de precios
- `/facturacion` - Facturación

**Credenciales de Prueba**:
- Usuario: `admin`
- Contraseña: `admin123`

---

### 2. Gestor de Inventario
**Descripción**: Responsable de la gestión completa del inventario y su control.

**Responsabilidades**:
- Registro y actualización de productos
- Control de movimientos de inventario
- Gestión de alertas de stock
- Control de lotes y vencimientos
- Categorización de productos
- Generación de reportes de inventario

**Páginas Permitidas**:
- `/dashboard-gestor-inventario` - Dashboard principal
- `/inventory-registration` - Registro de inventario
- `/inventory-movement` - Movimientos de inventario
- `/low-stock-alerts` - Alertas de stock bajo
- `/batch-control` - Control de lotes
- `/inventory-reports` - Reportes de inventario
- `/inventory-threshold-notifications` - Notificaciones de umbral
- `/inventory-categorization` - Categorización de inventario
- `/inventory-tracking` - Rastreo de inventario
- `/crud/products` - Gestión de productos

**Credenciales de Prueba**:
- Usuario: `gestor`
- Contraseña: `gestor123`

---

### 3. Comprador
**Descripción**: Responsable de la gestión de proveedores y procesos de compra.

**Responsabilidades**:
- Gestión de proveedores
- Procesamiento de órdenes de compra
- Evaluación de proveedores
- Historial de compras
- Integración de compras con inventario

**Páginas Permitidas**:
- `/dashboard-comprador` - Dashboard principal
- `/suppliers-management` - Gestión de proveedores
- `/purchase-history` - Historial de compras
- `/purchase-integration` - Integración de compras
- `/inventory-reports` - Reportes de inventario
- `/inbox` - Bandeja de entrada

**Credenciales de Prueba**:
- Usuario: `comprador`
- Contraseña: `comprador123`

---

### 4. Encargado de Logística
**Descripción**: Responsable del rastreo y movimientos físicos del inventario.

**Responsabilidades**:
- Rastreo de inventario en tiempo real
- Control de movimientos físicos
- Gestión de ubicaciones
- Coordinación de entregas
- Control de flujo de materiales

**Páginas Permitidas**:
- `/dashboard-encargado-logistica` - Dashboard principal
- `/inventory-tracking` - Rastreo de inventario
- `/inventory-movement` - Movimientos de inventario
- `/inventory-registration` - Registro de inventario
- `/low-stock-alerts` - Alertas de stock bajo
- `/inventory-reports` - Reportes de inventario

**Credenciales de Prueba**:
- Usuario: `logistica`
- Contraseña: `logistica123`

---

### 5. Auditor de Inventario
**Descripción**: Responsable de la auditoría y verificación del inventario.

**Responsabilidades**:
- Auditorías de inventario
- Verificación de precisión de datos
- Generación de reportes de auditoría
- Control de cumplimiento
- Análisis de discrepancias

**Páginas Permitidas**:
- `/dashboard-auditor-inventario` - Dashboard principal
- `/inventory-reports` - Reportes de inventario
- `/inventory-registration` - Registro de inventario
- `/inventory-movement` - Movimientos de inventario
- `/batch-control` - Control de lotes
- `/inventory-categorization` - Categorización de inventario

**Credenciales de Prueba**:
- Usuario: `auditor`
- Contraseña: `auditor123`

---

### 6. Jefe de Producción
**Descripción**: Responsable de la gestión de kits y procesos de producción.

**Responsabilidades**:
- Gestión de kits de mantenimiento
- Control de materiales para producción
- Coordinación de necesidades de inventario
- Optimización de procesos productivos
- Control de calidad de materiales

**Páginas Permitidas**:
- `/dashboard-jefe-produccion` - Dashboard principal
- `/kits-management` - Gestión de kits
- `/inventory-registration` - Registro de inventario
- `/inventory-movement` - Movimientos de inventario
- `/inventory-reports` - Reportes de inventario
- `/batch-control` - Control de lotes

**Credenciales de Prueba**:
- Usuario: `produccion`
- Contraseña: `produccion123`

---

### 7. Gerente de Proyectos
**Descripción**: Responsable de la integración de compras y gestión de proyectos.

**Responsabilidades**:
- Integración de compras con proyectos
- Gestión de presupuestos de materiales
- Coordinación de necesidades de proyecto
- Control de entregas para proyectos
- Análisis de costos de proyecto

**Páginas Permitidas**:
- `/dashboard-gerente-proyectos` - Dashboard principal
- `/purchase-integration` - Integración de compras
- `/purchase-history` - Historial de compras
- `/inventory-reports` - Reportes de inventario
- `/kits-management` - Gestión de kits
- `/suppliers-management` - Gestión de proveedores

**Credenciales de Prueba**:
- Usuario: `proyectos`
- Contraseña: `proyectos123`

---

### 8. Usuario Final
**Descripción**: Usuario básico con acceso limitado para registro de inventario.

**Responsabilidades**:
- Registro básico de inventario
- Consulta de stock disponible
- Reporte de movimientos básicos
- Acceso a alertas de stock

**Páginas Permitidas**:
- `/dashboard-usuario-final` - Dashboard principal
- `/inventory-registration` - Registro de inventario
- `/inventory-movement` - Movimientos de inventario
- `/low-stock-alerts` - Alertas de stock bajo

**Credenciales de Prueba**:
- Usuario: `usuario`
- Contraseña: `usuario123`

---

## 🔐 Sistema de Autenticación

### Flujo de Login
1. Usuario accede a `/login`
2. Selecciona su rol del sistema
3. Ingresa credenciales (usuario y contraseña)
4. Sistema valida credenciales
5. Redirige al dashboard correspondiente

### Gestión de Sesión
- **Almacenamiento**: localStorage
- **Duración**: Hasta cierre de sesión manual
- **Persistencia**: Entre navegaciones
- **Seguridad**: Validación en cada página

### Control de Acceso
- Verificación automática de permisos por página
- Redirección automática si no hay acceso
- Logs de acceso y actividad
- Bloqueo de rutas no autorizadas

## 📊 Matriz de Permisos

| Funcionalidad | Admin | Gestor | Comprador | Logística | Auditor | Producción | Proyectos | Usuario |
|---------------|-------|--------|-----------|-----------|---------|------------|-----------|---------|
| Dashboard | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Registro Inventario | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Movimientos | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Alertas Stock | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |
| Proveedores | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Compras | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Reportes | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Control Lotes | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ |
| Kits | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ |
| Configuración | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

## 🚨 Políticas de Seguridad

### Contraseñas
- Mínimo 8 caracteres
- Combinación de mayúsculas, minúsculas y números
- Cambio obligatorio cada 90 días
- No reutilización de contraseñas anteriores

### Sesiones
- Timeout automático después de 30 minutos de inactividad
- Máximo 3 sesiones concurrentes por usuario
- Logout automático al cerrar navegador

### Auditoría
- Registro de todos los accesos
- Log de acciones críticas
- Reportes de actividad mensual
- Alertas de acceso sospechoso

## 📞 Contacto y Soporte

### Administrador del Sistema
- **Email**: admin@maestranzasunidos.cl
- **Teléfono**: +56 52 234 5678 ext. 101

### Soporte Técnico
- **Email**: soporte@maestranzasunidos.cl
- **Teléfono**: +56 52 234 5678 ext. 102
- **Horario**: Lunes a Viernes 8:00 - 18:00

---
*Documento actualizado: 29 de Junio, 2024*
*Versión: 1.0* 