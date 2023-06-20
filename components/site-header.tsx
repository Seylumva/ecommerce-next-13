import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"

import SearchButton from "./search-button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end gap-1">
          <SearchButton />
          <Button variant="outline" className="px-2 ml-0">
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Link href="/signin">
            <Button className="ml-0 font-semibold">Sign In</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
