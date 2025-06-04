
import { Bot, Users, Zap, Target, FileText, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const recruiterSteps = [
    {
      icon: FileText,
      title: "AI-Generated Job Descriptions",
      description: "Our AI creates compelling job descriptions based on your requirements and industry best practices."
    },
    {
      icon: Target,
      title: "Smart Candidate Matching",
      description: "Advanced algorithms analyze resumes and match the most qualified candidates to your openings."
    },
    {
      icon: Bot,
      title: "Automated Outreach",
      description: "Personalized messages are sent automatically to top candidates, saving you hours of manual work."
    }
  ];

  const seekerSteps = [
    {
      icon: Zap,
      title: "AI-Curated Job Listings",
      description: "Get personalized job recommendations based on your skills, experience, and career goals."
    },
    {
      icon: TrendingUp,
      title: "Resume Optimization",
      description: "Receive AI-powered suggestions to improve your resume and increase your chances of getting hired."
    },
    {
      icon: Users,
      title: "Smart Application Tracking",
      description: "Track all your applications in one place with intelligent insights and follow-up reminders."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              How SkillSync Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Streamlined automation for both sides of the hiring equation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* For Recruiters */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-blue-400 mb-4">For Recruiters</h3>
              <p className="text-gray-300 text-lg">Automate your hiring process and find the best talent faster</p>
            </div>
            <div className="space-y-6">
              {recruiterSteps.map((step, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Job Seekers */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-green-400 mb-4">For Job Seekers</h3>
              <p className="text-gray-300 text-lg">Get personalized job recommendations and career insights</p>
            </div>
            <div className="space-y-6">
              {seekerSteps.map((step, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
