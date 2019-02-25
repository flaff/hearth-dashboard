import * as React from "react";

type TranslateProps = {
    i18nKey: string;
};

export function Translate(props: TranslateProps) {
    return (
        <>{props.i18nKey}</>
    );
}
