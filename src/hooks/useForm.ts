import { useState, ChangeEvent } from 'react';

interface FormState {
    [key: string]: string;
}

export const useForm = (initialForm: FormState = {}): {
    formState: FormState;
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onResetForm: () => void;
} => {
    const [formState, setFormState] = useState<FormState>(initialForm);

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        formState,
        onInputChange,
        onResetForm
    };
};
