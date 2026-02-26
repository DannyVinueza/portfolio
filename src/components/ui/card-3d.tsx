"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const CardContainer = ({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const rotY = ((mouseX - width / 2) / width) * 20;
        const rotX = ((mouseY - height / 2) / height) * -20;
        setRotateX(rotX);
        setRotateY(rotY);
    };

    const handleMouseEnter = () => setIsHovered(true);

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn("flex items-center justify-center py-2", containerClassName)}
            style={{
                perspective: "1000px",
            }}
        >
            <motion.div
                className={cn("w-full relative transition-all duration-200 ease-linear", className)}
                animate={{
                    rotateX: isHovered ? rotateX : 0,
                    rotateY: isHovered ? rotateY : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                }}
                style={{
                    transformStyle: "preserve-3d",
                    willChange: isHovered ? "transform" : "auto"
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export const CardBody = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "h-full w-full [transform-style:preserve-3d]",
                className
            )}
        >
            {children}
        </div>
    );
};

export const CardItem = ({
    children,
    className,
    translateZ = 0,
    ...props
}: {
    children?: React.ReactNode;
    className?: string;
    translateZ?: number | string;
    [key: string]: any;
}) => {
    return (
        <div
            className={className}
            style={{
                transform: `translateZ(${translateZ}px)`,
            }}
            {...props}
        >
            {children}
        </div>
    );
};
