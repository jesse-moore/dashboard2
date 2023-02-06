import { routeGuards } from 'config/routeGuards';
import { IRouteGuard as IGuard } from 'interfaces';
import { useAuth } from 'lib/context/useAuth';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

interface IRouteGuard {
    children: ReactNode;
}

export const RouteGuard = ({ children }: IRouteGuard) => {
    const router = useRouter();
    const { userRoles, setIsAuthorized, isAuthorized } = useAuth();
    const [routeStatus, setRouteStatus] = useState<'Pending' | 'Complete'>('Complete');

    useEffect(() => {
        authCheck(router.asPath);

        const routeChangeStart = () => setRouteStatus('Pending');
        const routeChangeEnd = () => setRouteStatus('Complete');

        router.events.on('routeChangeStart', routeChangeStart);
        router.events.on('routeChangeComplete', routeChangeEnd);

        return () => {
            router.events.off('routeChangeStart', routeChangeStart);
            router.events.off('routeChangeComplete', routeChangeEnd);
        };
    }, []);

    useEffect(() => {
        if (routeStatus === 'Complete') {
            authCheck(router.asPath);
        } else {
            setIsAuthorized(false);
        }
    }, [routeStatus, userRoles]);

    const authCheck = (url: string) => {
        const paths = url
            .replace(/\?.*/, '')
            .split('/')
            .filter((path) => path !== '');

        let guard: IGuard | null = paths.length === 0 ? routeGuards._ : null;
        paths.forEach((path) => {
            if (guard === null) {
                guard = routeGuards[path];
            } else if (guard.children) {
                guard = guard.children[path];
            } else {
                guard === null;
            }
        });

        if (!guard) {
            setIsAuthorized(false);
            router.push({
                pathname: '/',
            });
            return;
        }

        const matchingRole = guard.roles.find((role) => userRoles.find((userRole) => userRole === role) !== undefined);

        if (matchingRole === undefined) {
            setIsAuthorized(false);
            router.push({
                pathname: guard.unauthorizedRedirect || '/',
                // query: { returnUrl: router.asPath },
            });
            return;
        }

        setIsAuthorized(true);
    };

    return <>{isAuthorized ? children : null}</>;
};
