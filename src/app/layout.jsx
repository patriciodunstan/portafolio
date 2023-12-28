"use client"
import "./globals.css"
import { NavBar } from "@/Components/NavBar/NavBar"
import { Footer } from "@/Components/Footer/Footer"
import { useEffect, useState } from "react"
import { metadata } from "@/util/metadata"

export default function RootLayout({ children, className = "" }) {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(localStorage.getItem("theme"))
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches

    // Si el tema no está establecido, utilizar la preferencia del sistema operativo
    if (!theme) {
      setTheme(isDarkMode ? "dark" : "light")
    }

    // Escuchar los cambios en la preferencia del sistema operativo

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        setTheme(isDarkMode ? "dark" : "light")
      })

    // Aplicar el tema
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="pt-0 dark:bg-black">
        <NavBar />
        <section
          className={`w-full h-full inline-block z-0 bg-white p-32 pt-1 px-2 dark:bg-black xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
        >
          {children}
        </section>
        <Footer />
      </body>
    </html>
  )
}
