import { Gist, GistFile, GistFiltTypes, SUPPORTED_FILE_TYPES } from "../modules/search/components/Gist/gist.models";

export const GistAdapter = (input: GenericObject): Gist => {
    const fileKeys = Object.keys(input.files);

    const files = fileKeys.map((file): GistFile => {
        const currentFile = input.files[file];
        return {
            type: SUPPORTED_FILE_TYPES.includes(currentFile.language) ? currentFile.language: GistFiltTypes.UNKNOWN,
            name: currentFile.filename,
            url: currentFile.raw_url
        }
    })
    return {
        description: input.description,
        url: input.url,
        files: files,
        forksUrl: input.forks_url,
        ownerId: input.owner.login,
        ownerUrl: input.owner.html_url,
        ownerAvatarUrl: input.owner.avatar_url,
        
    }
}