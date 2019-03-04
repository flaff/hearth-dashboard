import * as React from "react";
import {useContext, createContext, Context} from 'react';

type TranslateProps = {
    i18nKey: string;
};

type TranslationContext = {
    translations: {[key: string]: string}
};

const GlobalTranslationContext = createContext<TranslationContext>({
    translations: {
        'notEmpty': 'Required',
        'onlyNumbers': 'Only numbers are allowed'
    }
});

export function Translate(props: TranslateProps) {
    const context = useContext(GlobalTranslationContext);

    return (
        <>{context.translations[props.i18nKey] || props.i18nKey}</>
    );
}
