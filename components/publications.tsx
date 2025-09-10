import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Database } from "lucide-react"

export function Publications() {
  const publications = [
    {
      title: "A Precise Machine Learning Model: Detecting Cervical Cancer Using Feature Selection and Explainable AI",
      journal: "Journal of Pathology Informatics",
      date: "September 2024",
      type: "Research Article",
      icon: FileText,
      description:
        "Developed a feature-selected ML model to classify the risk of cervical cancer from medical data. Applied scikit-learn and SHAP for model development and explainability.",
      link: "https://doi.org/10.1016/j.jpi.2024.100398",
      tags: ["Machine Learning", "Healthcare", "Explainable AI", "Feature Selection"],
    },
    {
      title: "Tree Leaf Classification Dataset",
      journal: "Mendeley Data",
      date: "December 2024",
      type: "Dataset",
      icon: Database,
      description:
        "Collected and labeled tree leaf images to support deep learning classification research. Comprehensive dataset for computer vision applications.",
      link: "https://data.mendeley.com/datasets/bgmftbm8zt/2",
      tags: ["Computer Vision", "Deep Learning", "Dataset", "Classification"],
    },
  ]

  return (
    <section id="publications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Publications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Research contributions in machine learning, healthcare AI, and computer vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <pub.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight text-balance group-hover:text-primary transition-colors">
                        {pub.title}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                        <p className="text-sm font-medium text-primary">{pub.journal}</p>
                        <span className="hidden sm:block text-muted-foreground">•</span>
                        <p className="text-sm text-muted-foreground">{pub.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-pretty">{pub.description}</p>

                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  asChild
                >
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Publication
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
