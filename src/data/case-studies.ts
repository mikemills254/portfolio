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
}

export const caseStudies: CaseStudy[] = [
    {
        slug: 'civic-rag-assistant',
        category: 'Civic Tech · RAG',
        title: 'Civic RAG assistant, built once, shipped three times',
        summary:
            'Designed and built a RAG pipeline — document ingestion, chunking, embedding, vector retrieval, guarded LLM response — that powers WhatsApp assistants answering plain-language public finance and constitutional-law questions from a structured knowledge base, no app download required. Standardized the pipeline into a reusable internal library, cutting build time for each new civic product by roughly 50%.',
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
        stack: ['Node.js', 'TypeScript', 'MongoDB', 'RESTful APIs', 'RBAC', 'Docker'],
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
        stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'React', 'RESTful APIs'],
    },
];

export function getCaseStudy(slug: string) {
    return caseStudies.find((c) => c.slug === slug);
}
