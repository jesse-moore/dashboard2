import { AuthUser, UserRole } from 'interfaces';
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface IAuthContext {
    isAuthenticated: boolean;
    authUser: AuthUser | null;
    userRoles: UserRole[];
    loading: boolean;
    isAuthorized: boolean;
    setAuthUser: (authUser: AuthUser | null) => void;
    setUserRoles: (userRoles: UserRole[]) => void;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    setLoading: (loading: boolean) => void;
    setIsAuthorized: (loading: boolean) => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export function ProvideAuth({ children }: { children: ReactNode }) {
    const auth = useProvideAuth(children);
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be within AuthProvider');
    }
    return context;
};

function useProvideAuth(children: React.ReactNode) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authUser, setAuthUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [userRoles, setUserRoles] = useState<UserRole[]>([]);
    const [isAuthorized, setIsAuthorized] = useState(false);

    // useEffect(() => {

    // }, [loading]);

    return {
        authUser,
        isAuthenticated,
        loading,
        userRoles,
        isAuthorized,
        setUserRoles,
        setAuthUser,
        setIsAuthenticated,
        setIsAuthorized,
        setLoading,
    };
}
