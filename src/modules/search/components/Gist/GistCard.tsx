import React, { useCallback, useState } from "react";
import { GistForkAdapter } from "../../../../Utilities/gistForkAdapter.utility";
import { httpUtilities } from "../../../../Utilities/http.utility";
import { ForkThumbnail } from "../ForkThumbnail/ForkThumbnail";
import { GistFileTag } from "../GistFileTag/GistFileTag";
import { GistFork, GistProps } from "./gist.models";
import classes from "./GistCard.module.scss";


export const GistCard = ({ gist }: GistProps) => {
    const [forks, setForks] = useState<GistFork[] | null>(null);
    const [isLoading, setLoading] = useState(false);

    const fetchForks = useCallback(() => {
        setLoading(true);
        httpUtilities.getWithBaseUrl(`${gist.forksUrl}?per_page=3`).then(response => {
            setLoading(false);
            if (response.isSuccess) {
                setForks(response.data.map((input: GenericObject) => GistForkAdapter(input)))
            } else {
                alert(response.data.message);
            }
        })
    }, [gist]);

    return <div className={`${classes.root} gist-card`}>
        <img src={gist.ownerAvatarUrl} alt="Owner avatar" className={classes.avatarImage} />
        <div className={classes.detailsSection}>
            <div className={classes.description}>
                {gist.description}
            </div>
            <div className={classes.authorLink}>
                Author: <a target="_blank" rel="noreferrer" href={gist.ownerUrl}>{gist.ownerId}</a>
            </div>
            <div className={classes.fileTagContainer}>
                <div className={classes.filesLabel}>Files:</div>
                {gist.files.map(file => <GistFileTag key={`gist-file-${file.name}`} file={file} />)}
            </div>
            {(forks === null && !isLoading) ? <div className={classes.forksLabel} onClick={fetchForks}>
                Get last 3 forks
            </div> : <div className={classes.forksContainer}>
                {forks && forks.map(fork => <ForkThumbnail key={`fork-${fork.url}`} fork={fork} />)}
            </div>}
            {forks === null && isLoading && <div className={classes.forksLabel}>loading...</div>}
            {(forks && forks.length === 0) ? 
                <div className={classes.forksLabel}> No forks found </div> : <></>}
        </div>

    </div>
}