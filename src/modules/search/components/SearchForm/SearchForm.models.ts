export interface SearchFormProps {
    onSubmit: (value: FormDataEntryValue | null) => void;
    username?: string | null;
}