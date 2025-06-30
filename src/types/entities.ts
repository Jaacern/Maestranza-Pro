import type { endpointsToOperations } from '../pages/api/[...entity].js';
import type { playgroundActions } from '../pages/playground/_actions.js';

export type EndpointsToOperations = typeof endpointsToOperations;
export type Endpoint = keyof EndpointsToOperations;

export type Products = Product[];
export interface Product {
	name: string;
	category: string;
	technology: string;
	id: number;
	description: string;
	price: string;
	discount: string;
	// Campos específicos del inventario industrial
	serial: string;
	ubicacion: string;
	lote: string;
	vencimiento: string;
	proveedor: string;
	etiquetas: string;
	stock: number;
	stockmin: number;
}

export type Users = User[];
export interface User {
	id: number;
	name: string;
	avatar: string;
	email: string;
	biography: string;
	position: string;
	country: string;
	status: string;
	// Campos específicos de Maestranzas Unidos S.A.
	role: string;
	department: string;
	location: string;
	phone: string;
}

// Nuevos tipos para el sistema de inventarios
export interface Movement {
	id: number;
	productId: number;
	productName: string;
	type: 'entrada' | 'salida' | 'transferencia' | 'ajuste';
	quantity: number;
	date: string;
	user: string;
	reason: string;
	location: string;
}

export interface Alert {
	id: number;
	productId: number;
	productName: string;
	type: 'stock_bajo' | 'vencimiento' | 'lote_critico';
	message: string;
	date: string;
	status: 'activa' | 'resuelta';
	priority: 'baja' | 'media' | 'alta' | 'critica';
}

export interface Supplier {
	id: number;
	name: string;
	contact: string;
	email: string;
	phone: string;
	address: string;
	category: string;
	rating: number;
	status: 'activo' | 'inactivo';
}

export interface Batch {
	id: number;
	productId: number;
	productName: string;
	lote: string;
	quantity: number;
	manufactureDate: string;
	expiryDate: string;
	status: 'activo' | 'vencido' | 'por_vencer';
	location: string;
}

export interface Report {
	id: number;
	type: 'inventario' | 'movimientos' | 'alertas' | 'proveedores';
	title: string;
	description: string;
	date: string;
	data: any;
	format: 'pdf' | 'excel' | 'csv';
}

export type PlaygroundAction = (typeof playgroundActions)[number];
