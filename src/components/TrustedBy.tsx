
const TrustedBy = () => {
  const companies = [
    "TechCorp", "InnovateCo", "StartupHub", "DataDyne", "CloudTech", "AIware"
  ];

  return (
    <section className="py-16 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-lg">Trusted by leading companies</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div 
              key={company}
              className="text-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                <span className="text-gray-300 font-semibold">{company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
