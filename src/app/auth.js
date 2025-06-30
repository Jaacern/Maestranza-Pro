// Script de autenticación para Maestranzas Unidos S.A.

// Configuración de roles y sus permisos
const ROLES_CONFIG = {
	Administrador: {
		name: "Administrador del Sistema",
		redirectTo: "/dashboard-administrador",
		allowedPages: [
			"/dashboard-administrador", "/inventory-registration", "/inventory-movement", 
			"/low-stock-alerts", "/suppliers-management", "/purchase-history",
			"/batch-control", "/kits-management", "/inventory-reports",
			"/energy-supply-control", "/inventory-tracking", 
			"/inventory-threshold-notifications", "/inventory-categorization",
			"/purchase-integration", "/crud/users", "/crud/products",
			"/settings", "/system-logs", "/ventas", "/inbox", "/precios", "/facturacion"
		]
	},
	GestorInventario: {
		name: "Gestor de Inventario",
		redirectTo: "/dashboard-gestor-inventario",
		allowedPages: [
			"/dashboard-gestor-inventario", "/inventory-registration", "/inventory-movement",
			"/low-stock-alerts", "/batch-control", "/inventory-reports",
			"/inventory-threshold-notifications", "/inventory-categorization",
			"/inventory-tracking", "/crud/products"
		]
	},
	Comprador: {
		name: "Comprador",
		redirectTo: "/dashboard-comprador",
		allowedPages: [
			"/dashboard-comprador", "/suppliers-management", "/purchase-history", "/purchase-integration",
			"/inventory-reports", "/inbox"
		]
	},
	EncargadoLogistica: {
		name: "Encargado de Logística",
		redirectTo: "/dashboard-encargado-logistica",
		allowedPages: [
			"/dashboard-encargado-logistica", "/inventory-tracking", "/inventory-movement", "/inventory-registration",
			"/low-stock-alerts", "/inventory-reports"
		]
	},
	JefeProduccion: {
		name: "Jefe de Producción",
		redirectTo: "/dashboard-jefe-produccion",
		allowedPages: [
			"/dashboard-jefe-produccion", "/kits-management", "/inventory-registration", "/inventory-movement",
			"/inventory-reports", "/batch-control"
		]
	},
	AuditorInventario: {
		name: "Auditor de Inventario",
		redirectTo: "/dashboard-auditor-inventario",
		allowedPages: [
			"/dashboard-auditor-inventario", "/inventory-reports", "/inventory-registration", "/inventory-movement",
			"/batch-control", "/inventory-categorization"
		]
	},
	GerenteProyectos: {
		name: "Gerente de Proyectos",
		redirectTo: "/dashboard-gerente-proyectos",
		allowedPages: [
			"/dashboard-gerente-proyectos", "/purchase-integration", "/purchase-history", "/inventory-reports",
			"/kits-management", "/suppliers-management"
		]
	},
	UsuarioFinal: {
		name: "Usuario Final",
		redirectTo: "/dashboard-usuario-final",
		allowedPages: [
			"/dashboard-usuario-final", "/inventory-registration", "/inventory-movement", "/low-stock-alerts"
		]
	}
};

// Función para verificar si el usuario está autenticado
function isAuthenticated() {
	const currentUser = localStorage.getItem('currentUser');
	return currentUser !== null;
}

// Función para obtener el usuario actual
function getCurrentUser() {
	const currentUser = localStorage.getItem('currentUser');
	return currentUser ? JSON.parse(currentUser) : null;
}

// Función para verificar si el usuario tiene acceso a una página
function hasAccessToPage(pagePath) {
	const currentUser = getCurrentUser();
	if (!currentUser) return false;
	
	const userRole = currentUser.role;
	const roleConfig = ROLES_CONFIG[userRole];
	
	if (!roleConfig) return false;
	
	return roleConfig.allowedPages.includes(pagePath);
}

