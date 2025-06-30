// TODO: implementar tipos de proveedores
export interface Supplier {
	id: number;
	name: string;
	contact: string;
	email: string;
	phone: string;
	address: string;
	category: string;
	rating: number;
	status: 'Activo' | 'Inactivo' | 'Suspendido';
	products: string[];
	lastOrder: string;
	totalOrders: number;
	website?: string;
	taxId?: string;
	paymentTerms?: string;
	deliveryTime?: string;
	notes?: string;
	createdAt: string;
	updatedAt: string;
}

export interface SupplierCategory {
	id: number;
	name: string;
	description: string;
	active: boolean;
}

export interface SupplierContact {
	id: number;
	supplierId: number;
	name: string;
	position: string;
	email: string;
	phone: string;
	mobile?: string;
	isPrimary: boolean;
	active: boolean;
}

export interface SupplierOrder {
	id: number;
	supplierId: number;
	orderNumber: string;
	orderDate: string;
	deliveryDate?: string;
	status: 'pendiente' | 'confirmado' | 'en_camino' | 'entregado' | 'cancelado';
	totalAmount: number;
	currency: string;
	items: SupplierOrderItem[];
	notes?: string;
}

export interface SupplierOrderItem {
	id: number;
	orderId: number;
	productId: number;
	productName: string;
	quantity: number;
	unitPrice: number;
	totalPrice: number;
	receivedQuantity?: number;
	receivedDate?: string;
} 