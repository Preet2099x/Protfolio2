
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "HTML", "CSS", "SQL", "C/C++", "Java", "Python"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Redux", "Node.js", "Springboot", "Bootstrap", "Material UI"]
    },
    {
      title: "Developer Tools",
      skills: ["Git", "GitHub", "VSCode", "Chrome DevTools", "Postman", "Docker"]
    },
    {
      title: "AI & Technologies",
      skills: ["REST APIs", "Sass", "Tailwind CSS", "Webpack", "JSON", "FastAPI", "MySQL", "MongoDB"]
    },
    {
      title: "AI Tools & Technologies",
      skills: ["LangChain", "QDrant", "BoltAI", "Vector Search", "RAG Applications", "LLMs"]
    }
  ];

  const achievements = [
    {
      title: "Technika 2023 Hackathon Winner",
      description: "Secured 1st position among teams from 20+ colleges"
    },
    {
      title: "Technical Lead - GDG On Campus Jamshedpur", 
      description: "Led workshops and initiatives on web development and AI tools"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, AI-powered web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-blue-700 dark:text-blue-300">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="text-lg text-green-700 dark:text-green-300">
                  Arka Jain University
                </CardTitle>
                <p className="text-sm text-muted-foreground">Aug. 2022 - May 2026</p>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">Bachelor of Technology in Computer Science Engineering</p>
                <p className="text-sm text-muted-foreground">CGPA: 8.71</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
