import { Helmet } from 'react-helmet-async';
import type { ReactNode } from 'react';

const SITE_NAME = 'Mills';
const DEFAULT_IMAGE = 'https://mills.co.ke/og-image.png';

interface SeoProps {
    title: string;
    description: string;
    canonical?: string;
    image?: string;
    type?: 'website' | 'article' | 'profile';
    noindex?: boolean;
    children?: ReactNode;
}

export function Seo({ title, description, canonical, image = DEFAULT_IMAGE, type = 'website', noindex, children }: SeoProps) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}
            {noindex && <meta name="robots" content="noindex" />}

            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {canonical && <meta property="og:url" content={canonical} />}
            <meta property="og:image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {children}
        </Helmet>
    );
}
