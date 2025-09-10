"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Database, BarChart3, Brain, Wrench, Globe } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "LaTeX", level: 75 },
      ],
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: [
        { name: "Machine Learning", level: 88 },
        { name: "Deep Learning", level: 82 },
        { name: "NLP", level: 78 },
        { name: "Explainable AI", level: 85 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: [
        { name: "Scikit-learn", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Pandas", level: 92 },
      ],
    },
    {
      title: "Data Analysis & Visualization",
      icon: BarChart3,
      skills: [
        { name: "Data Cleaning", level: 95 },
        { name: "Statistical Analysis", level: 88 },
        { name: "Power BI", level: 85 },
        { name: "Tableau", level: 80 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Database,
      skills: [
        { name: "Jupyter Notebook", level: 95 },
        { name: "GitHub", level: 88 },
        { name: "VS Code", level: 90 },
        { name: "Microsoft Office", level: 92 },
      ],
    },
    {
      title: "Languages",
      icon: Globe,
      skills: [
        { name: "Bengali (Native)", level: 100 },
        { name: "English (Fluent)", level: 90 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive technical skills in data analysis, machine learning, and research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Additional Competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">Critical Thinking</div>
                  <p className="text-sm text-muted-foreground">Problem-solving approach</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">Research</div>
                  <p className="text-sm text-muted-foreground">Academic & industry research</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">Communication</div>
                  <p className="text-sm text-muted-foreground">Technical documentation</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">Time Management</div>
                  <p className="text-sm text-muted-foreground">Project coordination</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
