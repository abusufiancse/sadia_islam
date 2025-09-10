import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate data analyst with expertise in machine learning and a strong research background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated Data Analyst currently pursuing my B.Sc in Computer Science and Engineering at Daffodil
              International University with a CGPA of 3.45/4.00. My passion lies in transforming complex data into
              actionable insights through machine learning and statistical analysis.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My research focuses on healthcare applications of AI, particularly in medical diagnosis and explainable
              AI. I've published research on cervical cancer detection using machine learning and contributed to
              open-source datasets for the research community.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently interning at Dream 71 Bangladesh Limited, I'm gaining hands-on experience in real-world data
              analysis while continuing to develop my skills in Python, SQL, and various ML frameworks.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Education</h3>
                    <p className="text-muted-foreground">B.Sc in Computer Science and Engineering</p>
                    <p className="text-sm text-muted-foreground">Daffodil International University (2021-2025)</p>
                    <p className="text-sm font-medium text-primary">CGPA: 3.45/4.00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Current Role</h3>
                    <p className="text-muted-foreground">Data Analyst Intern</p>
                    <p className="text-sm text-muted-foreground">Dream 71 Bangladesh Limited</p>
                    <p className="text-sm font-medium text-primary">July 2025 - Present</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">Mirpur-1, Dhaka, Bangladesh</p>
                    <p className="text-sm text-muted-foreground">Available for remote work</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
