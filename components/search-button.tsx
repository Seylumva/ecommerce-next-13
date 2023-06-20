"use client"

import * as React from "react"
import { Search } from "lucide-react"

import { Button } from "./ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command"

export default function SearchButton({ ...props }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)} {...props}>
        <Search className="lg:mr-2 h-4 w-4" />
        <span className="font-semibold lg:inline hidden">Search...</span>
        <div className="text-xs font-mono px-2 py-1 dark:bg-slate-900 bg-slate-200 dark:border-slate-700 border-slate-300 border rounded ml-16 lg:inline hidden">
          Ctrl K
        </div>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
