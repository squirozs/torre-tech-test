// types.ts

// 1. Lo que envías (Request)
export interface IdentitySearchRequest {
  query: string;
  identityType: "person" | "company" | string;
  limit: number;
  meta: boolean;
  excludeContacts: boolean;
}

// 2. Lo que recibes (Response Item)
export interface PersonResult {
  ardaId: number;
  ggId: string;
  name: string;
  comparableName: string;
  username: string;
  professionalHeadline: string;
  imageUrl: string | null; // Puede ser null
  completion: number;
  grammar: number;
  weight: number;
  verified: boolean;
  connections: any[];
  totalStrength: number;
  pageRank: number;
  organizationId: number | null;
  organizationNumericId: number | null;
  publicId: string | null;
  status: string | null;
  creators: any[];
  relationDegree: number;
  isSearchable: boolean;
  contact: boolean;
}

// Axios devolverá un array de estos objetos
export type IdentityQueryResponse = PersonResult[];