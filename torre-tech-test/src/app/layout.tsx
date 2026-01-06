import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";
import Providers from "./providers";
import "./globals.css"; // Asegúrate de importar los estilos globales

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobFinder - Encuentra tu futuro",
  description: "Plataforma de búsqueda de empleo moderna y eficiente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark h-full scroll-smooth">
      <body
        className={cn(
          inter.className,
          // Fondo base muy oscuro (Casi negro puro para contraste estilo Torre)
          "h-full min-h-screen bg-zinc-950 text-zinc-100 antialiased",
          // Color de selección para identidad de marca
          "selection:bg-emerald-500/30 selection:text-emerald-500"
        )}
      >
        {/* Movemos Providers aquí para que el Navbar (Auth) y el Footer 
          tengan acceso al contexto (React Query, AuthState, etc.)
        */}
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            
            <Navbar />
            
            {/* MAIN:
              1. flex-1: Empuja el footer hacia abajo si hay poco contenido.
              2. w-full: Asegura ancho total disponible.
              3. max-w-screen-2xl: Estilo Torre/LinkedIn, no estira al infinito en monitores 4k.
              4. mx-auto: Centra el contenedor.
              5. Padding responsivo: px-4 (móvil), sm:px-6 (tablet), lg:px-8 (desktop).
            */}
            <main className="flex-1 w-full max-w-screen-2xl mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
              {children}
            </main>
            
            <Footer />
          </div>

          {/* Configuración de Sonner para que coincida con el tema oscuro mate */}
          <Toaster
            theme="dark"
            position="bottom-right" // Torre suele usar notificaciones abajo o arriba derecha, abajo es menos intrusivo
            richColors
            closeButton
            toastOptions={{
              style: {
                background: '#18181b', // zinc-900
                border: '1px solid #27272a', // zinc-800
                color: '#f4f4f5', // zinc-100
                fontFamily: inter.style.fontFamily,
              },
              classNames: {
                toast: "group toast group-[.toaster]:bg-zinc-900 group-[.toaster]:text-zinc-100 group-[.toaster]:border-zinc-800 group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-zinc-400",
                actionButton: "group-[.toast]:bg-emerald-500 group-[.toast]:text-white",
                cancelButton: "group-[.toast]:bg-zinc-800 group-[.toast]:text-zinc-400",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}