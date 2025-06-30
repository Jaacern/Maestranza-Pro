import type { Batch } from '../types/entities.js';

// Datos de ejemplo para control de lotes
const batchesData: Batch[] = [
	{
		id: 1,
		productId: 194556,
		productName: "Rodamiento SKF 6205",
		lote: "L2024-001",
		quantity: 150,
		manufactureDate: "2024-01-15",
		expiryDate: "2025-12-31",
		status: "activo",
		location: "Bodega A - Estante 3"
	},
	{
		id: 2,
		productId: 194356,
		productName: "Aceite Lubricante ISO 68",
		lote: "L2024-008",
		quantity: 8,
		manufactureDate: "2023-11-15",
		expiryDate: "2024-11-15",
		status: "por_vencer",
		location: "Bodega C - Estante 2"
	},
	{
		id: 3,
		productId: 523323,
		productName: "Grasa Industrial EP2",
		lote: "L2024-003",
		quantity: 5,
		manufactureDate: "2023-10-20",
		expiryDate: "2024-10-20",
		status: "vencido",
		location: "Bodega C - Estante 3"
	},
	{
		id: 4,
		productId: 323323,
		productName: "Motor Eléctrico 50HP",
		lote: "L2024-022",
		quantity: 3,
		manufactureDate: "2024-03-20",
		expiryDate: "2027-03-20",
		status: "activo",
		location: "Bodega A - Estante 5"
	},
	{
		id: 5,
		productId: 994856,
		productName: "Cable de Potencia 4x25mm²",
		lote: "L2024-012",
		quantity: 500,
		manufactureDate: "2024-01-10",
		expiryDate: "2028-01-10",
		status: "activo",
		location: "Bodega D - Estante 4"
	},
	{
		id: 6,
		productId: 194256,
		productName: "Bomba Hidráulica 100L/min",
		lote: "L2024-018",
		quantity: 12,
		manufactureDate: "2024-09-15",
		expiryDate: "2026-09-15",
		status: "activo",
		location: "Bodega B - Estante 3"
	},
	{
		id: 7,
		productId: 623378,
		productName: "Filtro de Aire Industrial",
		lote: "L2024-005",
		quantity: 45,
		manufactureDate: "2024-08-30",
		expiryDate: "2025-08-30",
		status: "activo",
		location: "Bodega C - Estante 1"
	},
	{
		id: 8,
		productId: 192856,
		productName: "Sensor de Presión 0-10bar",
		lote: "L2024-025",
		quantity: 18,
		manufactureDate: "2024-12-05",
		expiryDate: "2027-12-05",
		status: "activo",
		location: "Bodega A - Estante 2"
	},
	{
		id: 9,
		productId: 191857,
		productName: "Cilindro Hidráulico 100mm",
		lote: "L2024-020",
		quantity: 7,
		manufactureDate: "2024-11-12",
		expiryDate: "2026-11-12",
		status: "activo",
		location: "Bodega B - Estante 4"
	},
	{
		id: 10,
		productId: 914856,
		productName: "Kit de Juntas para Motor",
		lote: "L2024-014",
		quantity: 15,
		manufactureDate: "2024-07-25",
		expiryDate: "2025-07-25",
		status: "activo",
		location: "Bodega A - Estante 6"
	}
];

export async function getBatches(): Promise<Batch[]> {
	await new Promise(resolve => setTimeout(resolve, 100));
	return batchesData;
}

export async function getBatchesByStatus(status: Batch['status']): Promise<Batch[]> {
	await new Promise(resolve => setTimeout(resolve, 100));
	return batchesData.filter(batch => batch.status === status);
}

export async function getExpiringBatches(daysThreshold: number = 30): Promise<Batch[]> {
	await new Promise(resolve => setTimeout(resolve, 100));
	const today = new Date();
	const thresholdDate = new Date();
	thresholdDate.setDate(today.getDate() + daysThreshold);
	
	return batchesData.filter(batch => {
		const expiryDate = new Date(batch.expiryDate);
		return expiryDate <= thresholdDate && expiryDate >= today;
	});
}

export async function getExpiredBatches(): Promise<Batch[]> {
	await new Promise(resolve => setTimeout(resolve, 100));
	const today = new Date();
	
	return batchesData.filter(batch => {
		const expiryDate = new Date(batch.expiryDate);
		return expiryDate < today;
	});
}

export async function getBatchesByProduct(productId: number): Promise<Batch[]> {
	await new Promise(resolve => setTimeout(resolve, 100));
	return batchesData.filter(batch => batch.productId === productId);
}

export async function getBatchesByLocation(location: string): Promise<Batch[]> {
	await new Promise(resolve => setTimeout(resolve, 100));
	return batchesData.filter(batch => 
		batch.location.toLowerCase().includes(location.toLowerCase())
	);
}

export async function updateBatchStatus(batchId: number, status: Batch['status']): Promise<Batch> {
	await new Promise(resolve => setTimeout(resolve, 100));
	const batch = batchesData.find(b => b.id === batchId);
	if (batch) {
		batch.status = status;
		return batch;
	}
	throw new Error('Lote no encontrado');
}

export async function addBatch(batch: Omit<Batch, 'id'>): Promise<Batch> {
	await new Promise(resolve => setTimeout(resolve, 100));
	const newBatch: Batch = {
		...batch,
		id: Math.max(...batchesData.map(b => b.id)) + 1
	};
	batchesData.push(newBatch);
	return newBatch;
} 