import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="contact"
      className="pt-12 pb-14 bg-[var(--bg-primary)] border-b border-[var(--border)]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* Dark Card (FORCED BLACK) */}
        <RevealOnScroll className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] p-8 md:p-10">

          {/* Gradient Layer */}
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background:
                'linear-gradient(45deg, #000000 0%, #000000 50%, #046ab4 75%, #b6fff6 100%)',
            }}
          />

          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Content */}
          <div className="relative z-10 space-y-8">

            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
              Contact
            </h2>

            <div className="flex font-light flex-wrap gap-8 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <Phone size={16} />
                0909 698 4089
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} />
                jefeljohnmaitem@gmail.com
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid font-light sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg text-sm
                             bg-white/10 border border-white/20
                             text-white placeholder-white/50
                             focus:outline-none focus:border-[#046ab4]
                             transition-all duration-300"
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg text-sm
                             bg-white/10 border border-white/20
                             text-white placeholder-white/50
                             focus:outline-none focus:border-[#046ab4]
                             transition-all duration-300"
                  required
                />
              </div>

              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full font-light px-4 py-3 rounded-lg text-sm
                           bg-white/10 border border-white/20
                           text-white placeholder-white/50
                           focus:outline-none focus:border-[#046ab4]
                           transition-all duration-300"
                required
              />

              <button
                type="submit"
                className="px-6 font-light py-3 rounded-lg text-sm font-medium
                           bg-white/10 border border-white/20
                           text-white transition-all duration-300
                           hover:bg-[#046ab4] hover:border-[#046ab4]"
              >
                Send Message
              </button>

            </form>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
