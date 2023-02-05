import React, { FormEvent, FormEventHandler, useCallback } from "react";
import { SearchFormProps } from "./SearchForm.models";
import classes from "./SearchForm.module.scss";

export const SearchForm = ({ onSubmit }: SearchFormProps) => {

    const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const username = formData.get("username");
        onSubmit(username);
    }, [onSubmit])

    return <form autoComplete="false" onSubmit={handleSubmit}>
    <input type="text" name="username" autoComplete="false" className={classes.searchInput} />
</form>
}