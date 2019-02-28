import {ChangeEvent, useState} from 'react';

export function useInputState(defaultValue: string): [string, (event: ChangeEvent<HTMLInputElement>) => void] {
    const [value, setValue] = useState(defaultValue);

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        const value: string = event.target.value;
        setValue(value);
    }

    return [value, onChange];
}
