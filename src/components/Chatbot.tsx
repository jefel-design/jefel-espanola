import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type ChatbotKnowledge = {
  about: string;
  location: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  skills: {
    development: string[];
    design: string[];
    cms: string[];
    video: string[];
    strengths: string[];
    languages: string[];
  };
  experience: Array<{
    company: string;
    period: string;
    roleType: string;
    focus: string;
    projects: string[];
  }>;
  education: string[];
  awards: string[];
};

const knowledge: ChatbotKnowledge = {
  about:
    'Jefel Espanola is a designer and front-end developer focused on branding, UI design, and modern web experiences.',
  location: 'Surigao del Norte, Philippines',
  contact: {
    email: 'jefeljohnmaitem@gmail.com',
    phone: '0909 698 4089',
    linkedin: 'https://www.linkedin.com/in/jefel/',
    github: 'https://github.com/jefel-design',
  },
  skills: {
    development: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind', 'TypeScript', 'Vite', 'GitHub'],
    design: ['Figma', 'Photoshop', 'Illustrator', 'InDesign'],
    cms: ['WordPress', 'Elementor'],
    video: ['Adobe Premiere Pro', 'After Effects'],
    strengths: ['Problem Solving', 'Communication', 'Adaptability', 'Self-Learning'],
    languages: ['Tagalog', 'English', 'Cebuano'],
  },
  experience: [
    {
      company: 'Ark Design B.V.',
      period: '2024 - Present',
      roleType: 'Full-time',
      focus: 'Graphic and UI/Web Designer working on WordPress websites, digital ads, branding, and software interfaces.',
      projects: ['Product Configurator Website Redesign', 'Brand Identity Package', 'ArkDesign Redesign'],
    },
    {
      company: 'TNC Kaiserin',
      period: '2024',
      roleType: 'Freelance',
      focus: 'Led graphic design projects and promotional materials for brand campaigns.',
      projects: ['Roster', 'Roster Reveal', 'MVP'],
    },
    {
      company: 'Bren Esports',
      period: '2024',
      roleType: 'Freelance',
      focus: 'Player-specific graphic design for professional esports player Shizou.',
      projects: ['Roster', 'Game Day'],
    },
    {
      company: 'Surigao Esports Collective',
      period: '2023 - 2024',
      roleType: 'Contract',
      focus: 'Led broadcast graphics, social assets, and promotional visuals.',
      projects: ['CEAP', 'Surecol 1'],
    },
    {
      company: 'Jefel Arts',
      period: '2022 - Present',
      roleType: 'Freelance',
      focus: 'Apparel graphic designer for commission-based merch and streetwear visuals.',
      projects: ['Max Poster', 'Ant Poster', 'YG'],
    },
  ],
  education: [
    'BS Information Technology, STI College Surigao (2021 - 2025).',
    'Internship / Academic Outreach, STI College Surigao (2025) with face-to-face career presentations.',
  ],
  awards: [
    'Best Capstone Project (STI College Surigao, 2025).',
    'DOST Caraga Startup Pitch Fest - Challenge 4 Champion (2025).',
    '3rd Place - Logo Design Competition, PSITE Caraga Region (2024).',
  ],
};

const promptChips = [
  'What services can Jefel offer?',
  'Tell me about work experience',
  'What tools and skills are used?',
  'How can I get in touch?',
];

function formatList(items: string[], limit = items.length) {
  return items.slice(0, limit).join(', ');
}

