
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "HR Director",
      company: "TechCorp",
      content: "SkillSync reduced our time-to-hire by 60%. The AI matching is incredibly accurate and saves us countless hours of manual screening.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Software Engineer",
      company: "StartupHub",
      content: "Found my dream job in just 2 weeks! The personalized recommendations were spot-on and the application tracking made everything seamless.",
      rating: 5
    },
    {
      name: "Jennifer Kim",
      role: "Talent Acquisition Lead",
      company: "InnovateCo",
      content: "The automated job description generation alone has saved us 20 hours per week. SkillSync is a game-changer for our recruitment team.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              What Our Users Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied recruiters and job seekers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.role}</p>
                <p className="text-blue-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
