import React from 'react';
import classNames from 'classnames';
import {useSteppedDelay} from './useSteppedDelay';
import styles from './DelayedButton.module.scss';

type HTMLButtonElementProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type DelayedButtonProps = {
    label: string;
    delay?: number;
    color?: string;
} & HTMLButtonElementProps;

const MAX_STEPS = 5;
const DEFAULT_DELAY = 1333;

function getBorderStepCssClass(step: number) {
    return styles['border' + step * 25];
}

export function DelayedButton(props: DelayedButtonProps) {
    const {label, delay, disabled, className, ...buttonProps} = props;
    const step = useSteppedDelay(MAX_STEPS, delay || DEFAULT_DELAY);
    const shouldBeDisabled = disabled || step !== MAX_STEPS;

    return (
        <button className={classNames(styles.delayedButton, getBorderStepCssClass(step), className)}
                disabled={shouldBeDisabled} {...buttonProps}>{label}</button>
    );
}