// Función para redirigir según el rol
function redirectByRole() {
	const currentUser = getCurrentUser();
	if (!currentUser) {
		window.location.href = '/login';
		return;
	}
	
	const roleConfig = ROLES_CONFIG[currentUser.role];
	if (roleConfig) {
		window.location.href = roleConfig.redirectTo;
	} else {
		window.location.href = '/login';
	}
}

// Función para cerrar sesión
function logout() {
	localStorage.removeItem('currentUser');
	window.location.href = '/login';
}

// Función para verificar acceso en cada página
function checkPageAccess() {
	const currentPath = window.location.pathname;
	
	// Páginas públicas que no requieren autenticación
	const publicPages = ['/login', '/', '/index.html'];
	
	if (publicPages.includes(currentPath)) {
		return; // No hacer nada en páginas públicas
	}
	
	// Verificar si está autenticado
	if (!isAuthenticated()) {
		window.location.href = '/login';
		return;
	}
	
	// Verificar si tiene acceso a la página actual
	if (!hasAccessToPage(currentPath)) {
		alert('No tienes permisos para acceder a esta página.');
		redirectByRole();
		return;
	}
	
	// Actualizar la interfaz con información del usuario
	updateUserInterface();
}

// Función para actualizar la interfaz con información del usuario
function updateUserInterface() {
	const currentUser = getCurrentUser();
	if (!currentUser) return;
	
	// Actualizar el nombre del usuario en el navbar si existe
	const userMenuButton = document.getElementById('user-menu-button-2');
	if (userMenuButton) {
		const userPhoto = userMenuButton.querySelector('img');
		if (userPhoto) {
			userPhoto.alt = currentUser.name;
		}
	}
	
	// Actualizar información en el dropdown del usuario
	const dropdownUser = document.getElementById('dropdown-2');
	if (dropdownUser) {
		const userNameElement = dropdownUser.querySelector('.text-sm.text-gray-900');
		const userEmailElement = dropdownUser.querySelector('.text-sm.font-medium');
		
		if (userNameElement) {
			userNameElement.textContent = currentUser.name;
		}
		if (userEmailElement) {
			userEmailElement.textContent = currentUser.email;
		}
	}
	
	// Actualizar el título de la página con el rol
	const pageTitle = document.querySelector('h1');
	if (pageTitle && currentUser.roleName) {
		const roleConfig = ROLES_CONFIG[currentUser.role];
		if (roleConfig && pageTitle.textContent.includes('Dashboard')) {
			pageTitle.textContent = `Dashboard - ${roleConfig.name}`;
		}
	}
}

// Función para mostrar información del usuario actual
function showCurrentUserInfo() {
	const currentUser = getCurrentUser();
	if (!currentUser) return;
	
	console.log('Usuario actual:', {
		nombre: currentUser.name,
		email: currentUser.email,
		rol: currentUser.roleName,
		rolId: currentUser.role
	});
}

// Función para obtener el dashboard específico según el rol
function getDashboardByRole() {
	const currentUser = getCurrentUser();
	if (!currentUser) return '/login';
	
	const roleConfig = ROLES_CONFIG[currentUser.role];
	return roleConfig ? roleConfig.redirectTo : '/login';
}

// Función para verificar si el usuario puede acceder a una funcionalidad específica
function canAccessFeature(feature) {
	const currentUser = getCurrentUser();
	if (!currentUser) return false;
	
	const roleConfig = ROLES_CONFIG[currentUser.role];
	if (!roleConfig) return false;
	
	// Mapeo de características a páginas
	const featureToPage = {
		'users': '/crud/users',
		'inventory': '/inventory-registration',
		'suppliers': '/suppliers-management',
		'reports': '/inventory-reports',
		'purchases': '/purchase-history',
		'kits': '/kits-management',
		'tracking': '/inventory-tracking',
		'energy': '/energy-supply-control',
		'logs': '/system-logs',
		'settings': '/settings'
	};
	
	const requiredPage = featureToPage[feature];
	return requiredPage ? roleConfig.allowedPages.includes(requiredPage) : false;
}

