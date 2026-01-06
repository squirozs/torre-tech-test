// components/layout/footer.tsx
import Link from "next/link";
import { 
  Briefcase, 
  Github, 
  Linkedin, 
  Twitter, 
  Code2,
  Mail,
  MapPin
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-zinc-950 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- Top Section: Grid de Navegación --- */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          
          {/* Columna 1: Brand & Misión */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all duration-300">
                <Briefcase className="h-5 w-5 text-emerald-500" />
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-100 group-hover:text-emerald-500 transition-colors">
                Job<span className="text-emerald-500">Finder</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-500 leading-7 max-w-xs">
              Plataforma de reclutamiento impulsada por inteligencia artificial. Conectamos talento global con oportunidades sin fronteras.
            </p>
            
            {/* Info de contacto sutil */}
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <MapPin size={16} className="text-zinc-600" />
                <span>La Paz, Bolivia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <Mail size={16} className="text-zinc-600" />
                <span className="hover:text-emerald-500 transition-colors cursor-pointer">contacto@jobfinder.com</span>
              </div>
            </div>
          </div>

          {/* Columna 2: Candidatos */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-semibold text-zinc-100 tracking-[0.15em] uppercase">
              Para Talentos
            </h3>
            <nav className="flex flex-col gap-4">
              <FooterLink href="#">Buscar Empleos</FooterLink>
              <FooterLink href="#">Directorios de Empresas</FooterLink>
              <FooterLink href="#">Calculadora Salarial</FooterLink>
              <FooterLink href="#">Mejorar mi CV</FooterLink>
            </nav>
          </div>

          {/* Columna 3: Empresas */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-semibold text-zinc-100 tracking-[0.15em] uppercase">
              Para Empresas
            </h3>
            <nav className="flex flex-col gap-4">
              <FooterLink href="#">Publicar Vacante</FooterLink>
              <FooterLink href="#">Buscar Candidatos</FooterLink>
              <FooterLink href="#">Planes y Precios</FooterLink>
              <FooterLink href="#">API para Developers</FooterLink>
            </nav>
          </div>

          {/* Columna 4: Legal & Social */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-semibold text-zinc-100 tracking-[0.15em] uppercase">
              Comunidad
            </h3>
            <nav className="flex flex-col gap-4">
              <FooterLink href="#">Sobre Nosotros</FooterLink>
              <FooterLink href="#">Centro de Ayuda</FooterLink>
              <FooterLink href="#">Blog de Tecnología</FooterLink>
            </nav>
            
            {/* Social Icons: Minimalistas */}
            <div className="flex gap-4 mt-2">
              <SocialIcon icon={<Github size={18} />} href="#" />
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Copyright & Badges --- */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col md:flex-row items-center gap-6 order-2 md:order-1">
            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} JobFinder Inc.
            </p>
            <div className="hidden md:block h-3 bg-zinc-800"></div>
            <div className="flex gap-6 text-xs font-medium">
              <Link href="#" className="text-zinc-600 hover:text-emerald-500 transition-colors no-decoration">Privacidad</Link>
              <Link href="#" className="text-zinc-600 hover:text-emerald-500 transition-colors no-decoration">Términos</Link>
              <Link href="#" className="text-zinc-600 hover:text-emerald-500 transition-colors no-decoration">Cookies</Link>
            </div>
          </div>

          {/* Developer Badge */}
          <div className="order-1 md:order-2">
            <a 
              href="https://github.com/sergio" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300"
            >
              <Code2 size={14} className="text-zinc-500 group-hover:text-emerald-500 transition-colors" />
              <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Hecho por <span className="font-semibold text-zinc-400 group-hover:text-emerald-400">Sergio</span>
              </span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

// --- Pequeños componentes auxiliares para limpieza del código ---

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-sm text-zinc-500 hover:text-emerald-500 transition-colors duration-200 w-fit"
    >
      {children}
    </Link>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href} 
      className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-emerald-500 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300"
    >
      {icon}
    </a>
  );
}