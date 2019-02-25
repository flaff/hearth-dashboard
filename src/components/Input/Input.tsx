import React from 'react';
import {Validation, Validator} from '../Validation';

type HTMLInputElementProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputProps = HTMLInputElementProps & {
    validators?: Array<Validator<string>>,
    value: string,
    inputClassName?: string
};

export function Input(props: InputProps) {
    const {validators, className, inputClassName, ...htmlProps} = props;

    return (
        <div className={className}>
            <input {...htmlProps} className={inputClassName} />
            {validators && <Validation value={props.value} validators={validators} />}
        </div>
    );
}
