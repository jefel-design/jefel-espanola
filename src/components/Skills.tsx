export function Skills() {
  const technicalSkills = [
    'Photoshop',
    'Illustrator',
    'After Effects',
    'Premiere Pro',
    'Figma',
    'WordPress',
    'Elementor',
  ];

  const softSkills = ['Communication', 'Critical Thinking'];

  return (
    <section
      id="skills"
      className="pt-12 pb-14 bg-black border-b border-white/[0.08]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-10">
        
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
          Skills
        </h2>

        <div className="space-y-8">
          
          {/* Technical Skills */}
          <div>
            <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
              Technical
            </h3>

            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg text-sm 
                             bg-white/5 text-white/70 
                             border border-white/10
                             transition-all duration-300
                             hover:border-[#046ab4] hover:text-[#046ab4]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">
              Soft Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg text-sm 
                             bg-white/5 text-white/70 
                             border border-white/10
                             transition-all duration-300
                             hover:border-[#046ab4] hover:text-[#046ab4]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}