// components/layout/navbar.tsx
"use client";

import Link from "next/link";
import { Briefcase, Menu, User, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
            <Briefcase className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Job<span className="text-emerald-500">Finder</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
          <Link href="/jobs" className="transition-colors hover:text-emerald-400">
            Explorar Empleos
          </Link>
          <Link href="/companies" className="transition-colors hover:text-emerald-400">
            Empresas
          </Link>
          <Link href="/salaries" className="transition-colors hover:text-emerald-400">
            Salarios
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-zinc-400 hover:text-emerald-400 transition-colors">
             <Bell className="h-5 w-5" />
          </button>
          
          <div className="hidden md:flex gap-3">
             <Link 
               href="/login"
               className="text-sm font-medium text-zinc-300 hover:text-white px-3 py-2 transition-colors"
             >
               Iniciar Sesión
             </Link>
             <Link 
               href="/register"
               className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
             >
               Postularse
             </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown (Simple implementation) */}
      {isMenuOpen && (
        <div className="border-t border-zinc-800 md:hidden bg-zinc-950 p-4">
          <nav className="flex flex-col gap-4">
            <Link href="/jobs" className="text-zinc-400 hover:text-emerald-400">Explorar Empleos</Link>
            <Link href="/companies" className="text-zinc-400 hover:text-emerald-400">Empresas</Link>
            <hr className="border-zinc-800" />
            <Link href="/login" className="text-zinc-300">Iniciar Sesión</Link>
            <Link href="/register" className="text-emerald-500 font-medium">Crear Cuenta</Link>
          </nav>
        </div>
      )}
    </header>
  );
}