// Función para mostrar/ocultar elementos según el rol
function updateUIByRole() {
	const currentUser = getCurrentUser();
	if (!currentUser) return;
	
	const roleConfig = ROLES_CONFIG[currentUser.role];
	if (!roleConfig) return;
	
	// Ocultar elementos que no corresponden al rol
	const allLinks = document.querySelectorAll('a[href]');
	allLinks.forEach(link => {
		const href = link.getAttribute('href');
		if (href && href.startsWith('/') && !roleConfig.allowedPages.includes(href)) {
			link.style.display = 'none';
		}
	});
	
	// Mostrar información del rol en el dashboard
	const dashboardInfo = document.getElementById('dashboard-role-info');
	if (dashboardInfo) {
		dashboardInfo.textContent = `Rol: ${roleConfig.name}`;
	}
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
	checkPageAccess();
	updateUserInterface();
	updateUIByRole();
	
	// Agregar listener para el botón de logout
	const logoutButtons = document.querySelectorAll('a[href="/login"]');
	logoutButtons.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			logout();
		});
	});
});

// Exportar funciones para uso global
window.Auth = {
	isAuthenticated,
	getCurrentUser,
	hasAccessToPage,
	redirectByRole,
	logout,
	checkPageAccess,
	showCurrentUserInfo,
	getDashboardByRole,
	canAccessFeature,
	updateUIByRole,
	ROLES_CONFIG
};

// Script de autenticación y gestión de roles
class AuthManager {
	constructor() {
		this.currentUser = null;
		this.currentRole = null;
		this.isAuthenticated = false;
		this.init();
	}

	init() {
		// Verificar si hay una sesión activa al cargar la página
		this.checkSession();
		
		// Configurar listeners para el formulario de login
		this.setupLoginForm();
		
		// Configurar listeners para el selector de roles
		this.setupRoleSelector();
		
		// Configurar logout
		this.setupLogout();
	}

	checkSession() {
		const user = localStorage.getItem('currentUser');
		const role = localStorage.getItem('currentRole');
		
		if (user && role) {
			this.currentUser = JSON.parse(user);
			this.currentRole = role;
			this.isAuthenticated = true;
			this.redirectToDashboard();
		} else {
			// Si no hay sesión y no estamos en login, redirigir
			if (!window.location.pathname.includes('/login')) {
				window.location.href = '/login';
			}
		}
	}

	setupRoleSelector() {
		const roleCards = document.querySelectorAll('.role-card');
		const loginForm = document.getElementById('loginForm');
		const roleInfo = document.getElementById('roleInfo');
		const selectedRoleDisplay = document.getElementById('selectedRoleDisplay');

		roleCards.forEach(card => {
			card.addEventListener('click', (e) => {
				// Remover selección previa
				roleCards.forEach(c => c.classList.remove('selected'));
				
				// Seleccionar nueva tarjeta
				card.classList.add('selected');
				
				const role = card.dataset.role;
				const roleName = card.querySelector('.role-name').textContent;
				const roleDescription = card.querySelector('.role-description').textContent;
				
				// Mostrar información del rol
				if (roleInfo) {
					roleInfo.innerHTML = `
						<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 dark:bg-blue-900/20 dark:border-blue-800">
							<h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">${roleName}</h3>
							<p class="text-blue-700 dark:text-blue-300 text-sm">${roleDescription}</p>
						</div>
					`;
				}
				
				if (selectedRoleDisplay) {
					selectedRoleDisplay.textContent = roleName;
				}
				
				// Mostrar formulario de login
				if (loginForm) {
					loginForm.style.display = 'block';
					loginForm.dataset.selectedRole = role;
				}
				
				// Guardar rol seleccionado
				this.currentRole = role;
			});
		});
	}

