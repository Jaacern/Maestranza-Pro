import React, { useState, useEffect } from 'react';

export default function LogisticaDashboard({ session }) {
	const [logisticsMetrics, setLogisticsMetrics] = useState({
		activeDeliveries: 8,
		completedToday: 12,
		vehiclesAvailable: 5,
		totalDistance: 1250,
		pendingPickups: 3,
		averageDeliveryTime: 2.5
	});

	const [activeDeliveries, setActiveDeliveries] = useState([
		{
			id: "DEL-2024-001",
			destination: "Planta Norte - Santiago",
			driver: "Juan Pérez",
			vehicle: "Camión F-350",
			status: "en_ruta",
			estimatedArrival: "2024-01-15T16:30:00Z",
			items: 15
		},
		{
			id: "DEL-2024-002",
			destination: "Almacén Central - Valparaíso",
			driver: "María González",
			vehicle: "Furgón Sprinter",
			status: "cargando",
			estimatedArrival: "2024-01-15T18:00:00Z",
			items: 8
		},
		{
			id: "DEL-2024-003",
			destination: "Taller Sur - Concepción",
			driver: "Carlos Ramírez",
			vehicle: "Camión F-550",
			status: "programado",
			estimatedArrival: "2024-01-16T10:00:00Z",
			items: 22
		}
	]);

	const [vehicleStatus, setVehicleStatus] = useState([
		{
			id: "V001",
			type: "Camión F-350",
			status: "disponible",
			driver: "Juan Pérez",
			lastMaintenance: "2024-01-10"
		},
		{
			id: "V002",
			type: "Furgón Sprinter",
			status: "en_uso",
			driver: "María González",
			lastMaintenance: "2024-01-08"
		},
		{
			id: "V003",
			type: "Camión F-550",
			status: "mantenimiento",
			driver: null,
			lastMaintenance: "2024-01-15"
		}
	]);

	useEffect(() => {
		// Simular actualización de métricas en tiempo real
		const interval = setInterval(() => {
			setLogisticsMetrics(prev => ({
				...prev,
				totalDistance: prev.totalDistance + Math.floor(Math.random() * 50)
			}));
		}, 30000);

		return () => clearInterval(interval);
	}, []);

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleString('es-CL');
	};

	const getStatusColor = (status) => {
		const colors = {
			en_ruta: 'text-blue-600 bg-blue-100',
			cargando: 'text-yellow-600 bg-yellow-100',
			programado: 'text-gray-600 bg-gray-100',
			completado: 'text-green-600 bg-green-100',
			disponible: 'text-green-600 bg-green-100',
			en_uso: 'text-blue-600 bg-blue-100',
			mantenimiento: 'text-red-600 bg-red-100'
		};
		return colors[status] || 'text-gray-600 bg-gray-100';
	};

	const getStatusIcon = (status) => {
		const icons = {
			en_ruta: '🚚',
			cargando: '📦',
			programado: '📅',
			completado: '✅',
			disponible: '🟢',
			en_uso: '🔵',
			mantenimiento: '🔧'
		};
		return icons[status] || '❓';
	};

	return (
		<div className="space-y-6">
			{/* Métricas de Logística */}
			<div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">
				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
								<path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{logisticsMetrics.activeDeliveries}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Entregas Activas
							</p>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{logisticsMetrics.completedToday}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Completadas Hoy
							</p>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-purple-500 bg-purple-100 rounded-lg dark:bg-purple-800 dark:text-purple-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{logisticsMetrics.totalDistance}km
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Distancia Total
							</p>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-yellow-500 bg-yellow-100 rounded-lg dark:bg-yellow-800 dark:text-yellow-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{logisticsMetrics.averageDeliveryTime}h
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Tiempo Promedio
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Entregas Activas y Estado de Vehículos */}
			<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
				{/* Entregas Activas */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Entregas Activas
					</h3>
					
					<div className="space-y-4">
						{activeDeliveries.map((delivery, index) => (
							<div key={index} className="p-4 border border-gray-200 rounded-lg dark:border-gray-700">
								<div className="flex items-center justify-between mb-2">
									<div className="flex items-center space-x-2">
										<span className="text-lg">{getStatusIcon(delivery.status)}</span>
										<span className="font-medium text-gray-900 dark:text-white">
											{delivery.id}
										</span>
									</div>
									<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(delivery.status)}`}>
										{delivery.status.replace('_', ' ')}
									</span>
								</div>
								
								<div className="space-y-1">
									<p className="text-sm text-gray-600 dark:text-gray-400">
										<strong>Destino:</strong> {delivery.destination}
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										<strong>Conductor:</strong> {delivery.driver}
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										<strong>Vehículo:</strong> {delivery.vehicle}
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										<strong>Items:</strong> {delivery.items}
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										<strong>Llegada Estimada:</strong> {formatDate(delivery.estimatedArrival)}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Estado de Vehículos */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Estado de Vehículos
					</h3>
					
					<div className="space-y-4">
						{vehicleStatus.map((vehicle, index) => (
							<div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg dark:border-gray-700">
								<div className="flex items-center space-x-3">
									<div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center dark:bg-gray-700">
										<span className="text-sm">{getStatusIcon(vehicle.status)}</span>
									</div>
									<div>
										<p className="text-sm font-medium text-gray-900 dark:text-white">
											{vehicle.type}
										</p>
										<p className="text-xs text-gray-500 dark:text-gray-500">
											ID: {vehicle.id}
										</p>
									</div>
								</div>
								<div className="text-right">
									<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(vehicle.status)}`}>
										{vehicle.status.replace('_', ' ')}
									</span>
									{vehicle.driver && (
										<p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
											{vehicle.driver}
										</p>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Estadísticas y Próximas Acciones */}
			<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Estadísticas del Día
					</h3>
					
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Vehículos Disponibles</span>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">{logisticsMetrics.vehiclesAvailable}</span>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Recolecciones Pendientes</span>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">{logisticsMetrics.pendingPickups}</span>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Eficiencia de Ruta</span>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">94%</span>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Combustible Promedio</span>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">78%</span>
						</div>
					</div>
				</div>

				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Próximas Acciones
					</h3>
					
					<div className="space-y-3">
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-red-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Revisar mantenimiento V003</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Programar entregas mañana</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Actualizar rutas optimizadas</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-green-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Revisar reportes de conductores</p>
						</div>
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
								<path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Nueva Entrega</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Programar entrega</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Vehículos</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Gestionar flota</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Rastreo</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Rastrear entregas</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Reportes</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Generar reportes</p>
							</div>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
} 