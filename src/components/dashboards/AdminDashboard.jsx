import React, { useState, useEffect } from 'react';

export default function AdminDashboard({ session }) {
	const [metrics, setMetrics] = useState({
		totalUsers: 32,
		activeUsers: 24,
		systemHealth: 'Excelente',
		uptime: '99.8%',
		pendingApprovals: 2,
		newUsersThisMonth: 3
	});

	const [recentActivities, setRecentActivities] = useState([
		{
			user: "Ana Martínez",
			action: "Configuró nuevos permisos de usuario",
			timestamp: "2024-01-15T10:30:00Z",
			type: "configuracion"
		},
		{
			user: "Carlos Ramírez",
			action: "Realizó backup del sistema",
			timestamp: "2024-01-15T02:00:00Z",
			type: "mantenimiento"
		},
		{
			user: "Sistema",
			action: "Actualización automática completada",
			timestamp: "2024-01-15T01:30:00Z",
			type: "sistema"
		}
	]);

	const [systemMetrics, setSystemMetrics] = useState({
		cpuUsage: 45,
		memoryUsage: 62,
		diskUsage: 78,
		networkTraffic: 23
	});

	useEffect(() => {
		// Simular actualización de métricas en tiempo real
		const interval = setInterval(() => {
			setSystemMetrics(prev => ({
				cpuUsage: Math.floor(Math.random() * 30) + 30,
				memoryUsage: Math.floor(Math.random() * 20) + 50,
				diskUsage: Math.floor(Math.random() * 10) + 70,
				networkTraffic: Math.floor(Math.random() * 20) + 15
			}));
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleString('es-CL');
	};

	const getActivityIcon = (type) => {
		const icons = {
			configuracion: '⚙️',
			mantenimiento: '🔧',
			sistema: '🖥️',
			usuario: '👤'
		};
		return icons[type] || '📝';
	};

	return (
		<div className="space-y-6">
			{/* Métricas del Sistema */}
			<div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">
				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{metrics.uptime}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Uptime del Sistema
							</p>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{metrics.activeUsers}/{metrics.totalUsers}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Usuarios Activos
							</p>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-yellow-500 bg-yellow-100 rounded-lg dark:bg-yellow-800 dark:text-yellow-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{metrics.pendingApprovals}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Aprobaciones Pendientes
							</p>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-purple-500 bg-purple-100 rounded-lg dark:bg-purple-800 dark:text-purple-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{metrics.newUsersThisMonth}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Nuevos Usuarios
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Estado del Sistema y Actividades */}
			<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
				{/* Estado del Sistema */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Estado del Sistema
					</h3>
					
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Estado General</span>
							<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-green-800 bg-green-100 dark:bg-green-700 dark:text-green-100">
								{metrics.systemHealth}
							</span>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">CPU</span>
							<div className="flex items-center">
								<div className="w-16 bg-gray-200 rounded-full h-2 mr-2 dark:bg-gray-700">
									<div className="bg-blue-600 h-2 rounded-full" style={{width: `${systemMetrics.cpuUsage}%`}}></div>
								</div>
								<span className="text-sm text-gray-600 dark:text-gray-400">{systemMetrics.cpuUsage}%</span>
							</div>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Memoria</span>
							<div className="flex items-center">
								<div className="w-16 bg-gray-200 rounded-full h-2 mr-2 dark:bg-gray-700">
									<div className="bg-green-600 h-2 rounded-full" style={{width: `${systemMetrics.memoryUsage}%`}}></div>
								</div>
								<span className="text-sm text-gray-600 dark:text-gray-400">{systemMetrics.memoryUsage}%</span>
							</div>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Disco</span>
							<div className="flex items-center">
								<div className="w-16 bg-gray-200 rounded-full h-2 mr-2 dark:bg-gray-700">
									<div className="bg-yellow-600 h-2 rounded-full" style={{width: `${systemMetrics.diskUsage}%`}}></div>
								</div>
								<span className="text-sm text-gray-600 dark:text-gray-400">{systemMetrics.diskUsage}%</span>
							</div>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Red</span>
							<div className="flex items-center">
								<div className="w-16 bg-gray-200 rounded-full h-2 mr-2 dark:bg-gray-700">
									<div className="bg-purple-600 h-2 rounded-full" style={{width: `${systemMetrics.networkTraffic}%`}}></div>
								</div>
								<span className="text-sm text-gray-600 dark:text-gray-400">{systemMetrics.networkTraffic}%</span>
							</div>
						</div>
					</div>
				</div>

				{/* Actividades Recientes */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Actividades Recientes
					</h3>
					
					<div className="space-y-4">
						{recentActivities.map((activity, index) => (
							<div key={index} className="flex items-start space-x-3">
								<div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center dark:bg-blue-800">
									<span className="text-sm">{getActivityIcon(activity.type)}</span>
								</div>
								<div className="flex-1 min-w-0">
									<p className="text-sm font-medium text-gray-900 dark:text-white">
										{activity.user}
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										{activity.action}
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-500">
										{formatDate(activity.timestamp)}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Acciones Rápidas */}
			<div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 p-6">
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
					Acciones Rápidas
				</h3>
				
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Gestión de Usuarios</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Administrar usuarios del sistema</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Reportes del Sistema</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Ver reportes y estadísticas</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Configuración</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Configurar sistema</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Logs del Sistema</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Ver logs y auditoría</p>
							</div>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
} 