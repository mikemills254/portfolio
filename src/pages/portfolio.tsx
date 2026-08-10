import { useState } from 'react'
import { Seo } from '../components/seo'
import Footer from '../components/ui/footer'
import Navbar from '../components/ui/navbar'
import { ArrowRight, Search, X } from 'lucide-react'
import { Link } from 'react-router-dom'

type Project = {
    title: string
    category: string
    description: string
    stack: string[]
    slug?: string // Optional link to case study
}

const ALL_PROJECTS: Project[] = [
    {
        title: 'Sauti ya Bajeti, from a WhatsApp pilot to a budget PWA',
        category: 'Public Finance · AI / PWA',
        description:
            'Built the AI engine and, as adoption grew, the installable web app behind Sauti ya Bajeti ("Voice of the Budget") for the Institute of Public Finance. It launched as a WhatsApp chatbot answering plain-language budget questions, then evolved into a full progressive web app — installable to the home screen, usable offline, with proper budget dashboards layered on top of the original conversational AI and participatory-budgeting polls. Recognized by the Open Government Partnership as part of Machakos County\'s AI-powered, inclusive-governance budget platform.',
        stack: ['Node.js', 'TypeScript', 'React', 'LangChain', 'OpenAI / GPT-4', 'PWA'],
        slug: 'sauti-ya-bajeti',
    },
    {
        title: 'Civic RAG assistant, built once, shipped three times',
        category: 'Civic Tech · RAG',
        description:
            'Designed and built the reusable RAG pipeline — document ingestion, chunking, embedding, vector retrieval, guarded LLM response — behind Sauti ya Bajeti and two other WhatsApp assistants answering plain-language public finance and constitutional-law questions from a structured knowledge base, no app download required. Standardized the pipeline into a shared internal library, cutting build time for each new civic product by roughly 50%.',
        stack: [
            'Node.js',
            'TypeScript',
            'LangChain',
            'Pinecone',
            'OpenAI / GPT-4',
            'AWS',
        ],
        slug: 'civic-rag-assistant',
    },
    {
        title: 'Business management platform for service businesses',
        category: 'SaaS · Backend',
        description:
            'Built and maintained the backend for a POS and business-management platform — booking, staff profiles, inventory, and transaction processing — with role-based access control and integrated accounting sync for automated financial tracking.',
        stack: ['Node.js', 'TypeScript', 'MongoDB', 'Docker'],
    },
    {
        title: 'Hospital pharmacy inventory system',
        category: 'Healthcare · Backend',
        description:
            'Built a web portal for hospital medicine inventory, prescription dispensing, and procurement — real-time stock monitoring and expiry-date tracking to support regulatory compliance.',
        stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'React'],
    },
]

// Extract all unique tags/technologies from projects
const ALL_TAGS = ['All', ...Array.from(new Set(ALL_PROJECTS.flatMap((p) => p.stack)))]

export default function Portfolio() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedTag, setSelectedTag] = useState('All')

    // Filter projects based on search query and selected tag
    const filteredProjects = ALL_PROJECTS.filter((project) => {
        const matchesSearch =
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.category.toLowerCase().includes(searchQuery.toLowerCase())
        
        const matchesTag = selectedTag === 'All' || project.stack.includes(selectedTag)
        
        return matchesSearch && matchesTag
    })

    return (
        <>
            <Seo
                title="Portfolio | Mills — AI & RAG Engineer"
                description="Selected AI, RAG, and backend engineering projects shipped by Mills. Based in Nairobi, Kenya."
                canonical="https://mills.co.ke/portfolio"
            />
            <main className="min-h-dvh w-full flex flex-col relative bg-background" data-testid="page-portfolio">
                <Navbar />

                <div className="grow pt-36 md:pt-44 pb-20">
                    <div className="mx-auto max-w-6xl px-6">
                        {/* Header */}
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-foreground" />
                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                Selected Projects
                            </span>
                        </div>
                        <h1 className="mt-6 max-w-3xl text-balance text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl">
                            Shaped for purpose,
                            <br />
                            built to last.
                        </h1>

                        {/* Search and Filters Section */}
                        <div className="mt-16 flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
                            {/* Tags list */}
                            <div className="flex flex-wrap gap-2 order-2 lg:order-1">
                                {ALL_TAGS.map((tag) => (
                                    <button
                                        key={tag}
                                        onClick={() => setSelectedTag(tag)}
                                        className={`rounded-full px-4 py-2 font-mono text-xs transition-all cursor-pointer ${
                                            selectedTag === tag
                                                ? 'bg-primary text-primary-foreground'
                                                : 'border border-border bg-card text-muted-foreground hover:border-foreground/50 hover:text-foreground'
                                        }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>

                            {/* Search bar */}
                            <div className="relative w-full max-w-md order-1 lg:order-2">
                                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full rounded-full border border-border bg-card py-2.5 pl-11 pr-10 text-sm placeholder-muted-foreground outline-none transition-all focus:border-foreground/50"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className="mt-12 grid gap-y-12">
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project, i) => (
                                    <article
                                        key={project.title}
                                        className="grid gap-6 border-b border-border pb-12 last:border-0 md:grid-cols-[auto_1fr] md:gap-16"
                                    >
                                        <span className="font-mono text-sm text-muted-foreground">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:gap-16">
                                            <div>
                                                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                                                    {project.category}
                                                </p>
                                                <h3 className="mt-4 text-balance text-2xl font-medium leading-snug tracking-tight">
                                                    {project.title}
                                                </h3>
                                                
                                                {project.slug && (
                                                    <Link
                                                        to={`/work/${project.slug}`}
                                                        className="inline-flex items-center gap-1.5 text-sm font-medium mt-6 text-foreground group transition-opacity hover:opacity-80"
                                                    >
                                                        Read case study
                                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                                    </Link>
                                                )}
                                            </div>
                                            <div className="flex flex-col gap-6 justify-between">
                                                <p className="text-pretty leading-relaxed text-muted-foreground">
                                                    {project.description}
                                                </p>
                                                <ul className="flex flex-wrap gap-2">
                                                    {project.stack.map((item) => (
                                                        <li
                                                            key={item}
                                                            className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground"
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            ) : (
                                <div className="text-center py-20">
                                    <p className="text-lg text-muted-foreground">No projects match your criteria.</p>
                                    <button
                                        onClick={() => {
                                            setSearchQuery('')
                                            setSelectedTag('All')
                                        }}
                                        className="mt-4 text-sm font-medium text-foreground underline hover:opacity-80"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </>
    )
}
