/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Text } from "../models";
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
export declare type TextUpdateFormInputValues = {
    description?: string;
    text?: string;
};
export declare type TextUpdateFormValidationValues = {
    description?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TextUpdateFormOverridesProps = {
    TextUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TextUpdateFormProps = React.PropsWithChildren<{
    overrides?: TextUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    text?: Text;
    onSubmit?: (fields: TextUpdateFormInputValues) => TextUpdateFormInputValues;
    onSuccess?: (fields: TextUpdateFormInputValues) => void;
    onError?: (fields: TextUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TextUpdateFormInputValues) => TextUpdateFormInputValues;
    onValidate?: TextUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TextUpdateForm(props: TextUpdateFormProps): React.ReactElement;
