import axios from 'axios';

const api = axios.create({
  baseURL: 'https://torre.ai/api', // CAMBIAR ESTO MAÑANA según te digan
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejo de errores global (Punto extra de arquitectura)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Aquí puedes loguear errores o mostrar alertas globales
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;