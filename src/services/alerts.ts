import type { Alert } from '../types/entities.js';

// Datos de ejemplo para alertas del sistema
const alertsData: Alert[] = [
	{
		id: 1,
		productId: 194356,
		productName: "Aceite Lubricante ISO 68",
		type: "stock_bajo",
		message: "Stock por debajo del mínimo establecido",
		date: "2024-02-01",
		status: "activa",
		priority: "alta"
	},
	{
		id: 2,
		productId: 523323,
		productName: "Grasa Industrial EP2",
		type: "stock_bajo",
		message: "Stock crítico - requiere reposición inmediata",
		date: "2024-02-02",
		status: "activa",
		priority: "critica"
	},
	{
		id: 3,
		productId: 194356,
		productName: "Aceite Lubricante ISO 68",
		type: "vencimiento",
		message: "Producto próximo a vencer (30 días)",
		date: "2024-02-03",
		status: "activa",
		priority: "media"
	},
	{
		id: 4,
		productId: 523323,
		productName: "Grasa Industrial EP2",
		type: "vencimiento",
		message: "Producto vencido - requiere disposición",
		date: "2024-02-04",
		status: "activa",
		priority: "alta"
	},
	{
		id: 5,
		productId: 323323,
		productName: "Motor Eléctrico 50HP",
		type: "stock_bajo",
		message: "Stock bajo para equipos críticos",
		date: "2024-02-05",
		status: "activa",
		priority: "alta"
	},
	{
		id: 6,
		productId: 191857,
		productName: "Cilindro Hidráulico 100mm",
		type: "lote_critico",
		message: "Lote con problemas de calidad reportados",
		date: "2024-02-06",
		status: "activa",
		priority: "critica"
	},
	{
		id: 7,
		productId: 994856,
		productName: "Cable de Potencia 4x25mm²",
		type: "stock_bajo",
		message: "Stock bajo en cable de potencia",
		date: "2024-01-30",
		status: "resuelta",
		priority: "baja"
	},
	{
		id: 8,
		productId: 194556,
		productName: "Rodamiento SKF 6205",
		type: "vencimiento",
		message: "Producto próximo a vencer (45 días)",
		date: "2024-02-07",
		status: "activa",
		priority: "baja"
	}
];

export async function getAlerts(): Promise<Alert[]> {
	await new Promise(resolve => setTimeout(resolve, 100));
	return alertsData;
}

export async function getActiveAlerts(): Promise<Alert[]> {
	await new Promise(resolve => setTimeout(resolve, 100));
	return alertsData.filter(alert => alert.status === 'activa');
}

export async function getAlertsByPriority(priority: Alert['priority']): Promise<Alert[]> {
	await new Promise(resolve => setTimeout(resolve, 100));
	return alertsData.filter(alert => alert.priority === priority);
}

export async function getAlertsByType(type: Alert['type']): Promise<Alert[]> {
	await new Promise(resolve => setTimeout(resolve, 100));
	return alertsData.filter(alert => alert.type === type);
}

export async function getCriticalAlerts(): Promise<Alert[]> {
	await new Promise(resolve => setTimeout(resolve, 100));
	return alertsData.filter(alert => 
		alert.priority === 'critica' && alert.status === 'activa'
	);
}

export async function resolveAlert(alertId: number): Promise<Alert> {
	await new Promise(resolve => setTimeout(resolve, 100));
	const alert = alertsData.find(a => a.id === alertId);
	if (alert) {
		alert.status = 'resuelta';
		return alert;
	}
	throw new Error('Alerta no encontrada');
}

export async function addAlert(alert: Omit<Alert, 'id'>): Promise<Alert> {
	await new Promise(resolve => setTimeout(resolve, 100));
	const newAlert: Alert = {
		...alert,
		id: Math.max(...alertsData.map(a => a.id)) + 1
	};
	alertsData.push(newAlert);
	return newAlert;
} 