import React, { useContext } from "react";

export type TAuthContextProps = {
    currentUser: object | null;
    updateInfoUser: (payload: object | null) => void;
};

export const AuthContext = React.createContext<TAuthContextProps>(
    {} as TAuthContextProps
);

export const useAuth = () => {
    return useContext(AuthContext);
};