	setupLoginForm() {
		const loginForm = document.getElementById('loginForm');
		const loginButton = document.getElementById('loginButton');
		const loadingSpinner = document.getElementById('loadingSpinner');
		const errorMessage = document.getElementById('errorMessage');

		if (loginForm) {
			loginForm.addEventListener('submit', async (e) => {
				e.preventDefault();
				
				const selectedRole = loginForm.dataset.selectedRole;
				const username = document.getElementById('username').value;
				const password = document.getElementById('password').value;

				if (!selectedRole) {
					this.showError('Por favor selecciona un rol primero');
					return;
				}

				if (!username || !password) {
					this.showError('Por favor completa todos los campos');
					return;
				}

				// Mostrar loading
				if (loginButton) loginButton.disabled = true;
				if (loadingSpinner) loadingSpinner.style.display = 'block';

				try {
					// Simular autenticación (en un caso real, aquí iría la llamada a la API)
					const success = await this.authenticateUser(username, password, selectedRole);
					
					if (success) {
						// Guardar sesión
						this.currentUser = { username, role: selectedRole };
						this.isAuthenticated = true;
						
						localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
						
						// Mostrar mensaje de éxito
						this.showSuccess('¡Inicio de sesión exitoso! Redirigiendo...');
						
						// Redirigir después de un breve delay
						setTimeout(() => {
							this.redirectToDashboard();
						}, 1500);
					} else {
						this.showError('Credenciales incorrectas. Por favor intenta de nuevo.');
					}
				} catch (error) {
					this.showError('Error en la autenticación. Por favor intenta de nuevo.');
				} finally {
					// Ocultar loading
					if (loginButton) loginButton.disabled = false;
					if (loadingSpinner) loadingSpinner.style.display = 'none';
				}
			});
		}
	}

	async authenticateUser(username, password, role) {
		// Simular delay de red
		await new Promise(resolve => setTimeout(resolve, 1000));
		
		// Credenciales de ejemplo para cada rol
		const credentials = {
			'Administrador': { username: 'admin', password: 'admin123' },
			'GestorInventario': { username: 'gestor', password: 'gestor123' },
			'Comprador': { username: 'comprador', password: 'comprador123' },
			'EncargadoLogistica': { username: 'logistica', password: 'logistica123' },
			'AuditorInventario': { username: 'auditor', password: 'auditor123' },
			'JefeProduccion': { username: 'produccion', password: 'produccion123' },
			'GerenteProyectos': { username: 'proyectos', password: 'proyectos123' },
			'UsuarioFinal': { username: 'usuario', password: 'usuario123' }
		};
		
		const roleCredentials = credentials[role];
		
		if (roleCredentials && 
			username === roleCredentials.username && 
			password === roleCredentials.password) {
			return true;
		}
		
		return false;
	}

	redirectToDashboard() {
		const roleDashboards = {
			'Administrador': '/dashboard-administrador',
			'GestorInventario': '/dashboard-gestor-inventario',
			'Comprador': '/dashboard-comprador',
			'EncargadoLogistica': '/dashboard-encargado-logistica',
			'AuditorInventario': '/dashboard-auditor-inventario',
			'JefeProduccion': '/dashboard-jefe-produccion',
			'GerenteProyectos': '/dashboard-gerente-proyectos',
			'UsuarioFinal': '/dashboard-usuario-final'
		};
		
		const dashboardUrl = roleDashboards[this.currentRole] || '/dashboard';
		
		if (window.location.pathname !== dashboardUrl) {
			window.location.href = dashboardUrl;
		}
	}

	setupLogout() {
		const logoutButtons = document.querySelectorAll('.logout-button');
		
		logoutButtons.forEach(button => {
			button.addEventListener('click', (e) => {
				e.preventDefault();
				this.logout();
			});
		});
	}

