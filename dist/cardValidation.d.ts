export interface CardInfo {
    brand: string;
    pattern: RegExp;
    format: RegExp;
    minLength: number;
    maxLength: number;
    cvcLength: number;
}
export declare function cardFromType(brand: string): CardInfo;
export declare function cardFromNumber(number: string): CardInfo;
export declare function getLogoSrc(brand: string): string;
