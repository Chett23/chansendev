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
export declare type ProjectUpdateFormInputValues = {
    name?: string;
    description?: string;
    stack?: string;
    priority?: string;
    url?: string;
};
export declare type ProjectUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    stack?: ValidationFunction<string>;
    priority?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectUpdateFormOverridesProps = {
    ProjectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    stack?: PrimitiveOverrideProps<TextFieldProps>;
    priority?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjectUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProjectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    project?: any;
    onSubmit?: (fields: ProjectUpdateFormInputValues) => ProjectUpdateFormInputValues;
    onSuccess?: (fields: ProjectUpdateFormInputValues) => void;
    onError?: (fields: ProjectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectUpdateFormInputValues) => ProjectUpdateFormInputValues;
    onValidate?: ProjectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectUpdateForm(props: ProjectUpdateFormProps): React.ReactElement;
