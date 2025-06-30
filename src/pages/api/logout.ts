import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ cookies, redirect }) => {
	try {
		// Eliminar la cookie de sesión
		cookies.delete('maestranza-session', {
			path: '/'
		});
		
		// Redirigir al login
		return redirect('/login');
	} catch (error) {
		console.error('Error en logout:', error);
		return new Response(JSON.stringify({ 
			success: false, 
			error: 'Error al cerrar sesión' 
		}), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}; 