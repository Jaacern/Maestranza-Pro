// TODO: implementar tipos de productos
export interface Product {
	id: number;
	name: string;
	description: string;
	category: string;
	serialNumber?: string;
	location: string;
	batchNumber?: string;
	expiryDate?: string;
	supplier: string;
	tags: string[];
	stock: number;
	stockmin: number;
	price: number;
	unit: string;
	status: 'activo' | 'inactivo' | 'discontinuado';
	createdAt: string;
	updatedAt: string;
}

export interface ProductCategory {
	id: number;
	name: string;
	description: string;
	parentId?: number;
	active: boolean;
}

export interface ProductMovement {
	id: number;
	productId: number;
	type: 'entrada' | 'salida' | 'ajuste';
	quantity: number;
	date: string;
	user: string;
	reason: string;
	reference?: string;
	notes?: string;
}

export interface ProductAlert {
	id: number;
	productId: number;
	type: 'stock_bajo' | 'stock_critico' | 'vencimiento' | 'movimiento_sospechoso';
	message: string;
	severity: 'baja' | 'media' | 'alta' | 'crítica';
	status: 'activa' | 'resuelta';
	createdAt: string;
	resolvedAt?: string;
	assignedTo?: string;
} 