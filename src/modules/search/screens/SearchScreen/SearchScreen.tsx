import React, { useCallback, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import classes from "./SearchScreen.module.scss";

export default () => {
    const navigate = useNavigate();
    const [params] = useSearchParams();

    useEffect(() => {
        const username = params.get("username");
        if(username) {
            fetch(`${process.env.REACT_APP_BASE_URL}/users/${username}/gists`).then(response => response.json()).then(response => {
                console.log({response})
            })
        }
    }, [params])

    const handleSearch = useCallback((value: FormDataEntryValue | null) => {
        if(value) {
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
                <SearchForm onSubmit={handleSearch} />
            </div>
        </div>
        
    </div>
}