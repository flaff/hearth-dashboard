import React from 'react';
import classNames from 'classnames';
import {useSteppedDelay} from './useSteppedDelay';
import {StyledButton} from './DelayedButton.emotionStyles';

type HTMLButtonElementProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type DelayedButtonProps = {
    label: string;
    delay?: number;
    color?: string;
} & HTMLButtonElementProps;

const MAX_STEPS = 5;
const DEFAULT_DELAY = 1333;

function getBorderStepClassName(step: number) {
    return 'border' + step * 25;
}

export function DelayedButton(props: DelayedButtonProps) {
    const {label, delay, disabled, className, ...buttonProps} = props;
    const step = useSteppedDelay(MAX_STEPS, delay || DEFAULT_DELAY);
    const shouldBeDisabled = disabled || step !== MAX_STEPS;

    return (
        <StyledButton className={classNames(getBorderStepClassName(step), className)}
                disabled={shouldBeDisabled} {...buttonProps}>{label}</StyledButton>
    );
}
