"use client"

import { useState, useEffect } from "react"

export const useToast = () => {
    const toast = ({ title, description }: { title: string; description: string }) => {
        alert(`${title}\n${description}`)
    }
    return { toast }
}
