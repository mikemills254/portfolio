declare module 'react-icons' {
    import * as React from 'react';
    export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
        size?: string | number;
        color?: string;
        title?: string;
    }
    export type IconType = React.ComponentType<IconBaseProps>;
}
declare module 'react-icons/si' {
    import { IconType } from 'react-icons';
    export const SiNodedotjs: IconType;
    export const SiTypescript: IconType;
    export const SiLangchain: IconType;
    export const SiDocker: IconType;
    export const SiMongodb: IconType;
    export const SiPostgresql: IconType;
    export const SiPwa: IconType;
    export const SiReact: IconType;
}
declare module 'react-icons/tb' {
    import { IconType } from 'react-icons';
    export const TbBrandAws: IconType;
    export const TbBrandOpenai: IconType;
    export const TbDatabase: IconType;
}
