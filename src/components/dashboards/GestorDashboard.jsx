import React, { useState, useEffect } from 'react';

export default function GestorDashboard({ session }) {
	const [inventoryMetrics, setInventoryMetrics] = useState({
		totalProducts: 1250,
		lowStockProducts: 23,
		expiringProducts: 8,
		totalValue: 2850000,
		movementsToday: 45,
		pendingApprovals: 5
	});

	const [recentMovements, setRecentMovements] = useState([
		{
			product: "Rodamiento SKF 6205",
			type: "entrada",
			quantity: 50,
			user: "María González",
			timestamp: "2024-01-15T14:30:00Z"
		},
		{
			product: "Aceite Lubricante ISO 68",
			type: "salida",
			quantity: 10,
			user: "Roberto Silva",
			timestamp: "2024-01-15T13:15:00Z"
		},
		{
			product: "Válvula de Control 3\"",
			type: "transferencia",
			quantity: 5,
			user: "Carlos Ramírez",
			timestamp: "2024-01-15T12:45:00Z"
		}
	]);

	const [alerts, setAlerts] = useState([
		{
			product: "Aceite Lubricante ISO 68",
			type: "stock_bajo",
			message: "Stock por debajo del mínimo (8 unidades)",
			priority: "alta"
		},
		{
			product: "Grasa Industrial EP2",
			type: "vencimiento",
			message: "Vence en 30 días",
			priority: "media"
		}
	]);

	useEffect(() => {
		// Simular actualización de métricas en tiempo real
		const interval = setInterval(() => {
			setInventoryMetrics(prev => ({
				...prev,
				movementsToday: prev.movementsToday + Math.floor(Math.random() * 3)
			}));
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleString('es-CL');
	};

	const getMovementIcon = (type) => {
		const icons = {
			entrada: '📥',
			salida: '📤',
			transferencia: '🔄',
			ajuste: '⚖️'
		};
		return icons[type] || '📝';
	};

	const getMovementColor = (type) => {
		const colors = {
			entrada: 'text-green-600 bg-green-100',
			salida: 'text-red-600 bg-red-100',
			transferencia: 'text-blue-600 bg-blue-100',
			ajuste: 'text-yellow-600 bg-yellow-100'
		};
		return colors[type] || 'text-gray-600 bg-gray-100';
	};

	const getAlertColor = (priority) => {
		const colors = {
			critica: 'text-red-600 bg-red-100 border-red-200',
			alta: 'text-orange-600 bg-orange-100 border-orange-200',
			media: 'text-yellow-600 bg-yellow-100 border-yellow-200',
			baja: 'text-blue-600 bg-blue-100 border-blue-200'
		};
		return colors[priority] || 'text-gray-600 bg-gray-100 border-gray-200';
	};

	return (
		<div className="space-y-6">
			{/* Métricas de Inventario */}
			<div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">
				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{inventoryMetrics.totalProducts.toLocaleString()}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Productos Totales
							</p>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{inventoryMetrics.lowStockProducts}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Stock Bajo
							</p>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-yellow-500 bg-yellow-100 rounded-lg dark:bg-yellow-800 dark:text-yellow-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{inventoryMetrics.expiringProducts}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Por Vencer
							</p>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								${(inventoryMetrics.totalValue / 1000000).toFixed(1)}M
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Valor Total
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Movimientos Recientes y Alertas */}
			<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
				{/* Movimientos Recientes */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Movimientos Recientes
					</h3>
					
					<div className="space-y-4">
						{recentMovements.map((movement, index) => (
							<div key={index} className="flex items-center space-x-3">
								<div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center dark:bg-gray-700">
									<span className="text-sm">{getMovementIcon(movement.type)}</span>
								</div>
								<div className="flex-1 min-w-0">
									<p className="text-sm font-medium text-gray-900 dark:text-white">
										{movement.product}
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										{movement.type.charAt(0).toUpperCase() + movement.type.slice(1)}: {movement.quantity} unidades
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-500">
										{movement.user} • {formatDate(movement.timestamp)}
									</p>
								</div>
								<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getMovementColor(movement.type)}`}>
									{movement.type}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Alertas */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Alertas Activas
					</h3>
					
					<div className="space-y-4">
						{alerts.map((alert, index) => (
							<div key={index} className={`p-3 border rounded-lg ${getAlertColor(alert.priority)}`}>
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
										</svg>
									</div>
									<div className="ml-3">
										<p className="text-sm font-medium">
											{alert.product}
										</p>
										<p className="text-sm">
											{alert.message}
										</p>
									</div>
								</div>
							</div>
						))}
						
						{alerts.length === 0 && (
							<div className="text-center py-4">
								<p className="text-gray-500 dark:text-gray-400">No hay alertas activas</p>
							</div>
						)}
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
								<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Registrar Producto</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Agregar nuevo producto</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Movimiento</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Registrar entrada/salida</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Alertas</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Ver alertas de stock</p>
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