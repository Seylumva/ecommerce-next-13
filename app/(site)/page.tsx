import Link from "next/link"

import { Button } from "@/components/ui/button"
import HeroSlideshow from "@/components/hero-slideshow"

export default function IndexPage() {
  return (
    <>
      <HeroSlideshow />
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Your reliable source <br className="hidden sm:inline" />
            of anything and everything
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground mt-3">
            Shop confidently with a 30 day money-back guarantee, and free 2 day
            shipping within every state.
          </p>
          <div className="flex gap-2 mt-1">
            <Link href="/browse">
              <Button>Browse</Button>
            </Link>
            <Link href="/sell">
              <Button variant="outline">Open a store</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
