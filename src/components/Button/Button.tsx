import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type HTMLButtonElementProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type ButtonProps = {
    label: string;
} & HTMLButtonElementProps;

export function Button(props: ButtonProps) {
    const {label, className, ...buttonProps} = props;
    return (<button className={classNames(styles.button, className)} {...buttonProps}>{label}</button>);
}
