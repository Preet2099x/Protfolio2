
import { Shield, Clock, BarChart, Brain, Globe, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Advanced machine learning algorithms ensure the perfect fit between candidates and positions."
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Get instant notifications on application status, new matches, and hiring progress."
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Comprehensive insights and metrics to optimize your hiring strategy and career growth."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Enterprise-grade security ensures your data and information remain protected."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with opportunities and talent from around the world."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Access all features seamlessly across desktop, tablet, and mobile devices."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to revolutionize your hiring process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
