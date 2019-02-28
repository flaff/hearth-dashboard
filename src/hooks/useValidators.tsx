import {useEffect, useState} from 'react';

export enum ValidatorType {
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info'
}

export type Validator<T> = {
    validate: (value: T) => boolean;
    message: (() => string | JSX.Element) | string;
    type?: ValidatorType
};

export function useValidators<T>(validators: Array<Validator<T>>, value: T) {
    const [thrownValidator, setThrownValidator] = useState<Validator<T> | undefined>();

    useEffect(() => {
        for (const validator of validators) {
            if (!validator.validate(value)) {
                setThrownValidator(validator);
                return;
            }
        }

        setThrownValidator(undefined);
    }, [value]);

    return thrownValidator;
}
