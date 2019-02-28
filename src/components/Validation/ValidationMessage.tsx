import React from 'react';
import {Validator} from '../../hooks/useValidators';

type ValidationProps<T> = {
    validator?: Validator<T>;
}

export function ValidationMessage<T>(props: ValidationProps<T>) {
    if (props.validator) {
        const message = typeof props.validator.message === 'string' ? props.validator.message : props.validator.message();

        return (
            <div>{message}</div>
        );
    }

    return null;
}
