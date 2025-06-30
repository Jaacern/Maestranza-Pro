// TODO: implementar tipos de movimientos
export interface Movement {
	id: number;
	productId: number;
	productName: string;
	type: 'entrada' | 'salida' | 'ajuste' | 'transferencia';
	quantity: number;
	date: string;
	user: string;
	reason: string;
	location: string;
	reference?: string;
	notes?: string;
	previousStock: number;
	newStock: number;
	unitCost?: number;
	totalCost?: number;
	approvedBy?: string;
	approvedAt?: string;
}

export interface MovementType {
	id: number;
	name: string;
	description: string;
	requiresApproval: boolean;
	affectsStock: boolean;
	active: boolean;
}

export interface MovementReason {
	id: number;
	name: string;
	category: string;
	description: string;
	requiresDocumentation: boolean;
	active: boolean;
}

export interface MovementApproval {
	id: number;
	movementId: number;
	requestedBy: string;
	requestedAt: string;
	approvedBy?: string;
	approvedAt?: string;
	rejectedBy?: string;
	rejectedAt?: string;
	status: 'pendiente' | 'aprobado' | 'rechazado';
	comments?: string;
} 