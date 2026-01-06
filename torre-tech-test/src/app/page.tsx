'use client';

import React from 'react';
import { 
  Search, 
  Users, 
  Briefcase, 
  AlertCircle, 
  BadgeCheck, 
  ExternalLink,
  Signal, 
  Loader2 
} from 'lucide-react';
import { useIdentity } from '@/features/user/hooks/useIdentity';
import { IdentitySearchRequest } from '@/types/types';

// Definimos la interfaz aquí para referencia rápida (o impórtala de tu archivo types)
interface TorrePerson {
  ardaId: number;
  ggId: string;
  name: string;
  username: string;
  professionalHeadline: string | null;
  imageUrl: string | null;
  weight: number;
  verified: boolean;
}

export default function Home() {
  
  const searchPayload: IdentitySearchRequest = {
    query: "Renan Peixoto",
    identityType: "person",
    limit: 10,
    meta: true,
    excludeContacts: true
  };

  // Asumimos que data devuelve un array de TorrePerson
  const { data, isLoading, isError, error } = useIdentity(searchPayload);

  // --- LOADING STATE ---
  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-10 w-10 animate-spin text-emerald-500" />
          <p className="text-zinc-500 text-sm font-medium animate-pulse">
            Sincronizando genomas...
          </p>
        </div>
      </main>
    );
  }

  // --- ERROR STATE ---
  if (isError) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950 p-4">
        <div className="max-w-md w-full bg-zinc-900 p-6 rounded-lg border border-red-900/50 shadow-xl">
          <div className="flex items-center gap-3 text-red-500 mb-2">
            <AlertCircle size={24} />
            <h3 className="font-bold text-lg">Error de conexión</h3>
          </div>
          <p className="text-zinc-400 mb-4 text-sm">{error?.message || "Ocurrió un error inesperado."}</p>
          <button 
            onClick={() => window.location.reload()}
            className="text-xs text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4"
          >
            Intentar nuevamente
          </button>
        </div>
      </main>
    );
  }

  // Casteamos la data al tipo correcto para seguridad
  const results = (Array.isArray(data) ? data : []) as TorrePerson[];

  // --- SUCCESS STATE ---
  return (
    <main className="min-h-screen w-full bg-zinc-950 text-zinc-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-800 pb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              Talent Genome
            </h1>
            <p className="text-zinc-400 mt-2 flex items-center gap-2 text-sm">
              <Search size={14} />
              Resultados para <span className="text-zinc-100 font-medium">"{searchPayload.query}"</span>
            </p>
          </div>
          
        </header>

        {/* RESULTS GRID */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4 text-zinc-400">
              <Users size={16} />
              <h2 className="text-sm font-medium">
                Perfiles encontrados <span className="text-zinc-600">({results.length})</span>
              </h2>
            </div>
          </div>

          {results.length === 0 ? (
            <div className="bg-zinc-900/50 rounded-lg p-12 text-center border border-dashed border-zinc-800">
              <p className="text-zinc-500">No se encontraron perfiles compatibles.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {results.map((person) => (
                <article 
                  // Usamos ggId como key primaria, fallback a ardaId
                  key={person.ggId || person.ardaId} 
                  className="group relative bg-zinc-900 rounded-lg p-5 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800/50 transition-all duration-300 flex flex-col"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity pointer-events-none" />

                  {/* Header de la Tarjeta */}
                  <div className="flex items-start gap-4 mb-3 relative z-10">
                    
                    {/* Avatar Logic */}
                    <div className="relative shrink-0">
                      {person.imageUrl ? (
                        <div className="relative h-12 w-12 rounded-full p-[2px] bg-gradient-to-br from-zinc-700 to-zinc-800 group-hover:from-emerald-500 group-hover:to-zinc-800 transition-colors">
                            <img 
                              src={person.imageUrl} 
                              alt={person.name} 
                              className="h-full w-full rounded-full object-cover bg-zinc-950"
                            />
                        </div>
                      ) : (
                        // Fallback si imageUrl es null (Como en el caso de Renan Peixoto da Silva)
                        <div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold border border-zinc-700 group-hover:border-emerald-500/50 transition-colors">
                          {person.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      
                      {person.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-zinc-900 rounded-full p-0.5" title="Verificado">
                            <BadgeCheck size={14} className="text-blue-400 fill-blue-400/10" />
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-zinc-100 truncate text-base leading-tight group-hover:text-emerald-400 transition-colors">
                        {person.name}
                      </h3>
                      <p className="text-xs text-zinc-500 truncate mt-1">@{person.username}</p>
                    </div>
                  </div>

                  {/* Headline Profesional */}
                  <div className="mb-4 flex-grow relative z-10">
                    <div className="flex gap-2 items-start">
                      <Briefcase size={14} className="text-zinc-600 mt-0.5 shrink-0" />
                      <p className="text-sm text-zinc-400 font-normal leading-relaxed line-clamp-2 h-[2.5rem]">
                        {/* Manejo de headline nulo */}
                        {person.professionalHeadline || "Sin título profesional"}
                      </p>
                    </div>
                  </div>

                  {/* Footer: Métricas y Acción */}
                  <div className="pt-4 border-t border-zinc-800 mt-auto flex items-center justify-between relative z-10">
                    
                    {/* Métrica de "Peso" */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1 text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                        <Signal size={10} />
                        Weight
                      </div>
                      <span className="text-sm font-mono text-zinc-300">
                        {/* Si el peso es 0 o null, mostramos 0 */}
                        {person.weight ? Math.round(person.weight).toLocaleString() : '0'}
                      </span>
                    </div>

                    <a 
                      href={`https://torre.ai/${person.username}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500 hover:text-zinc-950 px-3 py-2 rounded-md transition-all duration-200 group-hover:translate-x-1"
                    >
                      Signal
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}