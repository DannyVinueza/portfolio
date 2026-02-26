"use client";

import { useLanguage } from "./language-provider";
import { portfolioDataEs } from "@/data/portfolio_es";
import { portfolioDataEn } from "@/data/portfolio_en";

export function usePortfolioData() {
    const { language } = useLanguage();
    return language === "es" ? portfolioDataEs : portfolioDataEn;
}