	logout() {
		// Limpiar sesión
		this.currentUser = null;
		this.isAuthenticated = false;
		
		localStorage.removeItem('currentUser');
		
		// Redirigir a login
		window.location.href = '/login';
	}

	showError(message) {
		const errorMessage = document.getElementById('errorMessage');
		if (errorMessage) {
			errorMessage.textContent = message;
			errorMessage.style.display = 'block';
			
			// Ocultar después de 5 segundos
			setTimeout(() => {
				errorMessage.style.display = 'none';
			}, 5000);
		}
	}

	showSuccess(message) {
		const successMessage = document.getElementById('successMessage');
		if (successMessage) {
			successMessage.textContent = message;
			successMessage.style.display = 'block';
		}
	}

	// Método para verificar permisos de acceso a rutas
	checkRouteAccess(route) {
		const rolePermissions = {
			'/dashboard': ['Administrador', 'GestorInventario', 'AuditorInventario'],
			'/dashboard-administrador': ['Administrador'],
			'/dashboard-gestor-inventario': ['GestorInventario'],
			'/dashboard-comprador': ['Comprador'],
			'/dashboard-encargado-logistica': ['EncargadoLogistica'],
			'/dashboard-auditor-inventario': ['AuditorInventario'],
			'/dashboard-jefe-produccion': ['JefeProduccion'],
			'/dashboard-gerente-proyectos': ['GerenteProyectos'],
			'/dashboard-usuario-final': ['UsuarioFinal'],
			'/inventory-registration': ['Administrador', 'GestorInventario', 'UsuarioFinal'],
			'/inventory-movement': ['Administrador', 'GestorInventario'],
			'/low-stock-alerts': ['Administrador', 'GestorInventario'],
			'/suppliers-management': ['Administrador', 'Comprador'],
			'/purchase-history': ['Administrador', 'Comprador'],
			'/batch-control': ['Administrador', 'GestorInventario'],
			'/kits-management': ['Administrador', 'JefeProduccion'],
			'/inventory-reports': ['Administrador', 'AuditorInventario'],
			'/energy-supply-control': ['Administrador'],
			'/inventory-tracking': ['Administrador', 'EncargadoLogistica'],
			'/inventory-threshold-notifications': ['Administrador', 'GestorInventario'],
			'/inventory-categorization': ['Administrador', 'GestorInventario'],
			'/purchase-integration': ['Administrador', 'GerenteProyectos']
		};
		
		const allowedRoles = rolePermissions[route] || [];
		return allowedRoles.includes(this.currentRole);
	}

	// Método para actualizar la UI según el rol
	updateUIForRole() {
		if (!this.currentRole) return;
		
		// Actualizar nombre de usuario en el navbar
		const userNameElements = document.querySelectorAll('.user-name');
		userNameElements.forEach(element => {
			element.textContent = this.currentUser?.username || 'Usuario';
		});
		
		// Actualizar rol en el navbar
		const userRoleElements = document.querySelectorAll('.user-role');
		userRoleElements.forEach(element => {
			element.textContent = this.getRoleDisplayName(this.currentRole);
		});
		
		// Ocultar/mostrar elementos según permisos
		this.updateNavigationPermissions();
	}

	getRoleDisplayName(role) {
		const roleNames = {
			'Administrador': 'Administrador',
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

	updateNavigationPermissions() {
		// Ocultar elementos de navegación según permisos
		const navItems = document.querySelectorAll('[data-role-required]');
		
		navItems.forEach(item => {
			const requiredRoles = item.dataset.roleRequired.split(',');
			const hasAccess = requiredRoles.includes(this.currentRole);
			
			if (!hasAccess) {
				item.style.display = 'none';
			}
		});
	}
}

// Inicializar el gestor de autenticación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
	window.authManager = new AuthManager();
	
	// Actualizar UI si el usuario está autenticado
	if (window.authManager.isAuthenticated) {
		window.authManager.updateUIForRole();
	}
});

// Exportar para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
	module.exports = AuthManager;
} 