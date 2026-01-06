// useIdentity.ts
import { useQuery } from '@tanstack/react-query';
import { fetchIdentityData } from '@/lib/axios';
import { IdentitySearchRequest } from '@/types/types';

export const useIdentity = (customPayload?: Partial<IdentitySearchRequest>) => {
  return useQuery({
    // Agregamos el payload a la key para que refrensh si cambian los datos
    queryKey: ['identityQuery', customPayload], 
    
    // Pasamos los datos combinados a la función
    queryFn: () => {
        // Combinamos el default con lo que pases (si pasas algo)
        const body = { 
            query: "Renan Peixoto", 
            identityType: "person", 
            limit: 10, 
            meta: true, 
            excludeContacts: true,
            ...customPayload 
        };
        // @ts-ignore - Typescript a veces se queja de tipos literales en strings, esto lo soluciona rápido
        return fetchIdentityData(body as IdentitySearchRequest);
    },
  });
};