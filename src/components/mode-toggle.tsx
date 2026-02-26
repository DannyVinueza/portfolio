"use client"

import * as React from "react"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full bg-background/50 border border-border" />
    }

    const toggleTheme = () => {
        if (theme === "light") setTheme("dark")
        else if (theme === "dark") setTheme("system")
        else setTheme("light")
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative w-9 h-9 rounded-full bg-background/50 hover:bg-secondary/80 border border-border overflow-hidden transition-colors"
            title="Cambiar tema"
        >
            {theme === "light" && <Sun className="h-4 w-4 text-foreground" />}
            {theme === "dark" && <Moon className="h-4 w-4 text-foreground" />}
            {theme === "system" && <Laptop className="h-4 w-4 text-foreground" />}
            <span className="sr-only">Cambiar tema</span>
        </Button>
    )
}
