import * as React from 'react';
export declare type FOCUS_TYPE = 'number' | 'cvc' | 'expiration' | 'name';
interface ReactCreditCardProps {
    /**
     * Credit card number to display (will remove anything except [0-9])
     * defaults any missing numbers to •
     */
    number?: string;
    /** Name of card owner */
    name?: string;
    /**
     * expiration date on card, with remove anything except [0-9]
     * and limits to 6 numerical characters
     * e.g. MM/YY or MM/YYYY
     *
     * @default '••/••'
     * */
    expiration?: string;
    /** available for internationalization */
    expirationBefore?: string;
    /** available for internationalization */
    expirationAfter?: string;
    /**
     * CVC / CVV number, accepts [0-9]
     * @default '•••'
     */
    cvc?: string;
    /** placeholder when no name is provided, available for internationalization */
    placeholderName?: string;
    /** available to override the card type displayed */
    type?: string;
    /**
     * The display value which should be focused on,
     * generally matches the input currently focused by the user.
     *
     * @default undefined
     */
    focused?: 'number' | 'cvc' | 'expiration' | 'name';
    /** Adds additional radial texture to the card face */
    hasRadialGradient?: boolean;
    /** adds a box shadow to the credit card */
    hasShadow?: boolean;
}
export declare const ReactCreditCard: React.FC<ReactCreditCardProps>;
export default ReactCreditCard;
