import { onAuthStateChanged } from 'firebase/auth';
import { UserRole } from 'interfaces';
import { useAuth } from 'lib/context/useAuth';
import { auth, checkUserAuthorization, initFirebase, signOut } from 'lib/firebase';
import { ReactNode, useEffect } from 'react';

interface IAppWrapper {
    children: ReactNode;
}

export const AppWrapper = ({ children }: IAppWrapper) => {
    const { loading, setLoading, setAuthUser, setIsAuthenticated, setUserRoles } = useAuth();

    useEffect(() => {
        setLoading(true);
        initFirebase();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const isAuthorized = await checkUserAuthorization(user.uid);
                if (isAuthorized) {
                    setAuthUser(user);
                    setIsAuthenticated(true);
                    setUserRoles([UserRole.AUTHENTICATED]);
                } else {
                    setAuthUser(null);
                    setIsAuthenticated(false);
                    setUserRoles([UserRole.UNAUTHENTICATED]);
                    signOut();
                }
            } else {
                setUserRoles([UserRole.UNAUTHENTICATED]);
                setAuthUser(null);
                setIsAuthenticated(false);
            }
            setLoading(false);
        });
    }, []);

    return <div className="app-wrapper">{loading ? null : children}</div>;
};
