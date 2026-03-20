"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { label: "Live-Beispiel", href: "/#patientendemo" },
  { label: "Funktionen", href: "/#funktionen" },
  { label: "F\u00fcr \u00c4rzte", href: "/fuer-aerzte" },
  { label: "Dokumentation", href: "/dokumentation" },
  { label: "Sicherheit", href: "/#sicherheit" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      setMobileOpen(false);

      // If it's a hash link on the home page (e.g. /#funktionen)
      if (href.startsWith("/#")) {
        e.preventDefault();
        const hash = href.slice(1); // remove leading /
        if (pathname === "/") {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          router.push(href);
        }
        return;
      }

      // Regular page links — let Next.js handle them
    },
    [pathname, router]
  );

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white border-b transition-shadow duration-300 ${
        scrolled
          ? "border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "border-transparent shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 shrink-0"
          >
            <Image
              src="/anavio-icon.svg"
              alt="anavio"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-xl font-semibold tracking-tight text-[#0A3D35]">
              anavio
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-[#0A3D35]/70 rounded-lg transition-colors duration-200 hover:text-[#0A3D35] hover:bg-[#0C8A72]/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/#demo"
              onClick={(e) => handleNavClick(e, "#demo")}
              className="hidden lg:inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-[#0C8A72] rounded-full transition-colors duration-200 hover:bg-[#10A88A]"
            >
              Demo anfragen
            </a>

            {/* Hamburger button */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-[#0A3D35] hover:bg-[#0C8A72]/5 transition-colors duration-200"
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileOpen}
            >
              <div className="w-5 flex flex-col items-center justify-center gap-[5px]">
                <span
                  className={`block h-[2px] w-5 bg-current rounded-full transition-all duration-300 origin-center ${
                    mobileOpen
                      ? "translate-y-[7px] rotate-45"
                      : "translate-y-0 rotate-0"
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 bg-current rounded-full transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 bg-current rounded-full transition-all duration-300 origin-center ${
                    mobileOpen
                      ? "-translate-y-[7px] -rotate-45"
                      : "translate-y-0 rotate-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 bg-white px-4 pb-5 pt-3">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-sm font-medium text-[#0A3D35]/70 rounded-lg transition-colors duration-200 hover:text-[#0A3D35] hover:bg-[#0C8A72]/5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 px-3">
            <a
              href="/#demo"
              onClick={(e) => handleNavClick(e, "#demo")}
              className="flex items-center justify-center w-full px-5 py-2.5 text-sm font-medium text-white bg-[#0C8A72] rounded-full transition-colors duration-200 hover:bg-[#10A88A]"
            >
              Demo anfragen
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
