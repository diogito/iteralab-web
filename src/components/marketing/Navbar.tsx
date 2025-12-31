'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Logo } from '@/components/ui/Logo';
import { NAV_LINKS } from '@/lib/constants';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled
            ? 'glass border-b border-zinc-200 dark:border-zinc-800/50 shadow-sm dark:shadow-none'
            : 'bg-transparent'
          }
        `}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link href="/agendar">
              <Button size="sm">
                Contactar
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Navigation - Fullscreen Fixed Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 w-full h-dvh bg-white dark:bg-zinc-950 z-[9999] flex flex-col items-center justify-center gap-8">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            onClick={closeMobileMenu}
            aria-label="Cerrar menú"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Logo in mobile menu */}
          <Link
            href="/"
            className="mb-4"
            onClick={closeMobileMenu}
          >
            <Logo className="text-2xl" />
          </Link>

          {/* Navigation Links */}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-2xl font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}

          {/* Theme Toggle in Mobile */}
          <div className="mt-2">
            <ThemeToggle />
          </div>

          {/* CTA Button */}
          <Link
            href="/agendar"
            className="mt-4"
            onClick={closeMobileMenu}
          >
            <Button size="lg">
              Contactar
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
