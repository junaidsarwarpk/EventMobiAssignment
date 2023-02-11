import React from "react";
import { GistFile, GistFiltTypes } from "../Gist/gist.models";
import classes from "./GistFileTag.module.scss";

const FILE_COLORS = {
    [GistFiltTypes.EBNF]: "#e855bf",
    [GistFiltTypes.JAVA]: "#7835d0",
    [GistFiltTypes.JS]: "#31bcc6",
    [GistFiltTypes.MD]: "#69be79",
    [GistFiltTypes.TXT]: "#ce9144",
    [GistFiltTypes.UNKNOWN]: "#306493"
}

export const GistFileTag = ({ file }: { file: GistFile }) => {

    return <a href={file.url} target="_blank" rel="noreferrer" style={{ backgroundColor: FILE_COLORS[file.type] }} className={classes.root}>
        {file.name}
    </a>
}