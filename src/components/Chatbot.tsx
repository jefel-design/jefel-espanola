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

  if (q.includes('hi') || q.includes('hello') || q.includes('hey')) {
    return `Hi, I can help with:
- Work experience and project highlights
- Skills and tools
- Awards and education
- Contact details`;
  }

  if (
    q.includes('service') ||
    q.includes('offer') ||
    q.includes('help') ||
    q.includes('hire') ||
    q.includes('available')
  ) {
    return `Services Jefel can offer:
- Branding and visual identity
- UI/Web design for modern interfaces
- Front-end development (React, Tailwind, TypeScript)
- WordPress and Elementor website builds
- Promotional creatives and social visuals
- Apparel and merchandise graphics`;
  }

  if (q.includes('experience') || q.includes('work') || q.includes('company') || q.includes('project')) {
    const topExperience = knowledge.experience
      .map((item) => `${item.company} (${item.period}, ${item.roleType})`)
      .join('; ');

    return `Experience overview:
- ${topExperience}
Current focus:
- ${knowledge.experience[0].focus}
Recent project highlights:
- ${formatList(knowledge.experience[0].projects)}`;
  }

  if (
    q.includes('skill') ||
    q.includes('tool') ||
    q.includes('tech') ||
    q.includes('stack') ||
    q.includes('software')
  ) {
    return `Skills and tools:
Development:
- ${formatList(knowledge.skills.development, 6)}
Design:
- ${formatList(knowledge.skills.design)}
CMS:
- ${formatList(knowledge.skills.cms)}
Video:
- ${formatList(knowledge.skills.video)}
Languages:
- ${formatList(knowledge.skills.languages)}`;
  }

  if (q.includes('education') || q.includes('study') || q.includes('degree')) {
    return `Education and training:
- ${knowledge.education.join('\n- ')}`;
  }

  if (q.includes('award') || q.includes('achievement') || q.includes('recognition')) {
    return `Awards and achievements:
- ${knowledge.awards.join('\n- ')}`;
  }

  if (q.includes('location') || q.includes('based') || q.includes('where')) {
    return `Location:
- ${knowledge.location}`;
  }

  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('phone') ||
    q.includes('linkedin') ||
    q.includes('github')
  ) {
    return `Contact details:
- Email: ${knowledge.contact.email}
- Phone: ${knowledge.contact.phone}
- LinkedIn: ${knowledge.contact.linkedin}
- GitHub: ${knowledge.contact.github}`;
  }

  if (q.includes('about') || q.includes('who')) {
    return `About Jefel:
- ${knowledge.about}
- Based in ${knowledge.location}`;
  }

  return `I can help with:
- Services and capabilities
- Experience and project highlights
- Skills and tools
- Education and awards
- Contact details
Try asking:
- "What services do you offer?"
- "Tell me about recent work."`;
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
        "Hi, I'm Jefel's portfolio assistant. Ask me about skills, work experience, projects, or how to contact Jefel.",
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
            <div className="flex items-center gap-2 text-[var(--card-text-primary)]">
              <MessageCircle size={18} />
              <p className="text-sm font-light">Portfolio Assistant</p>
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
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
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
              <div className="flex justify-start">
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
