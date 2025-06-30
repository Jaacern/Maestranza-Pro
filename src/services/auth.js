// Servicio de autenticación para Maestranzas Unidos S.A.
import jwt from 'jsonwebtoken';

// Configuración de JWT
const SECRET = process.env.JWT_SECRET || 'maestranzas-unidos-secret-key-2024';
const COOKIE_NAME = 'maestranza-session';

// Credenciales de prueba por rol
const CREDENTIALS = {
	'Administrador': { username: 'admin', password: 'admin123' },
	'GestorInventario': { username: 'gestor', password: 'gestor123' },
	'Comprador': { username: 'comprador', password: 'comprador123' },
	'EncargadoLogistica': { username: 'logistica', password: 'logistica123' },
	'AuditorInventario': { username: 'auditor', password: 'auditor123' },
	'JefeProduccion': { username: 'produccion', password: 'produccion123' },
	'GerenteProyectos': { username: 'proyectos', password: 'proyectos123' },
	'UsuarioFinal': { username: 'usuario', password: 'usuario123' }
};

/**
 * Obtiene la sesión del usuario desde las cookies
 * @param {Request} request - Objeto request de Astro
 * @returns {Object|null} - Sesión del usuario o null si no existe
 */
export async function getSession(request) {
	try {
		const cookie = request.headers.get('cookie');
		if (!cookie) return null;

		const token = cookie
			.split(';')
			.find(c => c.trim().startsWith(`${COOKIE_NAME}=`))
			?.split('=')[1];

		if (!token) return null;

		const decoded = jwt.verify(token, SECRET);
		return decoded;
	} catch (error) {
		console.error('Error al verificar sesión:', error);
		return null;
	}
}

/**
 * Autentica al usuario y genera un token JWT
 * @param {string} username - Nombre de usuario
 * @param {string} password - Contraseña
 * @param {string} role - Rol del usuario
 * @returns {Object|null} - Token JWT o null si las credenciales son incorrectas
 */
export async function login(username, password, role) {
	try {
		// Verificar credenciales
		const roleCredentials = CREDENTIALS[role];
		if (!roleCredentials) {
			return { success: false, error: 'Rol no válido' };
		}

		if (username !== roleCredentials.username || password !== roleCredentials.password) {
			return { success: false, error: 'Credenciales incorrectas' };
		}

		// Generar token JWT
		const payload = {
			userId: username,
			role: role,
			username: username,
			iat: Math.floor(Date.now() / 1000),
			exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 horas
		};

		const token = jwt.sign(payload, SECRET);

		return {
			success: true,
			token,
			user: {
				userId: username,
				role: role,
				username: username
			}
		};
	} catch (error) {
		console.error('Error en login:', error);
		return { success: false, error: 'Error interno del servidor' };
	}
}

/**
 * Cierra la sesión del usuario
 * @returns {Object} - Respuesta de logout
 */
export function logout() {
	return {
		success: true,
		message: 'Sesión cerrada correctamente'
	};
}

/**
 * Verifica si un usuario tiene acceso a una ruta específica
 * @param {string} role - Rol del usuario
 * @param {string} route - Ruta a verificar
 * @returns {boolean} - True si tiene acceso, false en caso contrario
 */
export function hasAccess(role, route) {
	const rolePermissions = {
		'Administrador': [
			'/dashboard', '/inventory-registration', '/inventory-movement', 
			'/low-stock-alerts', '/suppliers-management', '/purchase-history',
			'/batch-control', '/kits-management', '/inventory-reports',
			'/energy-supply-control', '/inventory-tracking', 
			'/inventory-threshold-notifications', '/inventory-categorization',
			'/purchase-integration', '/crud/users', '/crud/products',
			'/settings', '/system-logs', '/ventas', '/inbox', '/precios', '/facturacion'
		],
		'GestorInventario': [
			'/dashboard', '/inventory-registration', '/inventory-movement',
			'/low-stock-alerts', '/batch-control', '/inventory-reports',
			'/inventory-threshold-notifications', '/inventory-categorization',
			'/inventory-tracking', '/crud/products'
		],
		'Comprador': [
			'/dashboard', '/suppliers-management', '/purchase-history', '/purchase-integration',
			'/inventory-reports', '/inbox'
		],
		'EncargadoLogistica': [
			'/dashboard', '/inventory-tracking', '/inventory-movement', '/inventory-registration',
			'/low-stock-alerts', '/inventory-reports'
		],
		'JefeProduccion': [
			'/dashboard', '/kits-management', '/inventory-registration', '/inventory-movement',
			'/inventory-reports', '/batch-control'
		],
		'AuditorInventario': [
			'/dashboard', '/inventory-reports', '/inventory-registration', '/inventory-movement',
			'/batch-control', '/inventory-categorization'
		],
		'GerenteProyectos': [
			'/dashboard', '/purchase-integration', '/purchase-history', '/inventory-reports',
			'/kits-management', '/suppliers-management'
		],
		'UsuarioFinal': [
			'/dashboard', '/inventory-registration', '/inventory-movement', '/low-stock-alerts'
		]
	};

	const allowedRoutes = rolePermissions[role] || [];
	return allowedRoutes.includes(route);
}

/**
 * Obtiene el nombre de visualización del rol
 * @param {string} role - Rol del usuario
 * @returns {string} - Nombre de visualización del rol
 */
export function getRoleDisplayName(role) {
	const roleNames = {
		'Administrador': 'Administrador del Sistema',
		'GestorInventario': 'Gestor de Inventario',
		'Comprador': 'Comprador',
		'EncargadoLogistica': 'Encargado de Logística',
		'AuditorInventario': 'Auditor de Inventario',
		'JefeProduccion': 'Jefe de Producción',
		'GerenteProyectos': 'Gerente de Proyectos',
		'UsuarioFinal': 'Usuario Final'
	};

	return roleNames[role] || role;
}

/**
 * Obtiene las credenciales de prueba para un rol
 * @param {string} role - Rol del usuario
 * @returns {Object|null} - Credenciales o null si no existe
 */
export function getTestCredentials(role) {
	return CREDENTIALS[role] || null;
}

/**
 * Obtiene todos los roles disponibles
 * @returns {Array} - Lista de roles disponibles
 */
export function getAvailableRoles() {
	return Object.keys(CREDENTIALS);
} 