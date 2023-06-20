import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/icons"

export default function SignInPage() {
  return (
    <>
      <div className="flex">
        <Link
          className="font-bold flex gap-2 absolute top-5 left-8 z-50"
          href="/"
        >
          <Icons.logo className="h-6 w-6" /> Ecommerce Test
        </Link>
        <div className="hidden md:block w-1/3 lg:w-1/2 h-screen relative">
          <Image
            src="/background-3.jpg"
            alt="Background"
            fill={true}
            style={{ objectFit: "cover", filter: "brightness(25%)" }}
          />
        </div>
        <div className="grid place-items-center flex-1 min-h-screen h-fit relative">
          <Image
            src="/background-3.jpg"
            alt="Background"
            fill={true}
            style={{ objectFit: "cover", filter: "brightness(25%)" }}
            className="md:hidden z-0"
          />
          <Card className="w-4/5 max-w-[450px] z-20">
            <CardHeader>
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription className="text-xs">
                Choose your preferred sign in method
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center align-center">
                <Button variant="outline" className="text-xs w-full sm:w-fit">
                  <Github className="mr-2 w-5 h-5" />
                  GitHub
                </Button>
              </div>
              <div className="mt-4 mb-6 flex items-center gap-2 text-slate-500 text-xs">
                <Separator className="flex-grow w-fit" />
                OR CONTINUE WITH
                <Separator className="flex-grow w-fit" />
              </div>
              <form className="w-full">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email:</Label>
                  <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Label htmlFor="password">Password:</Label>
                  <Input type="text" id="password" placeholder="Password" />
                </div>
                <Button variant="default" className="w-full mt-3">
                  Submit
                </Button>
              </form>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between text-xs w-full">
                <p className="text-slate-400">
                  Don't have an account?{" "}
                  <Link href="/signup" className="text-primary">
                    Sign Up
                  </Link>
                </p>
                <Link href="#">Forgot password</Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}
