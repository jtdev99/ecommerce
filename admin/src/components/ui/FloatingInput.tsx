import { forwardRef } from "react";

import { TFloatingInputProps, TFloatingInputRef } from "../../types";

const FloatingInput = forwardRef<TFloatingInputRef, TFloatingInputProps>(
    (
        {
            labelFor,
            labelText,
            type = "text",
            inputRequired = false,
            inputAutoComplete = false,
            onInputChange,
        },
        inputRef
    ) => {
        return (
            <div className="relative">
                <input
                    type={type}
                    id={labelFor}
                    ref={inputRef}
                    className="block rounded-md px-3 pb-3 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-400 focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                    placeholder=" "
                    required={inputRequired}
                    autoComplete={inputAutoComplete ? "off" : "on"}
                    onChange={onInputChange}
                />
                <label
                    htmlFor={labelFor}
                    className="absolute first-letter:uppercase text-sm font-bold text-gray-500 dark:text-gray-50 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-3 peer-focus:text-blue-400 peer-focus:dark:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto cursor-text"
                >
                    {labelText}
                </label>
            </div>
        );
    }
);

export default FloatingInput;
