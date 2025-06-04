
const About = () => {
  const experiences = [
    {
      title: "Front-End Intern",
      company: "TechMantia Global",
      period: "May 2024 - July 2024",
      description: "Developed front-end stock analysis app using React, implemented real-time data fetching, and created interactive candlestick charts with ApexCharts library.",
      type: "Remote"
    },
    {
      title: "Web Developer Intern", 
      company: "Agentic (Early Stage Startup)",
      period: "Oct 2024 - April 2025",
      description: "Developed responsive UI with React, contributed to RAG applications for AI agents, and collaborated on API integrations with seamless user experiences.",
      type: "Current"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Computer Science Engineering student passionate about leveraging AI to build exceptional web experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science Engineering student at Arba Jain University, passionate about building 
                cutting-edge web applications that leverage the power of AI. My journey combines traditional 
                web development skills with modern AI tools to create fast, efficient, and visually impressive solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through my internships and projects, I've gained hands-on experience with React, Node.js, 
                and AI technologies like LangChain. I believe in the power of AI to transform how we build 
                and interact with web applications, and I'm constantly exploring new ways to integrate these 
                technologies into my work.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold">{exp.title}</h4>
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    exp.type === 'Current' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                  }`}>
                    {exp.type}
                  </span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
