import React from 'react';
import {ValidationMessage} from '../Validation';
import {useValidators, Validator} from '../../hooks/useValidators';
import classNames from 'classnames';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {pixels} from '../../styles';

type HTMLInputElementProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type Props = {
    className?: string;
    validators?: Array<Validator<string>>,
    value: string,
    label?: string
} & HTMLInputElementProps;

const Label = styled.label({
    display: 'block',
    fontSize: pixels(16)
});

const inputWrapperStyle = css`
  display: block;
`;

const StyledInput = styled.input({
    fontSize: pixels(18),
    padding: `0.5em`,
    borderRadius: pixels(3),
    border: `${pixels(1)} solid rgba(0, 0, 0, 0.3)`
})

export function Input(props: Props) {
    const {label, value, validators, className, ...inputProps} = props;

    const thrownValidator = useValidators(validators || [], props.value);

    return (
        <div className={classNames(className, inputWrapperStyle)}>
            <Label htmlFor={label}>{label}</Label>
            <StyledInput {...inputProps} name={label} value={value} className={classNames({'error': !!thrownValidator})}/>
            <ValidationMessage validator={thrownValidator}/>
        </div>
    );
}
