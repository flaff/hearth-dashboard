import React from 'react';

export enum ValidatorType {
    ERROR,
    WARNING,
    INFO
}

export interface Validator<T> {
    type?: ValidatorType,
    validate: (value: T) => boolean,
    message: () => JSX.Element | string
}

type ValidationProps<T> = {
    value: T,
    validators: Array<Validator<T>>,
    className?: string
}

export function Validation<T>(props: ValidationProps<T>) {
    for (const validator of props.validators) {
        if (!validator.validate(props.value)) {
            return (
                <span className={`${props.className} ${validator.type || ValidatorType.ERROR}`}>
                    {validator.message()}
                </span>
            );
        }
    }

    return null;
}
