import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GistAdapter } from "../../../../Utilities/gistAdapter.utility";
import { httpUtilities } from "../../../../Utilities/http.utility";
import { Gist } from "../../components/Gist/gist.models";
import { GistCard } from "../../components/Gist/GistCard";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import classes from "./SearchScreen.module.scss";

const SearchScreen = () => {
    const [gists, setGists] = useState<Gist[]>([]);
    const navigate = useNavigate();
    const [params] = useSearchParams();

    const values = useMemo(() => ({
        username: params.get("username")
    }), [params]);

    useEffect(() => {
        if (values.username) {
            httpUtilities.get(`users/${values.username}/gists?per_page=3000`).then(response => {
                if (!response.isSuccess) {
                    alert(response.data.message)
                } else {
                    const gists = response.data.map((rawGist: { [key: string]: unknown }) => GistAdapter(rawGist));
                    setGists(gists);
                }
            })
        }
    }, [values]);

    const handleSearch = useCallback((value: FormDataEntryValue | null) => {
        if (value) {
            navigate({
                pathname: '/home',
                search: `?username=${value}`
            })
        }
    }, []);



    return <div className={classes.root}>
        <div className={classes.messageAndForm}>
            <label className={classes.welcomeMessage}>Welcome to the Github Gist search</label>
            <div>
                <SearchForm onSubmit={handleSearch} {...values} />
            </div>
            <div className={classes.gistsContainer}>
                {gists.map((gist, index) => <GistCard key={`gist-${index}`} gist={gist} />)}
            </div>
            
        </div>

    </div>
}

export default SearchScreen;