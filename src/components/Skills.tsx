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
      className="pt-12 pb-14 bg-[var(--bg-primary)] border-b border-[var(--border)]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-10">
        
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--text-primary)]">
          Skills
        </h2>

        <div className="space-y-8">
          
          {/* Technical Skills */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-[var(--text-muted)]">
              Technical
            </h3>

            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg text-sm 
                             border transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--card-tag-bg)',
                    color: 'var(--card-tag-text)',
                    borderColor: 'var(--card-border)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--card-border)';
                    e.currentTarget.style.color = 'var(--card-tag-text)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4 text-[var(--text-muted)]">
              Soft Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg text-sm 
                             border transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--card-tag-bg)',
                    color: 'var(--card-tag-text)',
                    borderColor: 'var(--card-border)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--card-border)';
                    e.currentTarget.style.color = 'var(--card-tag-text)';
                  }}
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