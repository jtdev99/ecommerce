import { useState, useMemo, useCallback, useEffect } from "react";

import { AuthContext, TAuthContextProps } from "./auth.context";

type TAuthProviderProps = {
    children: React.ReactNode;
};

const AuthProvider = ({ children }: TAuthProviderProps) => {
    const [currentUser, setCurrentUser] = useState<object | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const updateInfoUser = useCallback((payload: object | null) => {
        setCurrentUser(payload);
    }, []);

    const value: TAuthContextProps = useMemo(() => {
        return {
            currentUser,
            updateInfoUser,
        };
    }, [currentUser, updateInfoUser]);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
