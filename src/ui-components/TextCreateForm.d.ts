/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TextCreateFormInputValues = {
    description?: string;
    text?: string;
};
export declare type TextCreateFormValidationValues = {
    description?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TextCreateFormOverridesProps = {
    TextCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TextCreateFormProps = React.PropsWithChildren<{
    overrides?: TextCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TextCreateFormInputValues) => TextCreateFormInputValues;
    onSuccess?: (fields: TextCreateFormInputValues) => void;
    onError?: (fields: TextCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TextCreateFormInputValues) => TextCreateFormInputValues;
    onValidate?: TextCreateFormValidationValues;
} & React.CSSProperties>;
export default function TextCreateForm(props: TextCreateFormProps): React.ReactElement;
