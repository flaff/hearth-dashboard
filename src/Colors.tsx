export enum TextColor {
    WHITE = '#fff',
    GRAY = '#818181',
    DARK = '#3e3e3e',
    BLACK = '#000'
}

export enum AccentColor {
    PINK = '#e62553',
    ORANGE = '#ff731e',
    YELLOW = '#ffb81e',
    MINT = '#00d999',
    BLUE = '#4d7df9',
    PURPLE = '#8e3df9',
    GRAY = '#cbcbcb',
    WHITE = '#fff',
    BLACK = '#000'
}

export function accentToBorderColor(accent: AccentColor) {
    if (accent === AccentColor.WHITE) {
        return AccentColor.GRAY;
    }
    return accent;
}

const BLACK_ACCENTS = [AccentColor.WHITE, AccentColor.YELLOW, AccentColor.MINT];

export function accentToTextColor(accent: AccentColor) {
    if (BLACK_ACCENTS.includes(accent)) {
        return TextColor.BLACK;
    }
    if (accent === AccentColor.GRAY) {
        return TextColor.GRAY;
    }
    return TextColor.WHITE;
}
