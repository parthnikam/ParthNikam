'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  const navItems = [
    { name: "about", href: "/" },
    { name: "work", href: "/work" },
    { name: "reading", href: "/reading" },
  ];

  const socials = [
    { name: "GitHub", href: "https://github.com/ParthNikam" },
    { name: "LinkedIn", href: "https://linkedin.com/in/parthnikam108" },
    { name: "X", href: "https://x.com/prthnkm" },
    { name: "Email", href: "mailto:108parthnikam@gmail.com" },
    { name: "Substack", href: "https://substack.com/@parthnikam108" },
  ];

  return (
    <aside className={`flex flex-col gap-4 w-24 lg:w-32 min-w-[5.5rem] py-10 shrink-0 px-1 ${className || ''}`}>
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block text-sm transition-all ${
                isActive
                  ? "font-semibold text-foreground"
                  : "font-normal text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6">
        <p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Socials</p>
        <div className="flex flex-col gap-1">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
