import type { Movement } from '../types/entities.js';

// Datos de ejemplo para movimientos de inventario
const movementsData: Movement[] = [
	{
		id: 1,
		productId: 194556,
		productName: "Rodamiento SKF 6205",
		type: "entrada",
		quantity: 50,
		date: "2024-01-15",
		user: "María González",
		reason: "Compra regular",
		location: "Bodega A - Estante 3"
	},
	{
		id: 2,
		productId: 194556,
		productName: "Rodamiento SKF 6205",
		type: "salida",
		quantity: 15,
		date: "2024-01-18",
		user: "Roberto Silva",
		reason: "Mantenimiento preventivo",
		location: "Taller Principal"
	},
	{
		id: 3,
		productId: 194356,
		productName: "Aceite Lubricante ISO 68",
		type: "entrada",
		quantity: 20,
		date: "2024-01-20",
		user: "Carmen López",
		reason: "Reposición de stock",
		location: "Bodega C - Estante 2"
	},
	{
		id: 4,
		productId: 194356,
		productName: "Aceite Lubricante ISO 68",
		type: "salida",
		quantity: 8,
		date: "2024-01-22",
		user: "Pedro Herrera",
		reason: "Cambio de aceite",
		location: "Área de Mantenimiento"
	},
	{
		id: 5,
		productId: 323323,
		productName: "Motor Eléctrico 50HP",
		type: "entrada",
		quantity: 2,
		date: "2024-01-25",
		user: "Ana Rodríguez",
		reason: "Proyecto especial",
		location: "Bodega A - Estante 5"
	},
	{
		id: 6,
		productId: 994856,
		productName: "Cable de Potencia 4x25mm²",
		type: "transferencia",
		quantity: 100,
		date: "2024-01-28",
		user: "Miguel Rojas",
		reason: "Reorganización de bodega",
		location: "Bodega D - Estante 4"
	},
	{
		id: 7,
		productId: 523323,
		productName: "Grasa Industrial EP2",
		type: "ajuste",
		quantity: -3,
		date: "2024-01-30",
		user: "Sofía Vargas",
		reason: "Inventario físico",
		location: "Bodega C - Estante 3"
	},
	{
		id: 8,
		productId: 191857,
		productName: "Cilindro Hidráulico 100mm",
		type: "salida",
		quantity: 1,
		date: "2024-02-01",
		user: "Jorge Torres",
		reason: "Reparación urgente",
		location: "Taller de Hidráulica"
	}
];

export async function getMovements(): Promise<Movement[]> {
	// Simular delay de API
	await new Promise(resolve => setTimeout(resolve, 100));
	return movementsData;
}

export async function getMovementsByProduct(productId: number): Promise<Movement[]> {
	await new Promise(resolve => setTimeout(resolve, 100));
	return movementsData.filter(movement => movement.productId === productId);
}

export async function getMovementsByType(type: Movement['type']): Promise<Movement[]> {
	await new Promise(resolve => setTimeout(resolve, 100));
	return movementsData.filter(movement => movement.type === type);
}

export async function getMovementsByDateRange(startDate: string, endDate: string): Promise<Movement[]> {
	await new Promise(resolve => setTimeout(resolve, 100));
	return movementsData.filter(movement => {
		const movementDate = new Date(movement.date);
		const start = new Date(startDate);
		const end = new Date(endDate);
		return movementDate >= start && movementDate <= end;
	});
}

export async function addMovement(movement: Omit<Movement, 'id'>): Promise<Movement> {
	await new Promise(resolve => setTimeout(resolve, 100));
	const newMovement: Movement = {
		...movement,
		id: Math.max(...movementsData.map(m => m.id)) + 1
	};
	movementsData.push(newMovement);
	return newMovement;
} 