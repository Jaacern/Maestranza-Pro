// TODO: implementar lógica de proveedores
import type { Supplier } from '../types/entities.js';

// Datos de ejemplo para proveedores
const suppliersData: Supplier[] = [
	{
		id: 1,
		name: "SKF Chile S.A.",
		contact: "Juan Carlos Méndez",
		email: "juan.mendez@skf.cl",
		phone: "+56 2 2345 6789",
		address: "Av. Providencia 1234, Providencia, Santiago",
		category: "Rodamientos y Componentes Mecánicos",
		rating: 4.8,
		status: "Activo",
		products: ["Rodamientos", "Sellos", "Lubricantes"],
		lastOrder: "2024-01-10",
		totalOrders: 45
	},
	{
		id: 2,
		name: "Parker Hannifin Chile",
		contact: "María Elena Rodríguez",
		email: "mrodriguez@parker.cl",
		phone: "+56 2 2456 7890",
		address: "Camino La Pirámide 123, Pudahuel, Santiago",
		category: "Sistemas Hidráulicos y Neumáticos",
		rating: 4.6,
		status: "Activo",
		products: ["Válvulas", "Cilindros", "Mangueras"],
		lastOrder: "2024-01-12",
		totalOrders: 32
	},
	{
		id: 3,
		name: "ABB Chile",
		contact: "Roberto Silva",
		email: "roberto.silva@abb.cl",
		phone: "+56 2 2567 8901",
		address: "Av. Apoquindo 4501, Las Condes, Santiago",
		category: "Equipos Eléctricos y Automatización",
		rating: 4.9,
		status: "Activo",
		products: ["Motores", "Variadores", "Sensores"],
		lastOrder: "2024-01-08",
		totalOrders: 28
	}
];

export async function getSuppliers(): Promise<Supplier[]> {
	// Simular delay de API
	await new Promise(resolve => setTimeout(resolve, 100));
	return suppliersData;
}

export async function getSupplierById(id: number): Promise<Supplier | undefined> {
	await new Promise(resolve => setTimeout(resolve, 100));
	return suppliersData.find(supplier => supplier.id === id);
}

export async function addSupplier(supplier: Omit<Supplier, 'id'>): Promise<Supplier> {
	await new Promise(resolve => setTimeout(resolve, 100));
	const newSupplier: Supplier = {
		...supplier,
		id: Math.max(...suppliersData.map(s => s.id)) + 1
	};
	suppliersData.push(newSupplier);
	return newSupplier;
} 