import { ChangeEvent } from "react";

/**
 * * Style type
 */
export type TComponentProp = "button" | "iconbutton";

export type TSizeProp = "xs" | "sm" | "base" | "lg" | "xl";

export type TRoundedProp =
    | "none"
    | "sm"
    | "rounded"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "full";

/**
 * * Loading type
 */
export type TLoadingProps = {
    message?: string;
    color?: string;
    type?:
        | "balls"
        | "bars"
        | "bubbles"
        | "cubes"
        | "cylon"
        | "spin"
        | "spinningBubbles"
        | "spokes";
};

/**
 * * Input type
 */
export type TFloatingInputRef = HTMLInputElement;

export type TFloatingInputProps = {
    type?:
        | "button"
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "image"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "reset"
        | "search"
        | "submit"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week";
    labelFor: string;
    labelText: string;
    inputRequired?: boolean;
    inputAutoComplete?: boolean;
    onInputChange?: (e: ChangeEvent<HTMLInputElement>) => unknown;
};

/**
 * * Button type
 */
export type TButtonRef = HTMLButtonElement;

export type TButtonProps = {
    text?: string;
    loading?: boolean;
    textLoading?: string;
    buttonColor?:
        | "slate"
        | "gray"
        | "zinc"
        | "neutral"
        | "stone"
        | "red"
        | "orange"
        | "amber"
        | "yellow"
        | "lime"
        | "green"
        | "emerald"
        | "teal"
        | "cyan"
        | "sky"
        | "blue"
        | "indigo"
        | "violet"
        | "purple"
        | "fuchsia"
        | "pink"
        | "rose";
    size?: "xs" | "sm" | "base" | "lg" | "xl";
    rounded?:
        | "none"
        | "sm"
        | "rounded"
        | "md"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "full";
    variant: "contained" | "outlined";
};
