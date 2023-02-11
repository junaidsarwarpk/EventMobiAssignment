import { GistFork } from "../modules/search/components/Gist/gist.models"

export const GistForkAdapter = (input: GenericObject): GistFork => {
    return {
        ownerAvatarUrl: input.owner.avatar_url,
        ownerProfileUrl: input.owner.html_url,
        ownerUsername: input.owner.login,
        url: input.url
    }
}