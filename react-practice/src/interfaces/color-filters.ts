export interface IColorFilter {
    white: boolean;
    blue: boolean;
    black: boolean;
    red: boolean;
    green: boolean;
    colorless: boolean;
}

export function getSelectedColorCodes(filter: IColorFilter): string[] {
    const colorMap: {[key in keyof IColorFilter]: string} = {
        white: 'W',
        blue: 'U',
        black: 'B',
        red: 'R',
        green: 'G',
        colorless: 'C'
    }

    return Object.keys(filter)
        .filter(key => filter[key as keyof IColorFilter])
        .map(key => colorMap[key as keyof IColorFilter]);
}