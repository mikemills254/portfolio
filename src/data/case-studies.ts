export interface CaseStudyStep {
    title: string;
    description: string;
}

export interface CaseStudy {
    slug: string;
    category: string;
    title: string;
    summary: string;
    role: string;
    problem: string;
    approach: CaseStudyStep[];
    outcome: string;
    stack: string[];
    /** Architecture flow: each entry is a stage; a stage can have multiple parallel nodes. */
    diagram: string[][];
    /** Slug of a related case study to link to, e.g. the underlying platform or a sibling product. */
    relatedSlug?: string;
}

export const caseStudies: CaseStudy[] = [
    {
        slug: 'sauti-ya-bajeti',
        category: 'Public Finance · AI/PWA',
        title: 'Sauti ya Bajeti, from a WhatsApp pilot to a budget PWA',
        summary:
            'Built the AI engine and, as adoption grew, the installable web app behind Sauti ya Bajeti ("Voice of the Budget") for the Institute of Public Finance. It launched as a WhatsApp chatbot answering plain-language budget questions, then evolved into a full progressive web app — installable to the home screen, usable offline, with proper budget dashboards layered on top of the original conversational AI and participatory-budgeting polls. Recognized by the Open Government Partnership as part of Machakos County\'s AI-powered, inclusive-governance budget platform.',
        role: 'AI & Full-Stack Engineer — built the original conversational query engine, then led the product\'s evolution into an installable PWA with a React frontend, offline support, and budget dashboards.',
        problem:
            'County and national budgets in Kenya are public by law, but "public" mostly meant dense PDFs and physical hearings — hundreds of pages of line-item allocations that few citizens have the time, access, or technical background to parse. Public participation forums require travel and time off work, which quietly locks out the people budgets affect most. A WhatsApp-only chatbot lowered that barrier for quick questions, but couldn\'t hold a persistent, richer experience — saved history, dashboards, offline access — so as adoption grew, the product needed to grow beyond a chat window without losing the zero-install, plain-language experience that made it work in the first place.',
        approach: [
            {
                title: 'Budget data as a knowledge base',
                description:
                    'Structured county and national budget documents — allocations, sector breakdowns, audit reports — into a queryable knowledge base, so every answer stays grounded in the actual gazetted figures instead of a model\'s guess.',
            },
            {
                title: 'WhatsApp pilot: a conversational query engine',
                description:
                    'Shipped the first version as a WhatsApp chatbot so a citizen could ask "how much did Machakos budget for health this year?" in plain language and get an instant, sector-specific answer — no app download, no onboarding.',
            },
            {
                title: 'Evolving into an installable PWA',
                description:
                    'As usage outgrew what a chat window could hold, rebuilt the experience as a progressive web app — installable to the home screen and usable offline — so citizens get a persistent, app-like experience without an app store.',
            },
            {
                title: 'Participatory budgeting, now with visuals',
                description:
                    'Carried the polls and surveys from the WhatsApp pilot into the PWA and paired them with proper budget dashboards and sector-by-sector charts that a chat interface alone couldn\'t show.',
            },
            {
                title: 'Civic education prompts',
                description:
                    'Layered in guided content that teaches the core principles of public finance — transparency, accountability, participation, efficiency, effectiveness, equity — so the app builds lasting budget literacy, not just one-off answers.',
            },
        ],
        outcome:
            'Sauti ya Bajeti grew from a WhatsApp pilot into an installable PWA that gives citizens a persistent, offline-capable way to track budgets and weigh in on spending priorities — still with no app store and no heavy install. It was featured by the Open Government Partnership as part of Machakos County\'s AI-powered, inclusive-governance budget platform, and cited by CIPESA as an example of AI expanding citizens\' access to budget information in Kenya. The underlying query pipeline was later generalized into a reusable internal library, detailed in the case study below.',
        stack: ['Node.js', 'TypeScript', 'React', 'LangChain', 'OpenAI / GPT-4', 'PWA'],
        diagram: [
            ['Gazetted Budget Documents'],
            ['Structured Knowledge Base'],
            ['Guarded Query Engine'],
            ['Installable PWA'],
            ['Budget Dashboards', 'Participatory Polls'],
        ],
        relatedSlug: 'civic-rag-assistant',
    },
    {
        slug: 'civic-rag-assistant',
        category: 'Civic Tech · RAG',
        title: 'Civic RAG assistant, built once, shipped three times',
        summary:
            'Designed and built the reusable RAG pipeline — document ingestion, chunking, embedding, vector retrieval, guarded LLM response — behind Sauti ya Bajeti and two other WhatsApp assistants answering plain-language public finance and constitutional-law questions from a structured knowledge base, no app download required. Standardized the pipeline into a shared internal library, cutting build time for each new civic product by roughly 50%.',
        role: 'AI & RAG Engineer — designed and built the pipeline, established production guardrails, and standardized it into a reusable internal library.',
        problem:
            'Citizens and officials needed a way to ask plain-language questions about public finance and constitutional law and get answers grounded in dense official documents — budget frameworks, audit guidelines, legal text — without reading them directly or installing a dedicated app.',
        approach: [
            {
                title: 'Ingestion & chunking',
                description:
                    'Structured source documents — budget reports, audit guidelines, constitutional text — into retrieval-ready chunks that preserve section context.',
            },
            {
                title: 'Embedding & vector search',
                description:
                    'Generated embeddings and indexed them in Pinecone for fast, accurate semantic retrieval over large document sets.',
            },
            {
                title: 'Guarded generation',
                description:
                    'Grounded GPT-4 responses strictly in retrieved context, with production guardrails to reduce hallucination on sensitive civic and legal topics.',
            },
            {
                title: 'Delivery over WhatsApp',
                description:
                    'Integrated the assistant into WhatsApp — the channel people already use — so there was no app to download and no onboarding friction.',
            },
            {
                title: 'Extracted into a reusable library',
                description:
                    'Standardized the ingestion, chunking, embedding, and retrieval components into an internal library so new civic products could reuse the pipeline instead of rebuilding it.',
            },
        ],
        outcome:
            'Reduced build time for each subsequent civic RAG product by roughly 50%, and proved the same architecture generalizes across domains — public finance and constitutional law — without re-engineering the core pipeline.',
        stack: ['Node.js', 'TypeScript', 'LangChain', 'Pinecone', 'OpenAI / GPT-4', 'AWS', 'Docker'],
        diagram: [
            ['Source Documents'],
            ['Ingestion & Chunking'],
            ['Embeddings'],
            ['Vector Search'],
            ['Guarded LLM'],
            ['WhatsApp Delivery'],
        ],
    },
    {
        slug: 'business-management-platform',
        category: 'SaaS · Backend',
        title: 'Business management platform for service businesses',
        summary:
            'Built and maintained the backend for a POS and business-management platform — booking, staff profiles, inventory, and transaction processing — with role-based access control and integrated accounting sync for automated financial tracking.',
        role: 'Backend developer — owned the API layer, database design, and RBAC implementation.',
        problem:
            'Salons and barbershops needed a single platform to manage bookings, staff, inventory, and payments — most were juggling paper systems or disconnected tools, with no reliable way to track revenue or stock.',
        approach: [
            {
                title: 'Data modeling',
                description:
                    'Designed the relational data model covering bookings, staff profiles, inventory, and transactions.',
            },
            {
                title: 'API layer',
                description:
                    'Built RESTful APIs powering the booking flow, staff management, and inventory tracking.',
            },
            {
                title: 'Access control',
                description:
                    'Implemented role-based access control so owners could safely delegate to staff without exposing sensitive data.',
            },
            {
                title: 'Accounting integration',
                description:
                    'Integrated Zoho Books so transactions synced automatically into financial reporting, removing manual reconciliation.',
            },
            {
                title: 'Deployment',
                description:
                    'Deployed and operated the service with Docker and Coolify for stable uptime.',
            },
        ],
        outcome:
            'Gave business owners a single system for day-to-day operations and automated financial reporting that previously required manual reconciliation.',
        stack: ['Node.js', 'TypeScript', 'MongoDB', 'Docker'],
        diagram: [
            ['Booking Interface'],
            ['API Layer'],
            ['Database', 'Accounting Sync'],
        ],
    },
    {
        slug: 'pharmacy-inventory-system',
        category: 'Healthcare · Backend',
        title: 'Hospital pharmacy inventory system',
        summary:
            'Built a web portal for hospital medicine inventory, prescription dispensing, and procurement — real-time stock monitoring and expiry-date tracking to support regulatory compliance.',
        role: 'Full-stack developer — built both the backend data layer and the React frontend.',
        problem:
            'Hospital pharmacies needed accurate, real-time visibility into medicine stock and expiry dates to avoid dispensing errors and meet regulatory compliance requirements — manual tracking made this slow and error-prone.',
        approach: [
            {
                title: 'Portal design',
                description:
                    'Designed the interface in Figma to fit into existing hospital staff workflows without retraining friction.',
            },
            {
                title: 'Inventory & dispensing workflows',
                description:
                    'Built the web portal covering inventory tracking, prescription dispensing workflows, and procurement.',
            },
            {
                title: 'Real-time monitoring',
                description:
                    'Implemented real-time stock monitoring and expiry-date tracking with alerts to reduce waste and dispensing risk.',
            },
            {
                title: 'Performance',
                description:
                    'Optimized database queries and schema to keep the portal responsive as inventory volume grew.',
            },
        ],
        outcome:
            'Gave pharmacy staff real-time inventory and expiry visibility, supporting regulatory compliance and reducing manual tracking errors.',
        stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'React'],
        diagram: [
            ['Pharmacy Portal'],
            ['API Layer'],
            ['Database', 'Stock Alerts'],
        ],
    },
];

export function getCaseStudy(slug: string) {
    return caseStudies.find((c) => c.slug === slug);
}
