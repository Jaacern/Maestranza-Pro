import React, { useState, useEffect } from 'react';

export default function AuditorDashboard({ session }) {
	const [auditMetrics, setAuditMetrics] = useState({
		auditsCompleted: 15,
		auditsPending: 3,
		discrepanciesFound: 8,
		accuracyRate: 98.5,
		lastAuditDate: "2024-01-14",
		nextScheduledAudit: "2024-01-20"
	});

	const [recentAudits, setRecentAudits] = useState([
		{
			id: "AUD-2024-001",
			location: "Almacén Principal",
			auditor: "Ana Martínez",
			date: "2024-01-14T10:00:00Z",
			status: "completado",
			discrepancies: 2,
			accuracy: 99.2
		},
		{
			id: "AUD-2024-002",
			location: "Taller Norte",
			auditor: "Carlos Ramírez",
			date: "2024-01-13T14:30:00Z",
			status: "completado",
			discrepancies: 1,
			accuracy: 99.8
		},
		{
			id: "AUD-2024-003",
			location: "Almacén Sur",
			auditor: "María González",
			date: "2024-01-12T09:15:00Z",
			status: "pendiente",
			discrepancies: 0,
			accuracy: 0
		}
	]);

	const [discrepancies, setDiscrepancies] = useState([
		{
			product: "Rodamiento SKF 6205",
			expected: 150,
			actual: 147,
			location: "Almacén Principal",
			severity: "baja",
			date: "2024-01-14"
		},
		{
			product: "Aceite Lubricante ISO 68",
			expected: 25,
			actual: 22,
			location: "Taller Norte",
			severity: "media",
			date: "2024-01-13"
		}
	]);

	useEffect(() => {
		// Simular actualización de métricas en tiempo real
		const interval = setInterval(() => {
			setAuditMetrics(prev => ({
				...prev,
				accuracyRate: Math.max(95, Math.min(100, prev.accuracyRate + (Math.random() - 0.5) * 0.5))
			}));
		}, 20000);

		return () => clearInterval(interval);
	}, []);

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleString('es-CL');
	};

	const getStatusColor = (status) => {
		const colors = {
			completado: 'text-green-600 bg-green-100',
			pendiente: 'text-yellow-600 bg-yellow-100',
			en_progreso: 'text-blue-600 bg-blue-100',
			cancelado: 'text-red-600 bg-red-100'
		};
		return colors[status] || 'text-gray-600 bg-gray-100';
	};

	const getSeverityColor = (severity) => {
		const colors = {
			critica: 'text-red-600 bg-red-100 border-red-200',
			alta: 'text-orange-600 bg-orange-100 border-orange-200',
			media: 'text-yellow-600 bg-yellow-100 border-yellow-200',
			baja: 'text-blue-600 bg-blue-100 border-blue-200'
		};
		return colors[severity] || 'text-gray-600 bg-gray-100 border-gray-200';
	};

	return (
		<div className="space-y-6">
			{/* Métricas de Auditoría */}
			<div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">
				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{auditMetrics.auditsCompleted}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Auditorías Completadas
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
								{auditMetrics.auditsPending}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Auditorías Pendientes
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
								{auditMetrics.discrepanciesFound}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Discrepancias Encontradas
							</p>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{auditMetrics.accuracyRate}%
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Tasa de Precisión
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Auditorías Recientes y Discrepancias */}
			<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
				{/* Auditorías Recientes */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Auditorías Recientes
					</h3>
					
					<div className="space-y-4">
						{recentAudits.map((audit, index) => (
							<div key={index} className="p-4 border border-gray-200 rounded-lg dark:border-gray-700">
								<div className="flex items-center justify-between mb-2">
									<div>
										<p className="font-medium text-gray-900 dark:text-white">
											{audit.id}
										</p>
										<p className="text-sm text-gray-600 dark:text-gray-400">
											{audit.location}
										</p>
									</div>
									<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(audit.status)}`}>
										{audit.status}
									</span>
								</div>
								
								<div className="space-y-1">
									<p className="text-sm text-gray-600 dark:text-gray-400">
										<strong>Auditor:</strong> {audit.auditor}
									</p>
									<p className="text-sm text-gray-600 dark:text-gray-400">
										<strong>Fecha:</strong> {formatDate(audit.date)}
									</p>
									{audit.status === 'completado' && (
										<>
											<p className="text-sm text-gray-600 dark:text-gray-400">
												<strong>Discrepancias:</strong> {audit.discrepancies}
											</p>
											<p className="text-sm text-gray-600 dark:text-gray-400">
												<strong>Precisión:</strong> {audit.accuracy}%
											</p>
										</>
									)}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Discrepancias Encontradas */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Discrepancias Recientes
					</h3>
					
					<div className="space-y-4">
						{discrepancies.map((discrepancy, index) => (
							<div key={index} className={`p-3 border rounded-lg ${getSeverityColor(discrepancy.severity)}`}>
								<div className="flex items-start">
									<div className="flex-shrink-0">
										<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
										</svg>
									</div>
									<div className="ml-3">
										<p className="text-sm font-medium">
											{discrepancy.product}
										</p>
										<p className="text-sm">
											Esperado: {discrepancy.expected} | Actual: {discrepancy.actual}
										</p>
										<p className="text-xs text-gray-500 dark:text-gray-500">
											{discrepancy.location} • {discrepancy.date}
										</p>
									</div>
								</div>
							</div>
						))}
						
						{discrepancies.length === 0 && (
							<div className="text-center py-4">
								<p className="text-gray-500 dark:text-gray-400">No hay discrepancias recientes</p>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Calendario de Auditorías y Acciones */}
			<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Calendario de Auditorías
					</h3>
					
					<div className="space-y-4">
						<div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg dark:bg-blue-900 dark:border-blue-700">
							<div>
								<p className="font-medium text-blue-900 dark:text-blue-100">Próxima Auditoría</p>
								<p className="text-sm text-blue-700 dark:text-blue-300">Almacén Sur</p>
							</div>
							<div className="text-right">
								<p className="text-sm font-medium text-blue-900 dark:text-blue-100">
									{auditMetrics.nextScheduledAudit}
								</p>
								<p className="text-xs text-blue-700 dark:text-blue-300">Programada</p>
							</div>
						</div>
						
						<div className="space-y-2">
							<div className="flex items-center justify-between text-sm">
								<span className="text-gray-600 dark:text-gray-400">Última Auditoría</span>
								<span className="font-medium text-gray-900 dark:text-white">{auditMetrics.lastAuditDate}</span>
							</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-gray-600 dark:text-gray-400">Frecuencia</span>
								<span className="font-medium text-gray-900 dark:text-white">Semanal</span>
							</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-gray-600 dark:text-gray-400">Cobertura</span>
								<span className="font-medium text-gray-900 dark:text-white">100%</span>
							</div>
						</div>
					</div>
				</div>

				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Acciones Requeridas
					</h3>
					
					<div className="space-y-3">
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-red-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Investigar discrepancias en Almacén Principal</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Preparar auditoría de Almacén Sur</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Revisar reportes de auditoría</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-green-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Actualizar procedimientos de auditoría</p>
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
								<p className="font-medium text-gray-900 dark:text-white">Nueva Auditoría</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Iniciar auditoría</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Reportes</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Generar reportes</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Discrepancias</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Revisar discrepancias</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-purple-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Configuración</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Configurar auditorías</p>
							</div>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
} 