import React from 'react';
import {ValidationMessage} from '../Validation';
import {useValidators, Validator} from '../../hooks/useValidators';
import classNames from 'classnames';

type HTMLInputElementProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputProps = HTMLInputElementProps & {
    validators?: Array<Validator<string>>,
    value: string,
    inputClassName?: string
};

export function Input(props: InputProps) {
    const {validators, className, inputClassName, ...htmlProps} = props;

    const thrownValidator = useValidators(validators || [], props.value);

    return (
        <div className={className}>
            <input {...htmlProps} className={classNames(inputClassName, {'error': !!thrownValidator})} />
            <ValidationMessage validator={thrownValidator} />
        </div>
    );
}
