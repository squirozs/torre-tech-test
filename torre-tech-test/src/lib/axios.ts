// api.ts
import axios from 'axios';
import { IdentityQueryResponse, IdentitySearchRequest } from '@/types/types';

const apiClient = axios.create({
    baseURL: 'https://torre.ai/api', // Ruta relativa (apunta a localhost:3000/api/proxy)
    headers: {
        'Content-Type': 'application/json',
    },
});

const DEFAULT_PAYLOAD: IdentitySearchRequest = {
    query: "Renan Peixoto",
    identityType: "person",
    limit: 10,
    meta: true,
    excludeContacts: true
};

export const fetchIdentityData = async (payload = DEFAULT_PAYLOAD): Promise<IdentityQueryResponse> => {

    const { data } = await apiClient.post<IdentityQueryResponse>('entities/_searchStream', payload);

    return data;
};