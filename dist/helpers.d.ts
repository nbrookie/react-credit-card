import { CardInfo } from './cardValidation';
declare function getCardInfo(number: string, type?: string): CardInfo;
declare function formatNumber(number: string, cardInfo: CardInfo): string;
declare function formatExpiration(expiration?: string): string;
declare function formatCvc(cvc: string | undefined, cvcLength: number): string;
export { formatCvc, formatExpiration, formatNumber, getCardInfo };
