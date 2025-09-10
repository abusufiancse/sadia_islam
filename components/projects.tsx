import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Globe, Users } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Online Tutorial Finder",
      description:
        "Developed a web application that helps students find tutors based on their location and subject input. Features include location-based search, subject filtering, and tutor profiles.",
      technologies: ["MySQL", "PHP", "HTML/CSS", "JavaScript"],
      type: "Web Application",
      icon: Globe,
      features: [
        "Location-based tutor search",
        "Subject-specific filtering",
        "User-friendly interface",
        "Database-driven architecture",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Cervical Cancer Detection Model",
      description:
        "Machine learning model for early detection of cervical cancer using medical data. Implemented feature selection techniques and explainable AI for medical professionals.",
      technologies: ["Python", "Scikit-learn", "SHAP", "Pandas", "NumPy"],
      type: "Research Project",
      icon: Users,
      features: [
        "Feature selection optimization",
        "Explainable AI implementation",
        "Medical data preprocessing",
        "Model interpretability",
      ],
      github: "#",
      publication: "https://doi.org/10.1016/j.jpi.2024.100398",
    },
    {
      title: "Tree Leaf Classification System",
      description:
        "Deep learning system for automated tree species identification through leaf image analysis. Created comprehensive dataset and implemented CNN-based classification.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Keras", "Computer Vision"],
      type: "Deep Learning Project",
      icon: Users,
      features: [
        "Image preprocessing pipeline",
        "CNN architecture design",
        "Dataset creation and labeling",
        "Species classification accuracy",
      ],
      github: "#",
      dataset: "https://data.mendeley.com/datasets/bgmftbm8zt/2",
    },
  ]

  const volunteeringExperience = {
    title: "Press Secretary - Cyber Security Club, DIU",
    period: "August 2023 – March 2024",
    description: "Coordinated and managed the club's communications and public relations efforts.",
    responsibilities: [
      "Organized and promoted cybersecurity events and workshops",
      "Prepared press releases and promotional materials",
      "Managed club communications and newsletters",
      "Coordinated with speakers and industry professionals",
    ],
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects & Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Showcasing technical projects and leadership experience in data science and web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight text-balance group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.publication && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.publication} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Publication
                      </a>
                    </Button>
                  )}
                  {project.dataset && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.dataset} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Dataset
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Volunteering Experience */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Leadership & Volunteering</h3>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-xl">{volunteeringExperience.title}</span>
                  <p className="text-sm text-muted-foreground font-normal">{volunteeringExperience.period}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">{volunteeringExperience.description}</p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground">Key Responsibilities:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {volunteeringExperience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
