export enum GistFiltTypes {
    EBNF = 'EBNF',
    TXT = 'text/plain',
    MD = 'Markdown',
    JS = 'JavaScript',
    JAVA = 'Java',
    UNKNOWN = 'unknown'
}

export const SUPPORTED_FILE_TYPES = [GistFiltTypes.EBNF, GistFiltTypes.JAVA, GistFiltTypes.JS, GistFiltTypes.MD, GistFiltTypes.TXT];

export interface GistFile {
    type: GistFiltTypes,
    name: string,
    url: string
}

export interface Gist {
    ownerId: string,
    ownerUrl: string,
    ownerAvatarUrl: string,
    forksUrl: string;
    files: GistFile[],
    description: string,
    url: string
}

export interface GistProps {
    gist: Gist
}

export interface GistFork {
    url: string,
    ownerAvatarUrl: string,
    ownerProfileUrl: string,
    ownerUsername: string
}