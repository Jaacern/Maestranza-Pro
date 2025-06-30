import React, { useState, useEffect } from 'react';

export default function UsuarioDashboard({ session }) {
	const [userMetrics, setUserMetrics] = useState({
		requestsSubmitted: 8,
		requestsApproved: 6,
		itemsRequested: 15,
		lastRequest: "2024-01-14T10:30:00Z"
	});

	const [recentRequests, setRecentRequests] = useState([
		{
			id: "REQ-2024-001",
			item: "Rodamiento SKF 6205",
			quantity: 2,
			status: "aprobado",
			date: "2024-01-14T10:30:00Z"
		},
		{
			id: "REQ-2024-002",
			item: "Aceite Lubricante ISO 68",
			quantity: 5,
			status: "pendiente",
			date: "2024-01-13T15:45:00Z"
		},
		{
			id: "REQ-2024-003",
			item: "Válvula de Control 3\"",
			quantity: 1,
			status: "rechazado",
			date: "2024-01-12T09:20:00Z"
		}
	]);

	const [availableItems, setAvailableItems] = useState([
		{
			name: "Rodamiento SKF 6205",
			available: 25,
			category: "Rodamientos",
			location: "Almacén A"
		},
		{
			name: "Aceite Lubricante ISO 68",
			available: 12,
			category: "Lubricantes",
			location: "Almacén B"
		},
		{
			name: "Válvula de Control 3\"",
			available: 8,
			category: "Válvulas",
			location: "Almacén C"
		}
	]);

	useEffect(() => {
		// Simular actualización de métricas en tiempo real
		const interval = setInterval(() => {
			setUserMetrics(prev => ({
				...prev,
				requestsSubmitted: prev.requestsSubmitted + Math.floor(Math.random() * 2)
			}));
		}, 60000);

		return () => clearInterval(interval);
	}, []);

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleString('es-CL');
	};

	const getStatusColor = (status) => {
		const colors = {
			aprobado: 'text-green-600 bg-green-100',
			pendiente: 'text-yellow-600 bg-yellow-100',
			rechazado: 'text-red-600 bg-red-100',
			en_revision: 'text-blue-600 bg-blue-100'
		};
		return colors[status] || 'text-gray-600 bg-gray-100';
	};

	return (
		<div className="space-y-6">
			{/* Métricas del Usuario */}
			<div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">
				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{userMetrics.requestsSubmitted}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Solicitudes Enviadas
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
								{userMetrics.requestsApproved}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Solicitudes Aprobadas
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
								{userMetrics.itemsRequested}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Items Solicitados
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
								{Math.round((userMetrics.requestsApproved / userMetrics.requestsSubmitted) * 100)}%
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Tasa de Aprobación
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Solicitudes Recientes y Items Disponibles */}
			<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
				{/* Solicitudes Recientes */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Solicitudes Recientes
					</h3>
					
					<div className="space-y-4">
						{recentRequests.map((request, index) => (
							<div key={index} className="p-4 border border-gray-200 rounded-lg dark:border-gray-700">
								<div className="flex items-center justify-between mb-2">
									<div>
										<p className="font-medium text-gray-900 dark:text-white">
											{request.id}
										</p>
										<p className="text-sm text-gray-600 dark:text-gray-400">
											{request.item}
										</p>
									</div>
									<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
										{request.status}
									</span>
								</div>
								
								<div className="space-y-1">
									<div className="flex items-center justify-between text-sm">
										<span className="text-gray-600 dark:text-gray-400">Cantidad:</span>
										<span className="font-medium text-gray-900 dark:text-white">{request.quantity}</span>
									</div>
									<div className="flex items-center justify-between text-sm">
										<span className="text-gray-600 dark:text-gray-400">Fecha:</span>
										<span className="font-medium text-gray-900 dark:text-white">{formatDate(request.date)}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Items Disponibles */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Items Disponibles
					</h3>
					
					<div className="space-y-4">
						{availableItems.map((item, index) => (
							<div key={index} className="p-4 border border-gray-200 rounded-lg dark:border-gray-700">
								<div className="mb-3">
									<p className="font-medium text-gray-900 dark:text-white">
										{item.name}
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										{item.category}
									</p>
								</div>
								
								<div className="grid grid-cols-2 gap-4 text-center">
									<div>
										<p className="text-2xl font-bold text-green-600">{item.available}</p>
										<p className="text-xs text-gray-600 dark:text-gray-400">Disponible</p>
									</div>
									<div>
										<p className="text-2xl font-bold text-blue-600">{item.location}</p>
										<p className="text-xs text-gray-600 dark:text-gray-400">Ubicación</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Información Personal y Próximas Acciones */}
			<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Información Personal
					</h3>
					
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Usuario</span>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">{session.username}</span>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Última Solicitud</span>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">{formatDate(userMetrics.lastRequest)}</span>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Estado de Cuenta</span>
							<span className="text-lg font-semibold text-green-600">Activo</span>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Nivel de Acceso</span>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">Básico</span>
						</div>
					</div>
				</div>

				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Próximas Acciones
					</h3>
					
					<div className="space-y-3">
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Revisar estado de solicitudes pendientes</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-green-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Consultar disponibilidad de items</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Actualizar información de contacto</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Revisar historial de solicitudes</p>
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
								<p className="font-medium text-gray-900 dark:text-white">Nueva Solicitud</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Solicitar items</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Inventario</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Ver disponibilidad</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-3-1a1 1 0 100 2v1a1 1 0 11-2 0v-1a1 1 0 000-2z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Historial</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Ver solicitudes</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Perfil</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Editar perfil</p>
							</div>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
} 