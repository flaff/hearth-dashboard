import React from 'react';
import {ValidationMessage} from '../Validation';
import {useValidators, Validator} from '../../hooks/useValidators';
import classNames from 'classnames';
import styles from './Input.module.css';

type HTMLInputElementProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Props = {
    className?: string;
    validators?: Array<Validator<string>>,
    value: string,
    label?: string
} & HTMLInputElementProps;

export function Input(props: Props) {
    const {label, value, validators, className, ...inputProps} = props;

    const thrownValidator = useValidators(validators || [], props.value);

    return (
        <div className={classNames(className, styles.input)}>
            <label htmlFor={label}>{label}</label>
            <input {...inputProps} name={label} value={value} className={classNames({'error': !!thrownValidator})} />
            <ValidationMessage validator={thrownValidator} />
        </div>
    );
}
