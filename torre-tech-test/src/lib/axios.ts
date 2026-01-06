import axios from 'axios';

const api = axios.create({
    baseURL: '', // CAMBIAR ESTO MAÑANA según te digan
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Aquí puedes loguear errores o mostrar alertas globales
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);

export default api;