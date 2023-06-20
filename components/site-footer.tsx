import * as React from "react"

import { siteConfig } from "@/config/site"

import { ThemeToggle } from "./theme-toggle"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-3 flex justify-between items-center">
        <p className="text-slate-500">
          Copyright <span className="font-semibold">{siteConfig.name}</span>{" "}
          &copy; {new Date().getFullYear()}
        </p>
        <ThemeToggle />
      </div>
    </footer>
  )
}
