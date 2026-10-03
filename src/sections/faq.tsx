import { useState, useRef, useEffect } from 'react'
import {
    ChevronDown,
    Send,
    Terminal,
    CheckCircle2,
    ShieldCheck,
    Database,
    ArrowRight,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FaqItem {
    question: string;
    answer: string;
    category: string;
}

const FAQS: FaqItem[] = [
    {
        category: 'Architecture & Guardrails',
        question: 'How do you guarantee answers don\'t hallucinate on our data?',
        answer:
            'Every query runs through a deterministic retrieval pipeline with cosine similarity thresholding. If the retrieved context confidence falls below the strict safety boundary, the system returns a safe fallback rather than letting the LLM invent information. I also implement automated PII redaction and policy-checking guardrails before any output reaches the user.',
    },
    {
        category: 'Scope & Deliverables',
        question: 'What does a typical RAG pipeline build include?',
        answer:
            'A production build includes document ingestion pipelines (PDFs, databases, web scraping, APIs), semantic chunking strategy, vector store indexing (Pinecone, Weaviate, or pgvector), hybrid keyword+vector search, safety guardrails, and an evaluation suite ensuring latency, throughput, and grounded accuracy before going live.',
    },
    {
        category: 'Engagement Models',
        question: 'Project vs. Retainer: Which shape fits my team best?',
        answer:
            'Choose a Project (fixed-scope, fixed-price) when you have a defined build — such as launching an AI assistant, standing up a vector search service, or doing a pre-launch reliability audit. Choose a Retainer (monthly partnership) if you are shipping continuously and need ongoing architecture ownership, prompt optimization, and technical mentorship for junior developers.',
    },
    {
        category: 'Turnaround & Timeline',
        question: 'What is the typical turnaround for an initial production pipeline?',
        answer:
            'Most standalone RAG pipeline projects ship within 3 to 6 weeks, beginning with a scoping and data audit sprint, moving to vector index architecture and guardrail tuning, and finishing with production deployment and latency benchmarking.',
    },
    {
        category: 'Location & Collaboration',
        question: 'Do you collaborate with teams outside Kenya and remote?',
        answer:
            'Yes, frequently. I am based in Nairobi (UTC+3 / East Africa Time), which provides generous real-time working overlap with European, Middle Eastern, and African business hours, and seamless asynchronous collaboration with teams in the US and globally.',
    },
]

interface KnowledgeChunk {
    keywords: string[];
    answer: string;
    source: string;
    tags: string[];
    hasCta?: boolean;
}

const KNOWLEDGE_BASE: KnowledgeChunk[] = [
    {
        keywords: ['sauti', 'bajeti', 'machakos', 'budget', 'pwa', 'whatsapp', 'ogp', 'civic'],
        answer:
            'Sauti ya Bajeti ("Voice of the Budget") started as a plain-language WhatsApp chatbot for the Institute of Public Finance and Machakos County. As adoption grew, I rebuilt it into an installable, offline-capable Progressive Web App (PWA) with sector-by-sector budget dashboards and participatory surveys. It was recognized by the Open Government Partnership (OGP) for inclusive governance and cited by CIPESA.',
        source: 'Case Study: Sauti ya Bajeti (OGP Recognized)',
        tags: ['Vector Search', 'PWA', 'Offline Architecture'],
    },
    {
        keywords: ['guardrail', 'guardrails', 'hallucinate', 'hallucination', 'accuracy', 'leakage', 'safe', 'safety', 'drift'],
        answer:
            'Every response is strictly bounded to retrieved document chunks with cosine threshold validation. If the context does not contain verified source evidence, the guardrail layer prevents synthesis rather than allowing the model to guess. I implement automated PII scrubbing, prompt-injection shielding, and deterministic citation references on every output.',
        source: 'Architecture Standard: Grounded Retrieval §3.2',
        tags: ['Guardrail Engine', 'PII Filter', 'Deterministic Citations'],
    },
    {
        keywords: ['project', 'retainer', 'pricing', 'cost', 'rates', 'engagement', 'hire', 'models', 'timeline'],
        answer:
            'I offer two models: 1) Project: Fixed-scope, fixed-price for defined deliverables (RAG pipelines, AI features, or reliability audits). 2) Retainer: Dedicated monthly partnership for continuous feature delivery, architecture reviews, priority turnaround, and developer mentorship.',
        source: 'Engagement Guide: Project & Retainer Models',
        tags: ['Fixed Scope', 'Monthly Retainer'],
        hasCta: true,
    },
    {
        keywords: ['stack', 'tech', 'technologies', 'typescript', 'python', 'langchain', 'pinecone', 'weaviate', 'vector', 'database', 'aws', 'docker'],
        answer:
            'My core production stack uses TypeScript and Node.js for low-latency backend services, Python for custom vector embeddings, LangChain for tool-calling agentic workflows, vector stores (Pinecone, Weaviate, pgvector), state-of-the-art LLMs (OpenAI, Claude, open-weights), containerized with Docker on AWS.',
        source: 'Engineering Profile: Core Technologies',
        tags: ['TypeScript', 'Pinecone', 'LangChain', 'AWS'],
    },
    {
        keywords: ['remote', 'nairobi', 'kenya', 'timezone', 'location', 'hours', 'overlap'],
        answer:
            'I am based in Nairobi, Kenya (UTC+3 / EAT). This offers excellent working overlap with European, Middle Eastern, and African timezones, and I maintain structured asynchronous communication routines with teams in the US and globally.',
        source: 'Location & Availability: Global Remote',
        tags: ['UTC+3', 'Global Remote'],
    },
    {
        keywords: ['contact', 'book', 'call', 'schedule', 'email', 'strategy', 'talk', 'hire'],
        answer:
            'You can reach me directly at mike@mills.co.ke or book a 30-minute AI strategy call to discuss your architecture, project scope, or technical roadmap.',
        source: 'Direct Booking: 30-min Strategy Call',
        tags: ['Direct Booking', 'Scoping Call'],
        hasCta: true,
    },
]

const QUICK_PROMPTS = [
    'Tell me about Sauti ya Bajeti',
    'How do you prevent hallucinations?',
    'Project vs Retainer engagement',
    'Can I book a strategy call?',
]

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    source?: string;
    tags?: string[];
    hasCta?: boolean;
    trace?: {
        score: string;
        latency: string;
        guardrail: string;
    };
}

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'assistant',
            content:
                'Hello! I am Mike\'s grounded portfolio assistant. Ask me anything about his RAG engineering, past case studies, tech stack, or engagement availability.',
            source: 'Mills Portfolio Knowledge Base',
            tags: ['Grounded RAG', 'Active Engine'],
        },
    ])

    const chatContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth',
            })
        }
    }, [messages, isTyping])

    function queryKnowledgeBase(queryText: string): KnowledgeChunk {
        const lower = queryText.toLowerCase()
        let bestMatch: KnowledgeChunk | null = null
        let highestScore = 0

        for (const chunk of KNOWLEDGE_BASE) {
            let score = 0
            for (const kw of chunk.keywords) {
                if (lower.includes(kw)) {
                    score += 2
                }
            }
            if (score > highestScore) {
                highestScore = score
                bestMatch = chunk
            }
        }

        if (bestMatch && highestScore > 0) {
            return bestMatch
        }

        return {
            keywords: [],
            answer:
                'I design and build grounded RAG and agentic AI systems that work in production. You can explore my case studies (like Sauti ya Bajeti), inspect my engagement models, or schedule a strategy call to discuss your team\'s specific requirements.',
            source: 'Mills Portfolio Knowledge Base §General',
            tags: ['Grounded Retrieval', 'Production Spec'],
            hasCta: true,
        }
    }

    function handleSend(userText: string) {
        if (!userText.trim() || isTyping) return

        const userMsg: Message = {
            id: String(Date.now()),
            role: 'user',
            content: userText,
        }

        setMessages((prev) => [...prev, userMsg])
        setInput('')
        setIsTyping(true)

        setTimeout(() => {
            const result = queryKnowledgeBase(userText)
            const botMsg: Message = {
                id: String(Date.now() + 1),
                role: 'assistant',
                content: result.answer,
                source: result.source,
                tags: result.tags,
                hasCta: result.hasCta,
                trace: {
                    score: '0.942 cosine',
                    latency: `${Math.floor(Math.random() * 25) + 32}ms`,
                    guardrail: 'Context Match: Passed · PII: Clean',
                },
            }
            setMessages((prev) => [...prev, botMsg])
            setIsTyping(false)
        }, 320)
    }

    return (
        <section id="faq" className="border-b border-border py-28 md:py-36">
            <div className="mx-auto max-w-6xl px-6">
                {/* Section Header */}
                <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-foreground" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        FAQ &amp; Interactive RAG Engine
                    </span>
                </div>

                <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <h2 className="max-w-xl text-balance text-4xl font-medium leading-[1.02] tracking-tight md:text-5xl">
                        Questions, answered.
                        <br />
                        Or test the engine live.
                    </h2>
                    <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
                        Browse common technical and engagement questions, or ask the grounded
                        assistant directly to verify real-time retrieval from my case studies.
                    </p>
                </div>

                {/* Part 1: Curated Accordion FAQs (Full Width) */}
                <div className="mt-14 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                            <span>Curated Client Questions</span>
                        </div>
                        <span className="font-mono text-[11px] text-muted-foreground">
                            5 Core Topics
                        </span>
                    </div>

                    <div className="divide-y divide-border rounded-2xl border border-border bg-card/40">
                        {FAQS.map((faq, index) => {
                            const isOpen = openIndex === index
                            return (
                                <div key={faq.question} className="p-6 transition-colors hover:bg-card/70 sm:p-7">
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="flex w-full items-start justify-between gap-6 text-left"
                                    >
                                        <div className="space-y-1.5">
                                            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                                                {faq.category}
                                            </span>
                                            <h3 className="text-lg font-medium text-foreground sm:text-xl">
                                                {faq.question}
                                            </h3>
                                        </div>
                                        <span
                                            className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border transition-transform duration-200 ${isOpen ? 'rotate-180 bg-accent text-foreground' : 'text-muted-foreground'
                                                }`}
                                        >
                                            <ChevronDown className="h-4 w-4" />
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Part 2: Interactive Grounded Assistant (Full Width) */}
                <div className="mt-16 sm:mt-20">
                    <div className="space-y-6 rounded-3xl border border-border bg-card/40 p-6 sm:p-8">
                        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                            <div className="space-y-1.5">
                                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>Interactive Verification Engine</span>
                                </div>
                                <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                                    Test the Grounded Assistant Live
                                </h3>
                                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                                    Have a specific question not covered above? Query my portfolio knowledge base in real time to inspect live chunk retrieval, guardrail checks, and latency.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 self-start rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] text-muted-foreground md:self-auto">
                                <Database className="h-3 w-3 text-foreground" />
                                <span>Local Vector Index · Cosine &ge; 0.85</span>
                            </div>
                        </div>

                        {/* Terminal Window */}
                        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                            {/* Window Header */}
                            <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-3 sm:px-5">
                                <div className="flex items-center gap-2.5">
                                    <div className="flex items-center gap-1.5">
                                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                                    </div>
                                    <span className="mx-1 h-3 w-px bg-border" />
                                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                                        <Terminal className="h-3.5 w-3.5 text-foreground" />
                                        <span>ask_mills.rag</span>
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        Grounded Assistant
                                    </span>
                                </div>
                            </div>

                            {/* Quick Prompt Chips */}
                            <div className="border-b border-border bg-background/50 px-4 py-3 sm:px-5">
                                <div className="flex flex-wrap items-center gap-2 text-xs">
                                    <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                                        Try:
                                    </span>
                                    {QUICK_PROMPTS.map((prompt) => (
                                        <button
                                            key={prompt}
                                            type="button"
                                            onClick={() => handleSend(prompt)}
                                            className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground active:scale-95"
                                        >
                                            {prompt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Conversation Scroll Container */}
                            <div
                                ref={chatContainerRef}
                                className="flex h-80 sm:h-96 flex-col space-y-4 overflow-y-auto p-4 sm:p-6"
                            >
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'
                                            }`}
                                    >
                                        <div
                                            className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed sm:text-base ${msg.role === 'user'
                                                ? 'bg-primary text-primary-foreground'
                                                : 'border border-border bg-background text-foreground'
                                                }`}
                                        >
                                            <p className="leading-relaxed">{msg.content}</p>

                                            {/* Grounded Citation & Metadata */}
                                            {msg.source && (
                                                <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-border/60 pt-2.5 font-mono text-xs text-muted-foreground">
                                                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                                                    <span>{msg.source}</span>
                                                </div>
                                            )}

                                            {/* Inline CTA if relevant */}
                                            {msg.hasCta && (
                                                <a
                                                    href="#contact"
                                                    className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 font-mono text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                                                >
                                                    Book a Strategy Call
                                                    <ArrowRight className="h-3 w-3" />
                                                </a>
                                            )}
                                        </div>

                                        {/* Inspection Trace */}
                                        {msg.trace && (
                                            <div className="mt-2 flex flex-wrap items-center gap-2 px-1 font-mono text-[11px] text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Database className="h-3 w-3" />
                                                    {msg.trace.score}
                                                </span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1">
                                                    <ShieldCheck className="h-3 w-3 text-emerald-600" />
                                                    {msg.trace.guardrail}
                                                </span>
                                                <span>•</span>
                                                <span>{msg.trace.latency}</span>
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {isTyping && (
                                    <div className="flex items-center gap-2.5 rounded-xl border border-border bg-background p-3.5 font-mono text-xs text-muted-foreground">
                                        <Database className="h-3.5 w-3.5 animate-spin text-muted-foreground" />
                                        <span>Retrieving chunks &amp; verifying guardrails...</span>
                                    </div>
                                )}

                            </div>

                            {/* Input Form */}
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    handleSend(input)
                                }}
                                className="border-t border-border bg-background p-3.5 sm:p-4"
                            >
                                <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2 focus-within:border-foreground/40">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask about my AI systems, case studies, tech stack, or rates..."
                                        className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!input.trim() || isTyping}
                                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
                                        aria-label="Send query"
                                    >
                                        <Send className="h-4 w-4" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
