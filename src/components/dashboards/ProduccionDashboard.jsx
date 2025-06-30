import React, { useState, useEffect } from 'react';

export default function ProduccionDashboard({ session }) {
	const [productionMetrics, setProductionMetrics] = useState({
		activeOrders: 8,
		completedToday: 12,
		totalKits: 45,
		productionEfficiency: 94.5,
		machinesRunning: 6,
		maintenanceScheduled: 2
	});

	const [activeOrders, setActiveOrders] = useState([
		{
			id: "PO-2024-001",
			product: "Kit de Reparación Motor Diesel",
			quantity: 5,
			status: "en_produccion",
			progress: 75,
			deadline: "2024-01-18T17:00:00Z"
		},
		{
			id: "PO-2024-002",
			product: "Kit de Mantenimiento Hidráulico",
			quantity: 3,
			status: "preparacion",
			progress: 30,
			deadline: "2024-01-19T12:00:00Z"
		}
	]);

	const [kitInventory, setKitInventory] = useState([
		{
			name: "Kit de Reparación Motor Diesel",
			available: 12,
			reserved: 8,
			components: 15
		},
		{
			name: "Kit de Mantenimiento Hidráulico",
			available: 8,
			reserved: 5,
			components: 12
		}
	]);

	useEffect(() => {
		// Simular actualización de métricas en tiempo real
		const interval = setInterval(() => {
			setProductionMetrics(prev => ({
				...prev,
				productionEfficiency: Math.max(85, Math.min(100, prev.productionEfficiency + (Math.random() - 0.5) * 2))
			}));
		}, 25000);

		return () => clearInterval(interval);
	}, []);

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleString('es-CL');
	};

	const getStatusColor = (status) => {
		const colors = {
			en_produccion: 'text-blue-600 bg-blue-100',
			preparacion: 'text-yellow-600 bg-yellow-100',
			completado: 'text-green-600 bg-green-100',
			detenido: 'text-red-600 bg-red-100'
		};
		return colors[status] || 'text-gray-600 bg-gray-100';
	};

	return (
		<div className="space-y-6">
			{/* Métricas de Producción */}
			<div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">
				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-3-1a1 1 0 100 2v1a1 1 0 11-2 0v-1a1 1 0 000-2z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{productionMetrics.activeOrders}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Órdenes Activas
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
								{productionMetrics.completedToday}
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
								<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{productionMetrics.totalKits}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Kits Disponibles
							</p>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-yellow-500 bg-yellow-100 rounded-lg dark:bg-yellow-800 dark:text-yellow-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{productionMetrics.productionEfficiency}%
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Eficiencia
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Órdenes Activas y Inventario de Kits */}
			<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
				{/* Órdenes Activas */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Órdenes de Producción Activas
					</h3>
					
					<div className="space-y-4">
						{activeOrders.map((order, index) => (
							<div key={index} className="p-4 border border-gray-200 rounded-lg dark:border-gray-700">
								<div className="flex items-center justify-between mb-2">
									<div>
										<p className="font-medium text-gray-900 dark:text-white">
											{order.id}
										</p>
										<p className="text-sm text-gray-600 dark:text-gray-400">
											{order.product}
										</p>
									</div>
									<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
										{order.status.replace('_', ' ')}
									</span>
								</div>
								
								<div className="space-y-2">
									<div className="flex items-center justify-between text-sm">
										<span className="text-gray-600 dark:text-gray-400">Cantidad:</span>
										<span className="font-medium text-gray-900 dark:text-white">{order.quantity}</span>
									</div>
									
									<div className="space-y-1">
										<div className="flex items-center justify-between text-sm">
											<span className="text-gray-600 dark:text-gray-400">Progreso:</span>
											<span className="font-medium text-gray-900 dark:text-white">{order.progress}%</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
											<div className="bg-blue-600 h-2 rounded-full" style={{width: `${order.progress}%`}}></div>
										</div>
									</div>
									
									<div className="flex items-center justify-between text-sm">
										<span className="text-gray-600 dark:text-gray-400">Fecha límite:</span>
										<span className="font-medium text-gray-900 dark:text-white">{formatDate(order.deadline)}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Inventario de Kits */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Inventario de Kits
					</h3>
					
					<div className="space-y-4">
						{kitInventory.map((kit, index) => (
							<div key={index} className="p-4 border border-gray-200 rounded-lg dark:border-gray-700">
								<div className="mb-3">
									<p className="font-medium text-gray-900 dark:text-white">
										{kit.name}
									</p>
								</div>
								
								<div className="grid grid-cols-3 gap-4 text-center">
									<div>
										<p className="text-2xl font-bold text-green-600">{kit.available}</p>
										<p className="text-xs text-gray-600 dark:text-gray-400">Disponible</p>
									</div>
									<div>
										<p className="text-2xl font-bold text-yellow-600">{kit.reserved}</p>
										<p className="text-xs text-gray-600 dark:text-gray-400">Reservado</p>
									</div>
									<div>
										<p className="text-2xl font-bold text-blue-600">{kit.components}</p>
										<p className="text-xs text-gray-600 dark:text-gray-400">Componentes</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Estado de Máquinas y Próximas Acciones */}
			<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Estado de Máquinas
					</h3>
					
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Máquinas Operativas</span>
							<span className="text-lg font-semibold text-green-600">{productionMetrics.machinesRunning}</span>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">En Mantenimiento</span>
							<span className="text-lg font-semibold text-yellow-600">{productionMetrics.maintenanceScheduled}</span>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Capacidad Utilizada</span>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">87%</span>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tiempo Promedio de Ciclo</span>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">2.5h</span>
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
							<p className="text-sm text-gray-700 dark:text-gray-300">Revisar stock de componentes críticos</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Programar mantenimiento preventivo</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Optimizar secuencia de producción</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-green-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Actualizar documentación de kits</p>
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
								<p className="font-medium text-gray-900 dark:text-white">Nueva Orden</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Crear orden de producción</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Gestión de Kits</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Administrar kits</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Mantenimiento</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Programar mantenimiento</p>
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