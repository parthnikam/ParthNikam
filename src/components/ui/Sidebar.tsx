"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "../../lib/utils"

const navLinks = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
]

export default function Sidebar() {
  const pathname = usePathname()

  const linkClass = (href: string) =>
    cn(
      "px-3 py-2 text-lg font-medium rounded-lg transition-colors",
      pathname === href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    )

  const mobileLinkClass = (href: string) =>
    cn(
      "text-sm font-medium transition-colors",
      pathname === href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-64 min-w-[16rem] h-full p-6 gap-2">
        <div className="mb-8 px-2">
          <h2 className="text-2xl font-bold text-foreground leading-none">Parth Nikam</h2>
        </div>
        <nav className="flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile: top bar with name + links */}
      <div className="md:hidden flex items-center gap-6 w-full h-14 px-4 bg-background shrink-0">
        <h2 className="text-lg font-bold text-foreground">Parth Nikam</h2>
        <nav className="flex items-center gap-4">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={mobileLinkClass(href)}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
