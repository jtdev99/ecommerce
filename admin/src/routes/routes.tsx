import { Suspense } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import { Dashboard, LogIn, NotFound } from "../pages";
import { TAuthContextProps, useAuth } from "../contexts";
import { AdminWrapper, Loading } from "../components";

const PrivateRoutes = () => {
    const { currentUser }: TAuthContextProps = useAuth();

    return currentUser != null ? <Outlet /> : <Navigate to="/auth/login" />;
};

export const AuthRoutes = () => {
    const { currentUser }: TAuthContextProps = useAuth();

    return currentUser == null ? <Outlet /> : <Navigate to="/" />;
};

export const AppRoutes = () => {
    return (
        <Suspense
            fallback={
                <div className="w-screen h-screen">
                    <Loading />
                </div>
            }
        >
            <Routes>
                {/* Auth routes */}
                <Route element={<AuthRoutes />}>
                    <Route path="/auth/login" element={<LogIn />} />
                </Route>
                {/* Dashboard routes */}
                <Route element={<PrivateRoutes />}>
                    <Route element={<AdminWrapper />}>
                        <Route path="/" element={<Dashboard />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};