function getChatResponse(question: string) {
  const q = question.toLowerCase();
  const hasAny = (keywords: string[]) => keywords.some((keyword) => q.includes(keyword));
  const sections: string[] = [];
  const followUps: string[] = [];

  const openers = [
    'Great question.',
    'Thanks for asking.',
    'Happy to share.',
  ];
  const opener = openers[question.trim().length % openers.length];

  const asksGreeting = hasAny(['hi', 'hello', 'hey']);
  const asksSkills = hasAny(['skill', 'strength', 'expertise', 'capability']);
  const asksServices = hasAny(['service', 'offer', 'do you do', 'what do you do']);
  const asksTools = hasAny(['tool', 'tech', 'stack', 'software', 'figma', 'adobe', 'html', 'css', 'javascript']);
  const asksExperience = hasAny(['experience', 'work history', 'background', 'company', 'role']);
  const asksProjects = hasAny(['project', 'portfolio', 'case study', 'sample work']);
  const asksPricing = hasAny(['price', 'pricing', 'cost', 'budget', 'rate', 'quote', 'quotation']);
  const asksProcess = hasAny(['process', 'workflow', 'how do you work', 'how you work', 'steps']);
  const asksTimeline = hasAny(['timeline', 'turnaround', 'how long', 'delivery', 'deadline']);
  const asksCollaboration = hasAny(['collab', 'collaborat', 'hire', 'work with', 'book', 'inquiry', 'available']);
  const asksContact = hasAny([
    'contact',
    'email',
    'phone',
    'linkedin',
    'github',
    'in touch',
    'get in touch',
    'reach you',
    'reach out',
  ]);
  const asksLocation = hasAny(['location', 'based', 'where']);
  const asksAbout = hasAny(['about', 'who are you', 'who you are']);

  if (asksGreeting && !asksSkills && !asksServices && !asksTools && !asksExperience && !asksProjects) {
    sections.push(
      `Hi, thanks for reaching out. I’m Jefel, and I work across Graphic Design, UI/UX, Responsive Web Design, and Front-End Development.`,
    );
    sections.push(
      `I can help turn ideas into clean visuals and functional web experiences that feel aligned from design to implementation.`,
    );
    followUps.push('Are you building something new or improving an existing project?');
  }

  if (asksAbout) {
    sections.push(
      `${opener} ${knowledge.about} I focus on purposeful design and functional web experiences that are easy to use and visually strong.`,
    );
    followUps.push('What kind of project are you currently planning?');
  }

  if (asksSkills || asksTools) {
    sections.push(
      `${opener} My core strengths are Graphic Design, UI/UX Design, Responsive Web Design, and Front-End Development.`,
    );
    sections.push(
      `For design, I mainly use ${formatList(knowledge.skills.design)} and Adobe Creative Suite. For build work, I use ${formatList(
        knowledge.skills.development,
      )}, and I also handle ${formatList(knowledge.skills.cms)} projects when needed.`,
    );
    followUps.push('Do you need design only, or design plus development support?');
  }

  if (asksServices) {
    sections.push(
      `${opener} I offer brand identity work, UI/UX for websites and web apps, responsive web design, front-end development, WordPress/Elementor builds, and campaign creatives.`,
    );
    sections.push(
      `My approach is always outcome-focused, so the design not only looks good but also supports your goals and user flow.`,
    );
    followUps.push('Which part do you want to prioritize first: branding, UI/UX, or development?');
  }

  if (asksExperience || asksProjects) {
    const topExperience = knowledge.experience
      .map((item) => `${item.company} (${item.period}, ${item.roleType})`)
      .join('; ');
    const recentProjects = knowledge.experience
      .slice(0, 3)
      .flatMap((item) => item.projects)
      .slice(0, 6);

    sections.push(
      `${opener} I’ve worked across full-time, contract, and freelance projects with ${topExperience}.`,
    );
    sections.push(
      `My current focus is ${knowledge.experience[0].focus} Recent highlights include ${formatList(recentProjects)}.`,
    );
    followUps.push('Would you like something similar for your own project?');
  }

  if (asksPricing) {
    sections.push(
      `${opener} My pricing is scope-based, so it depends on the type of work, complexity, and timeline.`,
    );
    sections.push(
      `I usually share a clear quotation after reviewing your goals and deliverables so you get a realistic estimate with no guesswork.`,
    );
    followUps.push('Would you like to share your scope so I can outline a practical range?');
  }

  if (asksProcess) {
    sections.push(
      `${opener} My process is simple and collaborative: discovery, design direction, implementation, then testing and handoff.`,
    );
    sections.push(
      `I keep feedback loops active at each step so progress stays clear and decisions are made quickly.`,
    );
    followUps.push('Do you already have brand assets and content prepared?');
  }

  if (asksTimeline) {
    sections.push(
      `${opener} Timelines depend on scope, revision rounds, and how ready your content/assets are.`,
    );
    sections.push(
      `Smaller design tasks move faster, while full website builds take longer. Once I review your scope, I can give you a practical timeline with milestones.`,
    );
    followUps.push('Do you have a target launch date in mind?');
  }

  if (asksCollaboration) {
    sections.push(
      `${opener} Yes, I’m open to freelance and project-based collaborations.`,
    );
    sections.push(
      `I can support end-to-end from concept and design through responsive implementation, or jump in for a specific phase if that’s what your team needs.`,
    );
    followUps.push('Are you looking for one-time delivery or ongoing support?');
  }

  if (asksContact) {
    sections.push(
      `${opener} You can reach me directly at ${knowledge.contact.email} or ${knowledge.contact.phone}.`,
    );
    sections.push(
      `You can also connect with me on LinkedIn (${knowledge.contact.linkedin}) or check my work on GitHub (${knowledge.contact.github}).`,
    );
    followUps.push('Would you like to continue here, or move to email for project details?');
  }

  if (asksLocation) {
    sections.push(
      `${opener} I’m based in ${knowledge.location}, and I work remotely with clients for both design and web projects.`,
    );
    followUps.push('Are you collaborating remotely with your team as well?');
  }

  if (sections.length > 0) {
    const followUp = followUps[0] ?? 'What kind of project are you working on right now?';
    return `${sections.join('\n\n')}\n\n${followUp}`;
  }

  return `I want to give you something genuinely useful, so I’ll keep this focused on design and web work. I specialize in Graphic Design, UI/UX, responsive web design, and front-end development.\n\nIf you share your goal, I can recommend the best direction for your project.\n\nWhat are you trying to build?`;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const typingTimeoutRef = useRef<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi, I’m Jefel Española, a Graphic and UI/Web Designer passionate about crafting purposeful design and functional web experiences.\n\nExplore my work and services, and don’t hesitate to get in touch if you’d like to learn more.",
    },
  ]);

  const canSend = useMemo(() => input.trim().length > 0 && !isTyping, [input, isTyping]);

  const sendMessage = (message: string) => {
    const trimmed = message.trim();
    if (!trimmed || isTyping) return;

    const userMessage: Message = { role: 'user', content: trimmed };
    const assistantReply = getChatResponse(trimmed);
    const typingDelay = Math.min(1400, Math.max(550, assistantReply.length * 9));

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    typingTimeoutRef.current = window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: assistantReply,
        },
      ]);
      setIsTyping(false);
    }, typingDelay);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        window.clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  const renderAssistantContent = (content: string) => {
    const lines = content.split('\n').filter((line) => line.trim().length > 0);

    return (
      <div className="space-y-1.5">
        {lines.map((line, index) => {
          const trimmed = line.trim();
          if (trimmed.startsWith('- ')) {
            return (
              <p key={`${trimmed}-${index}`} className="pl-3">
                <span className="mr-2">•</span>
                {trimmed.slice(2)}
              </p>
            );
          }
          return <p key={`${trimmed}-${index}`}>{trimmed}</p>;
        })}
      </div>
    );
  };

  return (
    <div className="fixed right-4 bottom-4 z-[60] font-light">
      {isOpen && (
        <div
          className="w-[calc(100vw-2rem)] sm:w-[380px] md:w-[420px] rounded-2xl border overflow-hidden mb-3 shadow-2xl"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)',
          }}
        >
          <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--card-border)' }}>
            <div className="flex items-center gap-3 text-[var(--card-text-primary)]">
              <img
                src="jefel.jpeg"
                alt="Jefel Española"
                className="w-9 h-9 rounded-full object-cover border border-[var(--card-border)]"
              />
              <div className="leading-tight">
                <p className="text-sm font-light">Jefel Española</p>
                <p className="text-xs text-[var(--card-text-muted)] inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Online
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md hover:bg-[var(--card-tag-bg)] transition-colors"
              aria-label="Close chatbot"
            >
              <X size={16} className="text-[var(--card-text-muted)]" />
            </button>
          </div>

          <div className="h-[320px] overflow-y-auto p-4 space-y-4 chat-scroll-area">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex items-start gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <img
                    src="jefel.jpeg"
                    alt="Jefel Española"
                    className="w-7 h-7 rounded-full object-cover border border-[var(--card-border)] shrink-0"
                  />
                )}
                <div
                  className={`max-w-[88%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === 'user'
                      ? 'text-white bg-[var(--accent)]'
                      : 'text-[var(--card-text-secondary)]'
                  }`}
                  style={
                    message.role === 'assistant'
                      ? {
                          backgroundColor: 'var(--card-tag-bg)',
                          border: '1px solid var(--card-border)',
                        }
                      : undefined
                  }
                >
                  {message.role === 'assistant'
                    ? renderAssistantContent(message.content)
                    : message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-2 justify-start">
                <img
                  src="jefel.jpeg"
                  alt="Jefel Española"
                  className="w-7 h-7 rounded-full object-cover border border-[var(--card-border)] shrink-0"
                />
                <div
                  className="max-w-[88%] rounded-xl px-4 py-3"
                  style={{
                    backgroundColor: 'var(--card-tag-bg)',
                    border: '1px solid var(--card-border)',
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[var(--card-text-muted)] animate-pulse" />
                    <span
                      className="h-2 w-2 rounded-full bg-[var(--card-text-muted)] animate-pulse"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="h-2 w-2 rounded-full bg-[var(--card-text-muted)] animate-pulse"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-4 pb-4">
            <div className="flex flex-wrap gap-2 mb-3">
              {promptChips.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  disabled={isTyping}
                  className="text-xs px-2.5 py-1.5 rounded-md border transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  style={{
                    borderColor: 'var(--card-border)',
                    color: 'var(--card-text-muted)',
                    backgroundColor: 'var(--card-tag-bg)',
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects, or contact..."
                className="w-full rounded-lg px-4 py-2.5 text-sm bg-transparent border focus:outline-none focus:border-[var(--accent)] text-[var(--card-text-primary)] placeholder-[var(--card-text-muted)]"
                style={{ borderColor: 'var(--card-border)' }}
                disabled={isTyping}
              />

              <button
                type="submit"
                disabled={!canSend}
                className="inline-flex items-center justify-center rounded-lg px-3.5 py-2.5 text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="h-14 px-5 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-xl transition-colors inline-flex items-center gap-2"
          aria-label="Open chat assistant"
        >
          <MessageCircle size={18} />
          <span className="text-sm font-light">Chat with Jefel</span>
        </button>
      )}
    </div>
  );
}
