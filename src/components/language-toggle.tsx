"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <Button variant="ghost" size="icon" className="w-12 h-9 rounded-md bg-background/50 border border-border" />
    }

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "es" : "en")
    }

    return (
        <Button
            variant="ghost"
            onClick={toggleLanguage}
            className="relative h-9 px-3 rounded-md bg-background/50 hover:bg-secondary/80 border border-border overflow-hidden transition-colors flex items-center gap-2"
            title={language === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
        >
            <Globe className="h-4 w-4 text-foreground" />
            <span className="text-sm font-semibold">{language === "en" ? "EN" : "ES"}</span>
        </Button>
    )
}
