
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "PDF-RAG Assistant",
      description: "An AI-powered PDF assistant that enables natural language querying over documents by combining vector search with LLMs. Built with Next.js, Node.js, QDrant, and BoltAI.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      technologies: ["Next.js", "Node.js", "QDrant", "BoltAI", "LangChain", "Tailwind CSS"],
      github: "https://github.com/Preet2009",
      live: "#",
      featured: true
    },
    {
      title: "Qezee - Comprehensive Quiz App",
      description: "A full-featured quiz application with quiz creation, scheduling, mock tests, email verification, and OTP generation. Includes performance tracking and live leaderboard.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      technologies: ["React", "Redux", "Sass", "MongoDB", "Middlewares"],
      github: "https://github.com/Preet2009",
      live: "https://qezee.onrender.com",
      featured: true
    },
    {
      title: "Stock Analysis Dashboard",
      description: "Real-time stock analysis application with interactive candlestick charts, data fetching from APIs, and dynamic visualization using ApexCharts library.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      technologies: ["React", "ApexCharts", "REST APIs", "JavaScript"],
      github: "https://github.com/Preet2009",
      live: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work combining traditional web development with cutting-edge AI technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                project.featured ? 'ring-2 ring-blue-500/20' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.live !== "#" && (
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ArrowUp className="h-4 w-4 mr-2 rotate-45" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a href="https://github.com/Preet2009" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
