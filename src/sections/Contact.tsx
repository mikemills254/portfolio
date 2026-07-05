import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { useFadeIn } from '../hooks/use-fade-in';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const SUGGESTIONS = [
  'I need a RAG pipeline built from scratch',
  'Help scaling our AI infrastructure',
  'Modernize our legacy stack',
  'Lead a technical team short-term',
];

const REPLY = `Got it — I'll review the details and get back to you within 24 hours.

If it's urgent, reach out directly at hello@example.com. Looking forward to hearing more.`;

type Stage = 'idle' | 'thinking' | 'replied';

interface Message {
  role: 'assistant' | 'user';
  text: string;
}

function ThinkingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3" aria-label="Thinking">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

function AssistantBubble({ text, isTyping }: { text?: string; isTyping?: boolean }) {
  return (
    <div className="flex items-start gap-3">
      {/* Avatar */}
      <div className="w-7 h-7 rounded-sm bg-primary flex-shrink-0 flex items-center justify-center mt-0.5">
        <span className="text-primary-foreground text-[10px] font-bold tracking-tight select-none">AI</span>
      </div>
      <div className="bg-secondary border border-border rounded-lg rounded-tl-sm px-4 py-3 text-sm leading-relaxed text-foreground max-w-sm">
        {isTyping ? <ThinkingDots /> : (
          <p className="whitespace-pre-line">{text}</p>
        )}
      </div>
    </div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="bg-primary text-primary-foreground rounded-lg rounded-tr-sm px-4 py-3 text-sm leading-relaxed max-w-sm">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const sectionRef = useFadeIn();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: "Hi — I'm available for select consulting engagements. What are you working on?",
    },
  ]);
  const [stage, setStage] = useState<Stage>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [input, setInput] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; input?: string }>({});
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (messages.length > 1 || stage !== 'idle') {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages, stage]);

  function validate() {
    const e: typeof errors = {};
    if (!name.trim() || name.trim().length < 2) e.name = 'Required';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Valid email required';
    if (!input.trim() || input.trim().length < 5) e.input = 'Say something';
    return e;
  }

  async function send() {
    if (stage !== 'idle') return;
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});

    const userMsg = `${input.trim()}\n\n— ${name.trim()} (${email.trim()})`;
    setMessages((m) => [...m, { role: 'user', text: input.trim() }]);
    setInput('');
    setStage('thinking');

    await new Promise((r) => setTimeout(r, 1800));

    setStage('replied');
    setMessages((m) => [...m, { role: 'assistant', text: REPLY }]);
    void userMsg; // logged/sent in real impl
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) send();
  }

  function applySuggestion(s: string) {
    setInput(s);
    textareaRef.current?.focus();
  }

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto"
      data-testid="section-contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24" ref={sectionRef}>

        {/* Left — info */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-4" data-testid="text-contact-label">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" data-testid="text-contact-headline">
            Let's build something that matters.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
            I'm selective about engagements — I work best with teams who have a real problem
            and the conviction to solve it properly. Tell me what you're building.
          </p>

          <div className="space-y-5">
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group w-fit"
              data-testid="link-contact-email"
            >
              <div className="w-9 h-9 rounded-sm border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium text-sm">hello@mills.co.ke</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mills-mike/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group w-fit"
              data-testid="link-contact-linkedin"
            >
              <div className="w-9 h-9 rounded-sm border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <LinkedInIcon className="w-4 h-4" />
              </div>
              <span className="font-medium text-sm">LinkedIn</span>
            </a>

            <a
              href="https://github.com/mikemills254"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group w-fit"
              data-testid="link-contact-github"
            >
              <div className="w-9 h-9 rounded-sm border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <SiGithub className="w-4 h-4" />
              </div>
              <span className="font-medium text-sm">GitHub</span>
            </a>
          </div>
        </div>

        {/* Right — AI chat interface */}
        <div
          className="flex flex-col border border-border rounded-xl overflow-hidden bg-background shadow-sm"
          style={{ minHeight: '520px' }}
          data-testid="chat-contact-panel"
        >
          {/* Chrome bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
            </div>
            <span className="text-xs text-muted-foreground font-mono ml-2 select-none">
              new-engagement.thread
            </span>
            <span className="ml-auto flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground">online</span>
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 min-h-0" style={{ maxHeight: '280px' }}>
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.role === 'assistant'
                    ? <AssistantBubble text={msg.text} />
                    : <UserBubble text={msg.text} />}
                </motion.div>
              ))}
              {stage === 'thinking' && (
                <motion.div
                  key="thinking"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AssistantBubble isTyping />
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={bottomRef} />
          </div>

          {/* Suggestion chips */}
          {stage === 'idle' && messages.length === 1 && (
            <div className="px-5 pb-3 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => applySuggestion(s)}
                  className="text-xs px-3 py-1.5 rounded-full border border-border bg-secondary/50 hover:border-primary/40 hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  data-testid={`chip-suggestion-${s.slice(0, 10).replace(/\s/g, '-')}`}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input area */}
          {stage !== 'replied' && (
            <div className="border-t border-border px-4 py-4 space-y-3 bg-background">
              {/* Name + email row */}
              <div className="flex gap-2">
                <div className="flex-1">
                  <input
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrors((er) => ({ ...er, name: undefined })); }}
                    placeholder="Your name"
                    className={`w-full text-xs px-3 py-2 rounded-md border bg-secondary/30 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground/60 ${errors.name ? 'border-destructive' : 'border-border'}`}
                    aria-label="Your name"
                    aria-invalid={!!errors.name}
                    data-testid="input-contact-name"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors((er) => ({ ...er, email: undefined })); }}
                    placeholder="your@email.com"
                    className={`w-full text-xs px-3 py-2 rounded-md border bg-secondary/30 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted-foreground/60 ${errors.email ? 'border-destructive' : 'border-border'}`}
                    aria-label="Your email"
                    aria-invalid={!!errors.email}
                    data-testid="input-contact-email"
                  />
                </div>
              </div>

              {/* Message + send */}
              <div className={`flex items-end gap-2 rounded-lg border bg-secondary/20 px-3 py-2 transition-all focus-within:ring-1 focus-within:ring-primary/30 focus-within:border-primary ${errors.input ? 'border-destructive' : 'border-border'}`}>
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => { setInput(e.target.value); setErrors((er) => ({ ...er, input: undefined })); }}
                  onKeyDown={onKeyDown}
                  rows={2}
                  placeholder="Describe what you're building or the problem you're solving… (⌘↵ to send)"
                  className="flex-1 resize-none bg-transparent text-sm focus:outline-none placeholder:text-muted-foreground/50 leading-relaxed"
                  aria-label="Your message"
                  aria-invalid={!!errors.input}
                  aria-describedby={errors.input ? 'msg-error' : undefined}
                  data-testid="input-contact-message"
                />
                <button
                  onClick={send}
                  disabled={stage !== 'idle'}
                  className="flex-shrink-0 w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed mb-0.5"
                  aria-label="Send message"
                  data-testid="button-contact-submit"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Inline errors */}
              {(errors.name || errors.email || errors.input) && (
                <p id="msg-error" role="alert" className="text-destructive text-xs">
                  {errors.name
                    ? 'Name required. '
                    : errors.email
                      ? 'Valid email required. '
                      : 'Write a message first.'}
                </p>
              )}
            </div>
          )}

          {/* Replied state footer */}
          {stage === 'replied' && (
            <div className="border-t border-border px-5 py-4 bg-secondary/20 text-xs text-muted-foreground text-center">
              Message sent — I'll be in touch within 24 hours.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
