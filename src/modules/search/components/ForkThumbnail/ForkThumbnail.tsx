import React from "react";
import { GistFork } from "../Gist/gist.models";
import classes from "./ForkThumbnail.module.scss";

export const ForkThumbnail = ({ fork }: { fork: GistFork }) => {

    return <a href={fork.ownerProfileUrl} target="_blank" rel="noreferrer" className={classes.root}>
        <div className={classes.avatarContainer}>
            <img className={classes.avatar} alt="avatar" src={fork.ownerAvatarUrl} />
        </div>
        <div>
            {fork.ownerUsername}
        </div>
    </a>

}