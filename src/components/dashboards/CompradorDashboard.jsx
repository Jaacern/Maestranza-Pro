import React, { useState, useEffect } from 'react';

export default function CompradorDashboard({ session }) {
	const [purchaseMetrics, setPurchaseMetrics] = useState({
		pendingOrders: 12,
		approvedOrders: 8,
		totalSpent: 1250000,
		activeSuppliers: 15,
		ordersThisMonth: 25,
		averageDeliveryTime: 5.2
	});

	const [recentOrders, setRecentOrders] = useState([
		{
			id: "PO-2024-001",
			supplier: "Proveedor Industrial S.A.",
			items: 8,
			total: 450000,
			status: "pendiente",
			date: "2024-01-15T10:30:00Z"
		},
		{
			id: "PO-2024-002",
			supplier: "Metales Unidos Ltda.",
			items: 12,
			total: 320000,
			status: "aprobado",
			date: "2024-01-14T15:45:00Z"
		},
		{
			id: "PO-2024-003",
			supplier: "Herramientas Pro",
			items: 5,
			total: 180000,
			status: "entregado",
			date: "2024-01-13T09:20:00Z"
		}
	]);

	const [supplierAlerts, setSupplierAlerts] = useState([
		{
			supplier: "Proveedor Industrial S.A.",
			type: "precio_cambio",
			message: "Incremento del 8% en rodamientos",
			priority: "alta"
		},
		{
			supplier: "Metales Unidos Ltda.",
			type: "entrega_retraso",
			message: "Retraso de 3 días en entrega",
			priority: "media"
		}
	]);

	useEffect(() => {
		// Simular actualización de métricas en tiempo real
		const interval = setInterval(() => {
			setPurchaseMetrics(prev => ({
				...prev,
				pendingOrders: prev.pendingOrders + Math.floor(Math.random() * 2) - 1
			}));
		}, 15000);

		return () => clearInterval(interval);
	}, []);

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleString('es-CL');
	};

	const formatCurrency = (amount) => {
		return new Intl.NumberFormat('es-CL', {
			style: 'currency',
			currency: 'CLP'
		}).format(amount);
	};

	const getStatusColor = (status) => {
		const colors = {
			pendiente: 'text-yellow-600 bg-yellow-100',
			aprobado: 'text-blue-600 bg-blue-100',
			entregado: 'text-green-600 bg-green-100',
			cancelado: 'text-red-600 bg-red-100'
		};
		return colors[status] || 'text-gray-600 bg-gray-100';
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
			{/* Métricas de Compras */}
			<div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">
				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-yellow-500 bg-yellow-100 rounded-lg dark:bg-yellow-800 dark:text-yellow-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{purchaseMetrics.pendingOrders}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Órdenes Pendientes
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
								{purchaseMetrics.approvedOrders}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Órdenes Aprobadas
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
								{purchaseMetrics.activeSuppliers}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Proveedores Activos
							</p>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-purple-500 bg-purple-100 rounded-lg dark:bg-purple-800 dark:text-purple-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{formatCurrency(purchaseMetrics.totalSpent)}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Gasto Total
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Órdenes Recientes y Alertas de Proveedores */}
			<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
				{/* Órdenes Recientes */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Órdenes Recientes
					</h3>
					
					<div className="space-y-4">
						{recentOrders.map((order, index) => (
							<div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg dark:border-gray-700">
								<div className="flex-1">
									<p className="text-sm font-medium text-gray-900 dark:text-white">
										{order.id}
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										{order.supplier}
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-500">
										{order.items} items • {formatDate(order.date)}
									</p>
								</div>
								<div className="text-right">
									<p className="text-sm font-medium text-gray-900 dark:text-white">
										{formatCurrency(order.total)}
									</p>
									<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
										{order.status}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Alertas de Proveedores */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Alertas de Proveedores
					</h3>
					
					<div className="space-y-4">
						{supplierAlerts.map((alert, index) => (
							<div key={index} className={`p-3 border rounded-lg ${getAlertColor(alert.priority)}`}>
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
										</svg>
									</div>
									<div className="ml-3">
										<p className="text-sm font-medium">
											{alert.supplier}
										</p>
										<p className="text-sm">
											{alert.message}
										</p>
									</div>
								</div>
							</div>
						))}
						
						{supplierAlerts.length === 0 && (
							<div className="text-center py-4">
								<p className="text-gray-500 dark:text-gray-400">No hay alertas de proveedores</p>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Estadísticas Adicionales */}
			<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Estadísticas del Mes
					</h3>
					
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Órdenes Realizadas</span>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">{purchaseMetrics.ordersThisMonth}</span>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tiempo Promedio de Entrega</span>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">{purchaseMetrics.averageDeliveryTime} días</span>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Proveedores Evaluados</span>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">12</span>
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
							<p className="text-sm text-gray-700 dark:text-gray-300">Revisar cotizaciones pendientes (3)</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Evaluar nuevos proveedores</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Actualizar catálogo de precios</p>
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
								<p className="text-sm text-gray-600 dark:text-gray-400">Crear orden de compra</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Proveedores</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Gestionar proveedores</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Historial</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Ver historial de compras</p>
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