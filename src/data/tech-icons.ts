import type { IconType } from 'react-icons';
import {
    SiNodedotjs,
    SiTypescript,
    SiLangchain,
    SiDocker,
    SiMongodb,
    SiPostgresql,
    SiReact,
} from 'react-icons/si';
import { TbBrandAws, TbBrandOpenai, TbDatabase } from 'react-icons/tb';

export const TECH_ICONS: Record<string, IconType> = {
    'Node.js': SiNodedotjs,
    TypeScript: SiTypescript,
    LangChain: SiLangchain,
    Pinecone: TbDatabase,
    'OpenAI / GPT-4': TbBrandOpenai,
    AWS: TbBrandAws,
    Docker: SiDocker,
    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    React: SiReact,
};
