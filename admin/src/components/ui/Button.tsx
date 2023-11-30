import { forwardRef, useEffect, useState, useMemo } from "react";

import { IButtonProps } from "../../interface";
import { TButtonRef } from "../../types";
import { getColor, getRounded, getSize, getVariant } from "../../utils";

const Button = forwardRef<TButtonRef, IButtonProps>(
    (
        {
            text,
            variant,
            buttonColor = "neutral",
            size = "base",
            rounded = "none",
            loading = false,
            textLoading = "loading...",
            className,
            ...props
        },
        ref
    ) => {
        const [styles, setStyles] = useState<[] | string[]>();

        const buttonClassName = useMemo<string>(() => {
            const classNameStr = styles?.join(" ") || "";

            return classNameStr;
        }, [styles]);

        useEffect(() => {
            const variantStr = getVariant(variant, "button");
            const colorStr = getColor(buttonColor, "button");
            const sizeStr = getSize(size);
            const classNameStr = className || "";
            const roundedStr = getRounded(rounded);

            setStyles([
                variantStr,
                colorStr,
                sizeStr,
                roundedStr,
                classNameStr,
            ]);
        }, [variant, size, rounded, buttonColor, className]);

        return (
            <>
                <button {...props} className={buttonClassName} ref={ref}>
                    {!loading && text !== undefined ? text : props.children}
                    {loading && <span>{textLoading}</span>}
                </button>
            </>
        );
    }
);

export default Button;
