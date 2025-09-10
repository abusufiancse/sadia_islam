"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-primary">Sadia Islam</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Data Analyst & Machine Learning Researcher
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Currently interning at Dream 71 Bangladesh Limited, specializing in machine learning, data visualization,
              and explainable AI with published research in medical data analysis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group" onClick={scrollToAbout}>
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2+</div>
              <div className="text-muted-foreground">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3.45</div>
              <div className="text-muted-foreground">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">ML Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
