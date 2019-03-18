import {Button} from './components/Button';
import React from 'react';
import {AccentColor, accentToBorderColor, accentToTextColor} from './Colors';

type ColorButtonProps = {
    accent: AccentColor;
    label?: string;
}

export function ColorDemoButton(props: ColorButtonProps) {
    return (
        <Button label={props.label || props.accent} style={{
            background: props.accent,
            borderColor: accentToBorderColor(props.accent),
            color: accentToTextColor(props.accent)
        }}/>
    );
}
