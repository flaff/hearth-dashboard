declare module '*.css' {
    type CssModule = {
        [className: string]: string
    };

    export = {} as CssModule;
    export default {} as CssModule;
}

declare module '*.scss' {
    type CssModule = {
        [className: string]: string
    };

    export = {} as CssModule;
    export default {} as CssModule;
}
