export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Ecommerce Test",
  description: "An ecommerce store built with Next.js 13 and Shadcn UI.",
  mainNav: [
    {
      title: "Browse",
      href: "/browse",
    },
    {
      title: "Sell",
      href: "/sell",
    },
  ],
  authLinks: {
    login: "/signin",
    register: "/signup",
  },
  links: {
    twitter: "#",
    github: "#",
  },
}
