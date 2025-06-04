
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900/20 via-gray-900 to-green-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Ready to Transform Your Hiring?
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              Start Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              SkillSync Journey
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of companies and professionals who are already using AI to make hiring faster, 
            smarter, and more efficient. Get started today with a free trial.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-xl font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group"
            >
              Get Started Free
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-12 py-4 text-xl font-semibold rounded-lg transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="mt-12 text-gray-400">
            <p>No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
