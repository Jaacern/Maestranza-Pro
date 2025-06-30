import React, { useState, useEffect } from 'react';

export default function ProyectosDashboard({ session }) {
	const [projectMetrics, setProjectMetrics] = useState({
		activeProjects: 6,
		completedThisMonth: 3,
		totalBudget: 8500000,
		teamMembers: 18,
		onTimeDelivery: 92,
		clientSatisfaction: 4.8
	});

	const [activeProjects, setActiveProjects] = useState([
		{
			id: "PROJ-2024-001",
			name: "Modernización Planta Norte",
			client: "Industrias del Norte S.A.",
			progress: 65,
			deadline: "2024-03-15T17:00:00Z",
			budget: 2500000,
			status: "en_progreso"
		},
		{
			id: "PROJ-2024-002",
			name: "Instalación Sistema Hidráulico",
			client: "Minería del Sur Ltda.",
			progress: 35,
			deadline: "2024-04-20T12:00:00Z",
			budget: 1800000,
			status: "planificacion"
		}
	]);

	const [teamAssignments, setTeamAssignments] = useState([
		{
			name: "Equipo Mecánico",
			members: 8,
			projects: 3,
			utilization: 85
		},
		{
			name: "Equipo Eléctrico",
			members: 6,
			projects: 2,
			utilization: 92
		},
		{
			name: "Equipo Hidráulico",
			members: 4,
			projects: 1,
			utilization: 78
		}
	]);

	useEffect(() => {
		// Simular actualización de métricas en tiempo real
		const interval = setInterval(() => {
			setProjectMetrics(prev => ({
				...prev,
				onTimeDelivery: Math.max(85, Math.min(100, prev.onTimeDelivery + (Math.random() - 0.5) * 1))
			}));
		}, 30000);

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
			en_progreso: 'text-blue-600 bg-blue-100',
			planificacion: 'text-yellow-600 bg-yellow-100',
			completado: 'text-green-600 bg-green-100',
			detenido: 'text-red-600 bg-red-100'
		};
		return colors[status] || 'text-gray-600 bg-gray-100';
	};

	return (
		<div className="space-y-6">
			{/* Métricas de Proyectos */}
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
								{projectMetrics.activeProjects}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Proyectos Activos
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
								{projectMetrics.completedThisMonth}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Completados Este Mes
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
								{formatCurrency(projectMetrics.totalBudget)}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Presupuesto Total
							</p>
						</div>
					</div>
				</div>

				<div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<div className="flex items-center">
						<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-yellow-500 bg-yellow-100 rounded-lg dark:bg-yellow-800 dark:text-yellow-200">
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
							</svg>
						</div>
						<div className="ml-4">
							<span className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
								{projectMetrics.teamMembers}
							</span>
							<p className="text-base font-normal text-gray-600 dark:text-gray-400">
								Miembros del Equipo
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Proyectos Activos y Asignaciones de Equipo */}
			<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
				{/* Proyectos Activos */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Proyectos Activos
					</h3>
					
					<div className="space-y-4">
						{activeProjects.map((project, index) => (
							<div key={index} className="p-4 border border-gray-200 rounded-lg dark:border-gray-700">
								<div className="flex items-center justify-between mb-2">
									<div>
										<p className="font-medium text-gray-900 dark:text-white">
											{project.id}
										</p>
										<p className="text-sm text-gray-600 dark:text-gray-400">
											{project.name}
										</p>
									</div>
									<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
										{project.status.replace('_', ' ')}
									</span>
								</div>
								
								<div className="space-y-2">
									<div className="flex items-center justify-between text-sm">
										<span className="text-gray-600 dark:text-gray-400">Cliente:</span>
										<span className="font-medium text-gray-900 dark:text-white">{project.client}</span>
									</div>
									
									<div className="space-y-1">
										<div className="flex items-center justify-between text-sm">
											<span className="text-gray-600 dark:text-gray-400">Progreso:</span>
											<span className="font-medium text-gray-900 dark:text-white">{project.progress}%</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
											<div className="bg-blue-600 h-2 rounded-full" style={{width: `${project.progress}%`}}></div>
										</div>
									</div>
									
									<div className="flex items-center justify-between text-sm">
										<span className="text-gray-600 dark:text-gray-400">Presupuesto:</span>
										<span className="font-medium text-gray-900 dark:text-white">{formatCurrency(project.budget)}</span>
									</div>
									
									<div className="flex items-center justify-between text-sm">
										<span className="text-gray-600 dark:text-gray-400">Fecha límite:</span>
										<span className="font-medium text-gray-900 dark:text-white">{formatDate(project.deadline)}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Asignaciones de Equipo */}
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Asignaciones de Equipo
					</h3>
					
					<div className="space-y-4">
						{teamAssignments.map((team, index) => (
							<div key={index} className="p-4 border border-gray-200 rounded-lg dark:border-gray-700">
								<div className="mb-3">
									<p className="font-medium text-gray-900 dark:text-white">
										{team.name}
									</p>
								</div>
								
								<div className="grid grid-cols-3 gap-4 text-center">
									<div>
										<p className="text-2xl font-bold text-blue-600">{team.members}</p>
										<p className="text-xs text-gray-600 dark:text-gray-400">Miembros</p>
									</div>
									<div>
										<p className="text-2xl font-bold text-green-600">{team.projects}</p>
										<p className="text-xs text-gray-600 dark:text-gray-400">Proyectos</p>
									</div>
									<div>
										<p className="text-2xl font-bold text-purple-600">{team.utilization}%</p>
										<p className="text-xs text-gray-600 dark:text-gray-400">Utilización</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* KPIs y Próximas Acciones */}
			<div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
				<div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Indicadores Clave
					</h3>
					
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Entrega a Tiempo</span>
							<span className="text-lg font-semibold text-green-600">{projectMetrics.onTimeDelivery}%</span>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Satisfacción del Cliente</span>
							<span className="text-lg font-semibold text-blue-600">{projectMetrics.clientSatisfaction}/5.0</span>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Eficiencia del Equipo</span>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">87%</span>
						</div>
						
						<div className="flex items-center justify-between">
							<span className="text-sm font-medium text-gray-700 dark:text-gray-300">Presupuesto Utilizado</span>
							<span className="text-lg font-semibold text-gray-900 dark:text-white">73%</span>
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
							<p className="text-sm text-gray-700 dark:text-gray-300">Revisar propuestas de nuevos proyectos</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Evaluar rendimiento de equipos</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Actualizar cronogramas de proyectos</p>
						</div>
						<div className="flex items-center space-x-3">
							<div className="w-2 h-2 bg-green-500 rounded-full"></div>
							<p className="text-sm text-gray-700 dark:text-gray-300">Preparar reportes para dirección</p>
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
								<p className="font-medium text-gray-900 dark:text-white">Nuevo Proyecto</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Crear proyecto</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Equipos</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Gestionar equipos</p>
							</div>
						</div>
					</button>
					
					<button className="p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
						<div className="flex items-center">
							<svg className="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-3-1a1 1 0 100 2v1a1 1 0 11-2 0v-1a1 1 0 000-2z" clipRule="evenodd"/>
							</svg>
							<div>
								<p className="font-medium text-gray-900 dark:text-white">Cronogramas</p>
								<p className="text-sm text-gray-600 dark:text-gray-400">Ver cronogramas</p>
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