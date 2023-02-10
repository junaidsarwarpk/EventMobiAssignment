import React, { ChangeEvent, FormEvent, FormEventHandler, useCallback, useReducer, useState } from "react";
import { SearchFormProps } from "./SearchForm.models";
import classes from "./SearchForm.module.scss";

export const SearchForm = ({ username, onSubmit }: SearchFormProps) => {

    const [formState, setFormState] = useState({username: username ?? ''});


    const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const username = formData.get("username");
        onSubmit(username);
    }, [onSubmit]);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        console.log({name: event.target.name, value: event.target.value});
        setFormState(previousValue => ({ ...previousValue, [event.target.name]: event.target.value }));
    }, [])

    return <form autoComplete="false" onSubmit={handleSubmit}>
    <input type="text" value={formState.username} onChange={handleChange} name="username" autoComplete="false" className={classes.searchInput} />
</form>
}