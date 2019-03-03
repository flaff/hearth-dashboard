import React from 'react';
import classNames from 'classnames';

import {Validator} from '../../hooks/useValidators';
import styles from './ValidationMessage.module.css';

type ValidationProps<T> = {
    validator?: Validator<T>;
}

export function ValidationMessage<T>(props: ValidationProps<T>) {
    if (props.validator) {
        const message = typeof props.validator.message === 'string' ? props.validator.message : props.validator.message(),
            type = props.validator.type || 'error';

        return (
            <div className={classNames(styles.message, type)}>{message}</div>
        );
    }

    return null;
}
